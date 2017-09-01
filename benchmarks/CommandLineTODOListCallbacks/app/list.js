const getState = require('./states/getState.js')

const list = (callback) => {
  getState((err, data) => {
    if (err) throw err;
    console.log('\nID Description\n-- -----------')
    data.incompleteTasks.forEach(task =>
      console.log(`${task.id}  ${task.text}`))
    console.log(`You have ${data.incompleteTasks.length} tasks`)
    if(callback) callback()
  })
}

module.exports = list