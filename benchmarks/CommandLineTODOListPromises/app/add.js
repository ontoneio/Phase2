"use strict"
const {
  getState,
  setState
} = require('./states/jsonStates.js')

module.exports = (item, callback) => {
  getState().then((tasks) => {
    tasks.currentId += 1
    tasks.incompleteTasks.push({
      'id': tasks.currentId,
      'text': item
    })
    setState(tasks)
    let confirmMessage = `Created task ${tasks.currentId}`
    if (callback) callback(confirmMessage);
    console.log(confirmMessage);
  })
}