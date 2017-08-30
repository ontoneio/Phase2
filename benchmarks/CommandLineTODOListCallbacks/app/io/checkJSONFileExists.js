const fs = require('fs')
const path = require('path')
const pathToTask = path.resolve(__dirname, '../tasks.json')




const checkJSONFileExists = (callback) => {
  fs.stat(pathToTask, (err, stat) => callback(err, stat))
}

module.exports = checkJSONFileExists 

// checkJSONFileExists((err) => {
//   if(err) { // DOES NOT EXIST
//     throw new Error('File does not exist')
//   } else { // FILE EXIST 
//     console.log('Lets do it !!')
//   }
// })