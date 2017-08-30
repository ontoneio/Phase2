const getState = require('./states/getState')
const setState = require('./states/setState')


const add = (task, callback) => {

  getState((err, data) => {
    if (err) callback(err)
    data.incompleteTasks.push({
      id: ++data.currId,
      text: task
    })
    setState(data, function (err) {
      if (err) callback(err)
      callback(null)
    })
  })

}

module.exports = add;