"use strict"
module.exports = (fileName, object) => 
  require('fs').writeFileSync(fileName, JSON.stringify(object))

