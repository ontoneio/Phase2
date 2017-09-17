#!/usr/bin/env node

const {
  add,
  complete,
  deleteX
} = require('./database/commands.js')

const list = require('./database/queries.js')

const command = process.argv[2]
const args = process.argv.slice(3).join(' ')

const commands = {
  list, 
  add, 
  complete, 
  delete: deleteX
}

commands[command](args, (error) => {
  if(error) throw error
}) 