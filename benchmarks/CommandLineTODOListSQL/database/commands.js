const pg = require('./client.js')

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
    );`,
    (error) => {
      if (error) {
        pg.end()
        return callback(error)
      }
      console.log(`Task Added. Success!`)
      pg.end()
      callback(null)
    }
  )
}


const complete = (taskId, callback) => {
  pg.query(
    `
    UPDATE tasks
    SET is_complete = 'true'
    WHERE id = ${taskId}
    `,
    (error, row) => {
      if (error)
        return callback(error)
      //ID DOES NOT EXIST IF ROW COUNT IS 0
      if (row.rowCount === 0)
        return callback(new Error('TASK ID DOES NOT EXIST...'))

      console.log(`Task ${taskId} completed...`)
      pg.end()
      callback(null)
    }
  )
}

const deleteX = (taskId, callback) => {
  pg.query(
    `
    DELETE
    FROM tasks
    WHERE id = ${taskId};
    `,
    (error, row) => {
      if (error)
        return callback(error)
      //ID DOES NOT EXIST IF ROW COUNT IS 0
      if (row.rowCount === 0)
        return callback(new Error('TASK ID DOES NOT EXIST...'))

      console.log(`Task ${taskId} deleted...`)
      pg.end()
      callback(null)
    }
  )
}

module.exports = {
  add,
  complete,
  deleteX
}