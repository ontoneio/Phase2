"use strict"
const readFromFile = require('../io/read.js')
const writeToFile = require('../io/write.js')
const path = require('path')
const tasksPath = path.resolve(__dirname, `../tasks.json`)

const getState = () => readFromFile(tasksPath)
const setState = (object) => writeToFile(tasksPath, object)

module.exports = { getState, setState }