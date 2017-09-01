const getState = require('./states/getState')
const setState = require('./states/setState')
const checkJSONFileExists = require('./io/checkJSONFileExists.js')



const add = (task, callback) => {

  getState((err, data) => {
    if (err) callback(err)
    data.incompleteTasks.push({
      id: ++data.currId,
      text: task
    })
    setState(data, function (err) {
      if (err) callback(err)
      console.log(`Created Task ${data.currId}`)
      callback(null)
    })
  })

}

module.exports = add;