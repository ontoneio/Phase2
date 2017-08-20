"use strict"
const { getState, setState } = require('./states/jsonStates.js')

module.exports = ((taskId, callback) => {
  let tasks = getState()
  
  // Get the index of the task to move to deleteTasks 
  let deleteTaskIndex = tasks.incompleteTasks.reduce((index, task, idx) => 
                                              +task.id === +taskId ? idx : index, -1)

  //If task does not exist, notify and return 
  if(deleteTaskIndex === -1) {
    if(callback) callback(`Cannot find task ${taskId}`)
    console.log(`Cannot find task ${taskId}`);
    return;
  }
  
  let deleteTask = tasks.incompleteTasks[deleteTaskIndex];
  let confirmMessage = `Deleted Task ${deleteTask.id}: ${deleteTask.text}`
  
  //Move task at deleteTaskIndex into deleteTasks array
  tasks.deletedTasks.push(tasks.incompleteTasks.splice(deleteTaskIndex, 1)[0])

  if(callback) callback(confirmMessage)
  console.log(confirmMessage);

  //Update file 
  setState(tasks)
})