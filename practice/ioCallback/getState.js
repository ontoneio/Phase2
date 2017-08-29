const fs = require('fs')

//READ FROM FILE
// let obj = JSON.parse(fs.readFileSync('./tasks.json'))

module.exports = (callback) => 
  fs.readFile('./tasks.json',(err, data) => callback(err, JSON.parse(data)))
  
  // JSON.parse(fs.readFile('./checkFile.json',(data) => callback(data) ))


