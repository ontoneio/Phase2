const fs = require('fs')
const expect = require('chai').expect
const path = require('path')
const pathToTaskJSON = path.resolve(__dirname, '../app/tasks.json')
const checkJSONFileExists = require('../app/io/checkJSONFileExists.js')
const readJSONFile = require('../app/io/readJSONFile.js')
const writeJSONFile = require('../app/io/writeJSONFile.js')
const getState = require('../app/states/getState.js')
const setState = require('../app/states/setState.js')
const add = require('../app/add.js')
const list = require('../app/list.js')
const complete = require('../app/complete.js')
const deleteX = require('../app/deleteX.js')

describe('Function checkJSONFileExists', function () {

  beforeEach(function (done) {
    fs.unlink(pathToTaskJSON, function (err) {
      done()
    })
  })

  it('Passes the error to the call back if the file is not found', function (done) {
    checkJSONFileExists(function(err, stat) {
      expect(err).to.not.equal(null)
      done()
    })
  })

  it('Passes error as null if the file is found', function (done) {
    setState({
      tasks: []
    }, function (err) {
      if (err) throw err
      checkJSONFileExists(function(err, stat) {
        expect(err).to.equal(null)
        done()
      })
    })
  })

})

describe('Function readJSONFile', function () {

  it('Reads JSON from tasks.json file', function (done) {
    setState({
      hello: "greetings"
    }, function (err) {
      if (err) return done(err)
      readJSONFile(pathToTaskJSON, function (err, data) {
        expect(data).to.deep.equal({
          hello: "greetings"
        })
        done()
      })
    })
  })

  it('Passes error to the callback if the file does not exist', function (done) {
    readJSONFile('path/to/nowhere', function (err, data) {
      expect(err).to.not.equal(null)
      done()
    })
  })

})

describe('Function writeJSONFile', function () {

  it('Writes JSON to a file', function (done) {
    writeJSONFile(pathToTaskJSON, {
      hello: "world"
    })
    getState(function (err, data) {
      expect(data).to.deep.equal({
        hello: "world"
      })
      done()
    })
  })

  it('Passes the callback an error if the file does not exist', function (done) {
    writeJSONFile('./path/to/nowhere', {
      good: "evening"
    }, function (err) {
      expect(err).to.not.equal(null)
      done()
    })
  })

})

describe('Function getState', function () {

  it('Gets the current state of the JSON', function (done) {
    setState({
      happxyyy: "Birthday"
    }, function (err) {
      if (err) return done(err)
      getState(function (err, data) {
        if (err) return done(err)
        expect(data).to.deep.equal({
          happxyyy: "Birthday"
        })
        done()
      })
    })
  })

})

describe('Function setState', function () {

  it('Sets the state in tasks.json to the specified object', function (done) {
    setState({
      puppy: "Doggy"
    }, function (err) {
      if (err) return done(err)
      getState(function (err, data) {
        if (err) return done(err)
        expect(data).to.deep.equal({
          puppy: "Doggy"
        })
        done()
      })
    })
  })

})

describe('Function add', function () {

  beforeEach(function (done) {
    setState({
      currId: 0,
      incompleteTasks: [],
      completeTasks: [],
      deleteTasks: []
    }, function (err) {
      if (err) done(err)
      done();
    })
  })

  it('Adds the given task to the incompleteTasks array in tasks.json', function (done) {
    add("Finish Phase Modules", function (err) {
      if (err) done(err)
      getState(function (err, data) {
        if (err) done(err)
        expect(data).to.deep.equal({
          "currId": 1,
          incompleteTasks: [{
            id: 1,
            text: "Finish Phase Modules"
          }],
          completeTasks: [],
          deleteTasks: []
        })
        done()
      })
    })
  })

  it('Assigns every new item a unique id', function (done) {
    add("Wake Up", function (err) {
      if (err) throw err
      add("Exercise", function (err) {
        if (err) throw err
        add("Goto Work", function (err) {
          if (err) throw err
          getState(function (err, data) {
            if (err) throw err
            expect(data.incompleteTasks[0].id).to.equal(1)
            expect(data.incompleteTasks[1].id).to.equal(2)
            expect(data.incompleteTasks[2].id).to.equal(3)
            done()
          })
        })
      })
    })
  })

})

describe('Function complete', function () {

  beforeEach(function (done) {
    setState({
      "currId": 3,
      "incompleteTasks": [{
          "id": 1,
          "text": "Wake Up"
        },
        {
          "id": 2,
          "text": "Exercise"
        },
        {
          "id": 3,
          "text": "Goto Work"
        }
      ],
      "completeTasks": [],
      "deleteTasks": []
    }, function (err) {
      if (err) throw err
      done()
    })
  })

  it('Moves the task with given id to the completeTasks array', function (done) {
    complete(2, function (err) {
      if (err) return err
      getState(function (err, data) {
        expect(data).to.deep.equal({
          "currId": 3,
          "incompleteTasks": [{
              "id": 1,
              "text": "Wake Up"
            },
            {
              "id": 3,
              "text": "Goto Work"
            }
          ],
          "completeTasks": [{
            "id": 2,
            "text": "Exercise"
          }],
          "deleteTasks": []
        })
        done()
      })
    })
  })

  it("Passes an error to the callback if the task doesnot exist", function (done) {
    complete(4, function (err) {
      expect(err).to.not.equal(null)
      done()
    })
  })
})

describe('Function delete', function () {

  beforeEach(function (done) {
    setState({
      "currId": 3,
      "incompleteTasks": [{
          "id": 1,
          "text": "Wake Up"
        },
        {
          "id": 2,
          "text": "Exercise"
        },
        {
          "id": 3,
          "text": "Goto Work"
        }
      ],
      "completeTasks": [],
      "deleteTasks": []
    }, function (err) {
      if (err) throw err
      done()
    })
  })

  it('Moves the task with given id to the deleteTasks array', function (done) {
    deleteX(2, function (err) {
      if (err) return err
      getState(function (err, data) {
        expect(data).to.deep.equal({
          "currId": 3,
          "incompleteTasks": [{
              "id": 1,
              "text": "Wake Up"
            },
            {
              "id": 3,
              "text": "Goto Work"
            }
          ],
          "completeTasks": [],
          "deleteTasks": [{
            "id": 2,
            "text": "Exercise"
          }]
        })
        done()
      })
    })
  })
})