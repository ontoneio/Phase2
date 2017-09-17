const pg = require('./client.js')
const list = require('./queries')

const add = (taskDescription, callback) => {

  if (taskDescription === undefined || taskDescription.length === 0) {
    pg.end()
    return callback(new Error('TASK DESCRIPTION IS REQUIRED'))
  }

  pg.query(
    `
    INSERT INTO tasks (
      description, 
      is_complete
    )
    VALUES
    (
      '${taskDescription}', 
      'false'
    );`, (error) => {
      if (error) {
        pg.end()
        return callback(error)
      }
      console.log(`\nTask Added. Success!`)
      callback(null)
      list(null, (error) => {
        if (error) throw error
        pg.end()
      })
    }
  )
}

const completeAndDeleteHandler = (callback, taskId, status, error, row) => {
  if (error)
    return callback(error)
  //ID DOES NOT EXIST IF ROW COUNT IS 0
  if (row.rowCount === 0)
    return callback(new Error('TASK ID DOES NOT EXIST...'))

  console.log(`\nTask ${taskId} ${status}...`)
  callback(null)
  list(null, (error) => {
    if (error) throw error
    pg.end()
  })
}

const complete = (taskId, callback) => {
  pg.query(
    `
    UPDATE tasks
    SET is_complete = 'true'
    WHERE id = ${taskId}
    `, (error, row) => {
      completeAndDeleteHandler(callback, taskId, 'Completed', error, row)
    }
  )
}

const deleteX = (taskId, callback) => {
  pg.query(
    `
    DELETE
    FROM tasks
    WHERE id = ${taskId};
    `, (error, row) => {
      completeAndDeleteHandler(callback, taskId, 'Deleted', error, row)
    }
  )
}

module.exports = {
  add,
  complete,
  deleteX
}
