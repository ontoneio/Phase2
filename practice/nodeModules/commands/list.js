const list = () => {
  anotherList()
  console.log('I am the list function')
}

const anotherList = () => {
  console.log('I am ANOTHER LIST')
}



// module.exports.list = list

module.exports = { list, anotherList }


