"use strict"
const {
  getState,
  setState
} = require('./states/jsonStates.js')

module.exports = ((taskId, callback) => {
  // let tasks = getState()
  getState().then((tasks) => {
    // Get the index of the task to move to completeTasks 
    let completedTaskIndex = tasks.incompleteTasks.reduce((index, task, idx) =>
      +task.id === +taskId ? idx : index, -1)

    //If task does not exist, notify and return 
    if (completedTaskIndex === -1) {
      if (callback) callback(`Cannot find task ${taskId}`)
      console.log(`Cannot find task ${taskId}`);
      return;
    }

    let completedTask = tasks.incompleteTasks[completedTaskIndex];
    let confirmMessage = `Completed Task ${completedTask.id}: ${completedTask.text}`

    //Move task to completeTaskIndex in completeTasks array
    tasks.completeTasks.push(tasks.incompleteTasks.splice(completedTaskIndex, 1)[0])

    if (callback) callback(confirmMessage)
    console.log(confirmMessage);


    //Update file 
    setState(tasks)
  })

})