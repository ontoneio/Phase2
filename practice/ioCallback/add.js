const getState = require('./getState.js')
const setState = require('./setState.js')

module.exports = (newItem, callback) => {
  //GET THE STATE
  getState((err, data) => {
    //UPDATE THE STATE
    if(err) throw new Error('File does not exist')
    data = JSON.parse(data)
    data.id += 1
    data.incompleteTasks.push({id: data.id, text: newItem})
    //SET THE STATE
    setState(data, (err) => callback(err))
  })


} 