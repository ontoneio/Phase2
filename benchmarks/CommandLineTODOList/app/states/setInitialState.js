"use strict"

const { setState } = require('./jsonStates.js')

module.exports = () => {
  let initialObject = {
    currentId: 0,
    incompleteTasks: [],
    completeTasks: [],
    deletedTasks: [] 
  };
  setState(initialObject);
} 