/**
 * @description 提取changelog.md的日志，用于github release
 * @author Gkxie
 * @date 2019-12-25
 */
const minimist = require('minimist')
const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it')
const pkg = require('../../package.json')
const args = minimist(process.argv.slice(2))
const md = new MarkdownIt()
const html = md.render(
  fs.readFileSync(
    args.hasOwnProperty('path')
      ? path.resolve(args.path)
      : path.resolve(__dirname, '../../examples/docs/docs/changelog.md')
    , { encoding: 'utf-8' })
)
  .split('\n')
  .filter(s => Boolean(s))
const isH3 = /<h3>(\S+)<\/h3>/
const versionList = {}
let temp = []
for (let i = 0; i < html.length; i++) {
  if (html[i].indexOf('<h2>') === 0 || !html[i]) {
    continue
  } else if (isH3.test(html[i])) {
    if (temp.length > 0) {
      versionList[temp[0]] = temp[1]
      temp = []
    }
    temp[0] = html[i].match(isH3)[1]
  } else if (i === html.length - 1) {
    versionList[temp[0]] = temp[1]
    temp = []
  } else {
    temp[1] = temp[1] ? temp[1] + html[i] : html[i]
  }
}
const versions = Object.keys(versionList)
module.exports = versions

if (versions.length > 0 && args.path) {
  process.stdout.write((versionList[pkg.version] || '') + '\n')
}