const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL ||
  'postgresql://localhost:5432/todolist'

const client = new Client( {
  connectionString: connectionString
})

client.connect()

module.exports = client 


//Tasks 

// add a task to the database 
// update a task from the databse 
// delete a task from the database
// read task list from the database

//    |id|description|is_complete|
//    | 1|Do HW      |false      | 
//    | 2|Do CW      |true       | 
//    | 3|Do WW      |false      | 




