const fs = require('fs')

const writeJSON = (fileName, content, callback) => {
  fs.writeFile(fileName, JSON.stringify(content), (err) => {
    if(callback) callback(err)
  })
}

module.exports = writeJSON;