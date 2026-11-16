# Graph Report - CPNSGO  (2026-10-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 141 nodes · 146 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f34565aa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_fs
- package.json
- build_and_deploy
- with
- generate-bank.js
- appsscript.json
- check_line.js
- check_lines.js
- check_lines2.js
- check_lines3.js
- check_module.js
- check_module2.js
- check_module3.js
- check_module4.js
- check_quiz_result.js
- check_chain.js
- check_glass.js
- replace_bank.js

## God Nodes (most connected - your core abstractions)
1. `with` - 7 edges
2. `build_and_deploy` - 5 edges
3. `steps` - 5 edges
4. `@playwright/test` - 4 edges
5. `qc_design` - 4 edges
6. `steps` - 4 edges
7. `node-fetch` - 3 edges
8. `jobs` - 3 edges
9. `node-fetch@^2.7.0` - 2 edges
10. `@playwright/test@^1.64.0` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (20 total, 5 thin omitted)

### Community 0 - "ref_fs"
Cohesion: 0.07
Nodes (16): content, html, content, lines, match, content, match, content (+8 more)

### Community 1 - "package.json"
Cohesion: 0.10
Nodes (16): author, dependencies, node-fetch@^2.7.0, description, devDependencies, @playwright/test@^1.64.0, keywords, license (+8 more)

### Community 2 - "build_and_deploy"
Cohesion: 0.15
Nodes (12): name, needs, runs-on, jobs, build_and_deploy, qc_design, name, branches (+4 more)

### Community 3 - "with"
Cohesion: 0.22
Nodes (11): steps, steps, name, run, uses, with, channelId, firebaseServiceAccount (+3 more)

### Community 4 - "generate-bank.js"
Cohesion: 0.20
Nodes (8): fsSource, htmlPath, jsArrayStr, match, newBank, tiuPool, tkpPool, twkPool

### Community 6 - "appsscript.json"
Cohesion: 0.40
Nodes (4): dependencies, exceptionLogging, runtimeVersion, timeZone

### Community 7 - "check_line.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 8 - "check_lines.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 9 - "check_lines2.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 10 - "check_lines3.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 11 - "check_module.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 12 - "check_module2.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 13 - "check_module3.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 14 - "check_module4.js"
Cohesion: 0.50
Nodes (3): content, lines, match

### Community 15 - "check_quiz_result.js"
Cohesion: 0.50
Nodes (3): content, lines, match

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Should `ref_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10476190476190476 - nodes in this community are weakly interconnected._