const getState = require('./states/getState.js')
const setState = require('./states/setState.js')

const complete = (taskID, callback) => {
  getState((err, data) => {
    if (err) callback(err)
    completeTaskIndex = data.incompleteTasks.findIndex(task => task.id === taskID)
    if (completeTaskIndex === -1) {
      callback(new Error('Task Not Found'))
    } else {
      data.completeTasks.push(data.incompleteTasks.splice(completeTaskIndex, 1)[0])
      setState(data, (err) => {
        if (err) throw err
        callback(null)
      })
    }
  })
}

module.exports = complete;