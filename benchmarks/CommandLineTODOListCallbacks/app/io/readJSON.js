const fs = require('fs')

const readJSON = (fileName, callback) => {
  fs.readFile(fileName, (err, data) => {
    data = err === null ? JSON.parse(data) : data
    callback(err, data)
  })
}
module.exports = readJSON;


// readJSON('../tasks.json', function (err, data) {
//   if(err) console.error(err)
//   console.log(`GETTING THE DATA HERE: ${data.hello} and Error is ${err}`)
// })

