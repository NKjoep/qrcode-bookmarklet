let scriptString = require('fs').readFileSync('./qrcode-bookmarklet-src.js').toString();
scriptString = scriptString
  .replace(/\n/g, '')
  .replace(/\r/g, '')

console.log(`
javascript:${scriptString};
`)
