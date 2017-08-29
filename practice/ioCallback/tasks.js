'use strict'
const getState = require('./getState.js')
const setState = require('./setState.js')
const add = require('./add.js')
const list = require('./list.js')

let coreCommand = process.argv[2]
let args = `${process.argv.slice(3).join(' ')}`

getState((err, data) => {
//IF FILE DOES NOT EXIST, CREATE IT  
  if (err) {
    setState({
      id: 0,
      incompleteTasks: [],
      completeTasks: [],
      deletedTasks: []
    }, (err) => {
      if (err) throw new Error('Cannot write to `tasks.json`')
      executeCommand(coreCommand)
    })
  } else { // File exists, execute the command
    executeCommand(coreCommand)
  }
})


// console.log('smooth')
// console.log(`The coreCommand is ${coreCommand} and the args is ${args}`)
function executeCommand(coreCommand) {
  switch (coreCommand) {
    case 'add':
      add(args, (err) => {
        if (err) console.error(err)
        console.log('Successfully Added From tasks.js')
      })
      break;
    case 'list':
      list()
  }
}