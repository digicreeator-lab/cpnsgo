// GAS Backend for CPNS GO
const SPREADSHEET_ID = ''; // Kosongkan jika script ini terikat langsung ke Spreadsheet (Container-bound)

function getDb() {
  return SPREADSHEET_ID ? SpreadsheetApp.openById(SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

function getSheet(sheetName) {
  const db = getDb();
  let sheet = db.getSheetByName(sheetName);
  if (!sheet) {
    sheet = db.insertSheet(sheetName);
    if (sheetName === 'Users') {
      sheet.appendRow(['username', 'password', 'name', 'foto', 'role', 'token']);
    } else if (sheetName === 'Scores') {
      sheet.appendRow(['username', 'refId', 'tipe', 'skor', 'timestamp']);
    }
  }
  return sheet;
}

function generateToken() {
  return Utilities.getUuid();
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'active', message: 'CPNS GO API is running.' })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const action = postData.action;
    const args = postData.args || [];
    
    let result = { success: false, message: 'Unknown action' };
    
    if (action === 'loginUser') {
      result = apiLoginUser(args[0], args[1]);
    } else if (action === 'validateToken') {
      result = apiValidateToken(args[0]);
    } else if (action === 'saveScore') {
      result = apiSaveScore(args[0], args[1], args[2], args[3]);
    } else if (action === 'getScores') {
      result = apiGetScores(args[0], args[1]);
    } else if (action === 'resetUserProgress') {
      result = apiResetUserProgress(args[0]);
    }
    
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// API IMPLEMENTATIONS
// ==========================================

function apiLoginUser(username, password) {
  const sheet = getSheet('Users');
  const data = sheet.getDataRange().getValues();
  
  // Baris 0 adalah Header
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row[0] == username && row[1] == password) {
      const token = generateToken();
      // Update token di DB
      sheet.getRange(i + 1, 6).setValue(token);
      
      return { 
        success: true, 
        token: token, 
        data: { 
          username: row[0], 
          name: row[2] || 'User CPNS', 
          foto: row[3] || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', 
          role: row[4] || 'Member' 
        } 
      };
    }
  }
  
  // AUTO-REGISTER JIKA BELUM ADA (Karena ini aplikasi mockup/tes)
  // Untuk production, matikan ini dan kembalikan error "User tidak ditemukan"
  const token = generateToken();
  sheet.appendRow([username, password, username, '', 'Member', token]);
  
  return { 
    success: true, 
    token: token, 
    data: { 
      username: username, 
      name: username, 
      foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', 
      role: 'Member' 
    } 
  };
}

function getUserFromToken(token) {
  if (!token) return null;
  const sheet = getSheet('Users');
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][5] === token) {
      return data[i][0]; // return username
    }
  }
  return null;
}

function apiValidateToken(token) {
  const username = getUserFromToken(token);
  if (username) {
    return { valid: true, user: { username: username, role: 'Member' } };
  }
  return { valid: false, message: 'Sesi berakhir, silakan login ulang' };
}

function apiSaveScore(token, refId, tipe, skor) {
  const username = getUserFromToken(token);
  if (!username) return { success: false, message: 'Unauthorized' };
  
  const sheet = getSheet('Scores');
  sheet.appendRow([username, refId, tipe, skor, new Date().toISOString()]);
  
  return { success: true };
}

function apiGetScores(token, limit) {
  const username = getUserFromToken(token);
  if (!username) return { success: false, message: 'Unauthorized' };
  
  const sheet = getSheet('Scores');
  const data = sheet.getDataRange().getValues();
  
  let scores = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == username) {
      scores.push({
        refId: data[i][1],
        tipe: data[i][2],
        skor: data[i][3],
        timestamp: data[i][4]
      });
    }
  }
  
  return { success: true, data: scores };
}

function apiResetUserProgress(token) {
  const username = getUserFromToken(token);
  if (!username) return { success: false, message: 'Unauthorized' };
  
  const sheet = getSheet('Scores');
  const data = sheet.getDataRange().getValues();
  
  // Hapus dari bawah ke atas untuk menghindari index bergeser
  let deletedCount = 0;
  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][0] == username) {
      sheet.deleteRow(i + 1);
      deletedCount++;
    }
  }
  
  return { success: true, message: `Berhasil menghapus ${deletedCount} baris data.` };
}
