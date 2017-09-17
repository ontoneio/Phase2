const pg = require('./client.js')

const add = (taskDescription, callback) => {

  if (typeof taskDescription !== 'string' || taskDescription.length === 0) {
    pg.end()
    throw new Error('Task description is required')
  }

  pg.query
  (
    `
    INSERT INTO tasks (
      description, 
      is_complete
    )
    VALUES
    (
      '${taskDescription}', 
      'false'
    );`, callback
  )
}


const complete = (taskId, callback) => {
  pg.query
  (
    `
    UPDATE tasks
    SET is_complete = 'true'
    WHERE id = ${taskId}
    `, function() {
      callback(taskId)
    }
  )
}

const deleteX = (taskId, callback) => {
  pg.query
  (
    `
    DELETE
    FROM tasks
    WHERE id = ${taskId};
    `, function() {
      callback(taskId)
    }
  )
}

module.exports = {
  add, 
  complete, 
  deleteX
}
