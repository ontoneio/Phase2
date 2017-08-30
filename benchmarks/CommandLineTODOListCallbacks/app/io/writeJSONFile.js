const fs = require('fs')

const writeJSONFile = (fileName, content, callback) => {
  fs.writeFile(fileName, JSON.stringify(content), (err) => {
    if(callback) callback(err)
  })
}

module.exports = writeJSONFile;