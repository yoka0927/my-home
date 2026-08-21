import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../editor-server.mjs', import.meta.url), 'utf8')

assert.match(
  source,
  /async function ensureCommitIdentity\(\)[\s\S]*?config', '--local', 'user\.name'[\s\S]*?config', '--local', 'user\.email'/,
  'publish must ensure a local Git commit identity before committing changes',
)
assert.match(
  source,
  /await ensureCommitIdentity\(\)\s+await run\('git', \['add', '-A'\]\)/,
  'publish must ensure identity before staging changes',
)

console.log('commit identity regression checks passed')
