const pg = require('./client.js')

const add = (taskDescription, callback) => {
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
    )`
  )
  callback()
  process.exit(0)
}


const complete = (taskId, callback) => {
  pg.query
  (
    `
    UPDATE tasks
    SET is_complete = 'false'
    WHERE id = ${taskId}
    `, () => {
      callback(taskId)
      process.exit(0)
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
    `, () => {
      callback(taskId)
      process.exit(0)
    }
  )
}

module.exports = {
  add, 
  complete, 
  deleteX
}

// deleteX(2, (taskId) => {
//   console.log(`Task ${taskId} is deleted`)
// })

//  UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;

// add('Go to school', function() {
//   console.log('successfully added!')
// })


// const getUserByEmail = (email, callback) => {
//   pg.query('SELECT * FROM users WHERE email=$1 LIMIT 1', [email], (error, result) => {
//     if(error) {
//       callback(error)
//     } else {
//       callback(null, result.rows[0])
//     }
//   })
// }