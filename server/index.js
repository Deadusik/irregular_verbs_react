const path = require('path')

//console.log('first path:', path.join(__dirname))
//console.log('second path:', path.join(__dirname))
//console.log('third path:', path.resolve('/third'))


//console.log('parse path:', fullpath)
const filepath = path.resolve(__dirname, 'index.js')
console.log('file expansion:', path.extname(filepath))

console.log('separator OS:', path.sep)
console.log('check is absolute path:', path.isAbsolute(__dirname))
console.log('get filename:', path.basename(__dirname))
