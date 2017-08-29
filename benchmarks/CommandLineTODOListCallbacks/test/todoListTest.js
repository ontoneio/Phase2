const expect = require('chai').expect
const path = require('path')
const pathToTaskJSON = path.resolve(__dirname, '../app/tasks.json')
const readJSON = require('../app/io/readJSON.js')
const writeJSON = require('../app/io/writeJSON.js')
const getState = require('../app/states/getState.js')
const setState = require('../app/states/setState.js')
const add = require('../app/add.js')
const list = require('../app/list.js')
const complete = require('../app/complete.js')
const trash = require('../app/trash.js')

// readJSON 
// reads the content if the file exists 
describe('Function readJSON', function () {

  it('Reads JSON from tasks.json file', function(done) {
    setState({ hello: "greetings" })
    readJSON(pathToTaskJSON, function (err, data) {
      expect(data).to.deep.equal({ hello: "greetings" })
      done()
    })
  })

  it('Passes error to the callback if the file does not exist', function (done) {
    readJSON('path/to/nowhere', function(err, data) {
      expect(err).to.not.equal(null)
      done()
    })
  })

})

describe('Function writeJSON', function() {

  it('Writes JSON to a file', function(done) {
    writeJSON(pathToTaskJSON, {hello: "world"})
    getState(function(err, data) {
      expect(data).to.deep.equal({hello: "world"})
      done()
    })
  })

  it('Passes the callback an error if the file does not exist', function(done) {
    writeJSON('./path/to/nowhere', {good: "evening"}, function(err) {
      expect(err).to.not.equal(null)
      done()
    })
  })
  
})

// describe('Function writeJSON', function(done) {

//   it('Writes JSON to tasks.json file', function() {
    
//   })

// })

// })

// readJSON('/nowhere/', (data) => {console.log(data)
// it('Throws an error if JSON is valid', function(done) {
//   readJSON(pathToTaskJSON, function(data) {
//     done()
//   })

// expect(function () {
//   readJSON(pathToTaskJSON, function (data) {
//     done()
//   })
// }.to.throw(Error))
// expect(() => addContact('Emma', true, 30).to.throw(Error));
// })

// })


/*
describe('The first Test', function() {

  beforeEach(function() {
    console.log('Executing a if block')
  })

  it('', function() {
    
  })

  it('', function() {

  })

  it('', function() {

  })

  it('', function() {

  })


})
*/



// it('Throws an error if JSON is invalid', function (done) {
//   expect(function () {
//     // readJSON(pathToTaskJSON, function (data) {
//       throw new Error('hahaha');
//       done()
//     }.to.throw(Error))
// })