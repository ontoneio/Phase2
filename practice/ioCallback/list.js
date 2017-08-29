const getState = require('./getState.js')
// const setState = require('./setState.js')

module.exports = () => {
  getState((err, data) => {
    console.log(`\nID Description\n-- -----------`)
    // console.log(`The data is ${data.incompleteTasks}`)
    data.incompleteTasks.forEach((task) =>
      console.log(`${task.id} ${task.text}`))
  })
}