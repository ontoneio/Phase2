const getState = require('./states/getState.js')

const list = () => {
  getState((err, data) => {
    if (err) throw err;
    console.log('\nID Description\n-- -----------')
    data.incompleteTasks.forEach(task =>
      console.log(`${task.id}  ${task.text}`))
  })
}

module.exports = list