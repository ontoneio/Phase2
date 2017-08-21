"use strict"

const path = require('path')
const expect = require('chai').expect
const setInitialState = require('../app/states/setInitialState')
const {
  getState,
  setState
} = require('../app/states/jsonStates')
const addNewTask = require('../app/add.js') // name change? TODO:
const listTask = require('../app/list.js')
const completeTask = require('../app/complete.js')
const deleteTask = require('../app/delete.js')


describe('Command Line Todo List', () => {
  describe('Function setInitialState', () => {
    it('It creates `tasks.json` file', (done) => {
      setInitialState()
      const tasksPath = path.resolve(__dirname, '../app/tasks.json')
      expect(require('fs').existsSync(tasksPath)).to.equal(true)
      done()
    })
    it('It initializes `tasks.json` with the basic structure', () => {
      // let data = getState()
      getState().then((data) => {
        let expected = {
          "currentId": 0,
          "incompleteTasks": [],
          "completeTasks": [],
          "deletedTasks": []
        }
        expect(data).to.eql(expected)
      })

    })
  })


  describe('Function addNewTask', () => {
    let consoleText = '';
    it('It adds the new item to `tasks.json`', () => {
      addNewTask('Do first task', (response) => consoleText = response)
      // let data = getState();
      getState().then((data) => {
        expect(data.incompleteTasks[0].text).to.equal('Do first task') 
      })
    })
    it('It assigns the new task an unique ID', () => {
      // let data = getState();
      getState().then((data) => {
        expect(data.incompleteTasks[0].id).to.equal(1)
      })
    })
    it('It calls the callback with string that is printed to the console', () => {
      expect(consoleText).to.equal('Created task 1')
    })
  })

  describe('Function completeTask', () => {
    let consoleText = '';
    it('It moves the completed task in the completedTask array in `tasks.json`', () => {
      completeTask(1, (response) => consoleText = response)
      // let data = getState()
      getState().then((data) => {
        expect(data.completeTasks[0].text).to.equal('Do first task')
      })
    })
    it('It calls the callback with string that is printed to the console', () => {
      expect(consoleText).to.equal('Completed Task 1: Do first task')
    })
    it('Notifies the user if the taskID doesnot exist', () => {
      completeTask(1, (response) => consoleText = response)
      expect(consoleText).to.equal('Cannot find task 1')
    })
  })

  describe('Function deleteTask', () => {
    let consoleText = '';
    it('It moves the deleted task in the deletedTask array in `tasks.json`', () => {
      addNewTask("Do first task")
      addNewTask("Do second task")
      deleteTask(2, (response) => consoleText = response)
      // let data = getState()
      getState().then((data) => {
      expect(data.deletedTasks[0].text).to.equal('Do first task')
      })

    })
    it('It calls the callback with string that is printed to the console', () => {
      expect(consoleText).to.equal('Deleted Task 2: Do first task')
    })
    it('Notifies the user if the taskID doesnot exist', () => {
      completeTask(1, (response) => consoleText = response)
      expect(consoleText).to.equal('Cannot find task 1')
    })
  })
})