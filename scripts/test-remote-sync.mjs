import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const source = await readFile(new URL('../editor-server.mjs', import.meta.url), 'utf8')

assert.match(source, /async function syncWithRemoteBranch\(branch\)[\s\S]*?fetch', 'origin', branch[\s\S]*?rebase', `origin\/\$\{branch\}`/)
assert.match(source, /async function pushAndVerify\(branch, expectedCommit, beforeVerification\)[\s\S]*?await syncWithRemoteBranch\(branch\)/)
assert.match(source, /git', \['rebase', '--abort'\]/)

console.log('remote sync regression checks passed')
