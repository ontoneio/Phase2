"use strict"
const fs = require('fs')

// module.exports = (fileName, object) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(fileName, JSON.stringify(object))
//   })
// }

module.exports = (fileName, object) => 
  new Promise((reject, resolve) =>
    fs.writeFile(fileName, JSON.stringify(object)))  
