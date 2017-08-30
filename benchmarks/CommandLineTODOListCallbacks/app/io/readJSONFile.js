const fs = require('fs')

const readJSONFile = (fileName, callback) => {
  fs.readFile(fileName, (err, data) => {
    data = err === null ? JSON.parse(data) : data
    callback(err, data)
  })
}
module.exports = readJSONFile;

