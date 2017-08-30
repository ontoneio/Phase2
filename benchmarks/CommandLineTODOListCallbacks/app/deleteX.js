const getState = require('./states/getState.js')
const setState = require('./states/setState.js')

const deleteX = (taskID, callback) => {
  getState((err, data) => {
    if (err) callback(err)
    deleteTaskIndex = data.incompleteTasks.findIndex(task => task.id === taskID)
    if (deleteTaskIndex === -1) {
      callback(new Error('Task Not Found'))
    } else {
      data.deleteTasks.push(data.incompleteTasks.splice(deleteTaskIndex, 1)[0])
      setState(data, (err) => {
        if (err) throw err
        callback(null)
      })
    }
  })
}

module.exports = deleteX;