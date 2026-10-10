const fetch = require('node-fetch');

const API_URL = 'https://ipn-api-proxy.digicreeator.workers.dev';

async function test() {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'loginUser', args: ['IPN.09.13.00001', '1995'] })
  });
  
  const text = await res.text();
  console.log(text);
}

test();
