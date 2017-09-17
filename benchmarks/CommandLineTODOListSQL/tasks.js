#!/usr/bin/env node

const {
  add, 
  complete, 
  deleteX
} = require('./database/commands.js')


const client = require('./database/client.js')
const list = require('./database/queries.js')

const command = process.argv[2]
const args = process.argv.slice(3).join(' ')

if(command === "list") {
  list(function(numOfTasks) {
    console.log(`You have ${numOfTasks} Tasks...`)
    client.end()
  })
} else if(command === "add") {
  add(args, function() {
    console.log(`Added. Success!`)
    client.end()    
  })
} else if(command === "complete") {
  complete(args, function(taskId) {
    console.log(`Task ${taskId} completed...`)
    client.end()
  })
} else if(command === "delete") {
  deleteX(args, function(taskId) {
    consle.log(`Task ${taskId} deleted...`)
    client.end()
  })
} else {
  console.log('Invalid command')
  client.end()
}



// console.log(list.toString())

// const command = process.argv[2]
// const args = process.argv.slice(3).join(' ')

// ./tasks list 
// ./tasks add "Eat Breakfast"
// ./tasks complete 2 
// ./tasks delete 3 

// const commands = {
//   list: function() {
//     console.log('running the list function')
//     list()
//   }, 
//   add: function(taskDescription) {
    
//   }, 
//   complete: function(taskId) {

//   }, 
//   delete: function() {

//   }
// }
// // console.log(`The function is ${commands[command]}`)
// // commands[command]
// list(function() {
//   client.end()  
// })

// process.exit(0)
