const expect = require('chai').expect
const {
  add,
  complete,
  deleteX
} = require('../database/commands.js')

const pg = require('../database/client.js')
pg.connectionParameters.database = 'todolist_test'


describe('#add', function () {

  beforeEach(function (done) {
    pg.query(`truncate tasks`, (error) => {
      done(error)
    })
  })

  it('Adds a task to the database', function (done) {
    add('Wake Up', function (error) {
      pg.query(`SELECT * FROM tasks`, function (error, result) {
        expect(result.rows.length).to.equal(1)
        done()
      })
    })
  })

  it('Supplies the callback an error if task description is not provided', function (done) {
    add(undefined, function (error) {
      expect(error).to.not.equal(null)
      done()
    })
  })




})

describe('#complete', function () {

  beforeEach(function (done) {
    pg.query(`truncate tasks`, (error) => {
      done(error)
    })
  })


  it('Completes a task from the database', function (done) {
    add('Eat Bread', function (error) {
      add('Drink Milk', function (error) {
        add('Wash Dishes', function (error) {
          pg.query(`
              SELECT id FROM tasks WHERE description='Drink Milk'
            `, function (error, result) {
            complete(result.rows[0].id, function (error) {
              pg.query(`
                  SELECT * FROM tasks WHERE description='Drink Milk'
                `, function (error, result) {
                expect(result.rows[0].is_complete).to.equal(true)
                done()
              })
            })
          })
        })
      })
    })
  })



})