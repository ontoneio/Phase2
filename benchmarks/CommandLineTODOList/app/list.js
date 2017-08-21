"use strict"
const {
  getState,
  setState
} = require('./states/jsonStates.js');

module.exports = (callback) => {
  // let tasks;
  getState().then((tasks) => {
    let consoleString = `\n ID  Desciption\n --  ----------\n`
    tasks.incompleteTasks.forEach(task =>
      consoleString += ` ${task.id}   ${task.text}\n`)
      
    consoleString += ` You have ${tasks.incompleteTasks.length} tasks`;
    if (callback) callback(consoleString);
    console.log(consoleString);
  })

}