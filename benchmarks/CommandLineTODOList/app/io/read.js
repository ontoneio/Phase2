"use strict"
module.exports = fileName => 
  JSON.parse(require('fs').readFileSync(fileName))