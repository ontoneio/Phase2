"use strict"
const readFromFilePromise = require('../io/read.js')
const writeToFilePromise = require('../io/write.js')
const path = require('path')
const tasksPath = path.resolve(__dirname, `../tasks.json`)

const getState = () => readFromFilePromise(tasksPath)
const setState = (object) => writeToFilePromise(tasksPath, object)

module.exports = { getState, setState }