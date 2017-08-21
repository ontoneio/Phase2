"use strict"

module.exports = (fileName, object) =>
  new Promise((reject, resolve) =>
    require('fs').writeFile(fileName, JSON.stringify(object), (err) => {
      if (err) console.log(`Error Caught ${err}`)
    }))