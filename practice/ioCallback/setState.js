const fs = require('fs')
//WRITE TO FILE
// obj = {newItem: "newItem"}


module.exports = (obj, callback) =>
  require('fs').writeFile('./tasks.json', JSON.stringify(obj), (err) => callback(err));

// console.log('Hello from writeToFile.js')  JSON.stringify(obj)
