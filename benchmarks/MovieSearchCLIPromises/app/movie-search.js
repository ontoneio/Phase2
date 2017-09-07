#!/usr/bin/env node
const http = require('http')
let argument = process.argv.slice(2).join(' ')

let options = {
  host: 'www.imdb.com',
  path: `/find?ref_=nv_sr_fn&q=${process.argv[2]}&s=all`
}

let req = http.get(options, (res) => {
  let body = ''
  res.on('data', (chunk) => body += chunk)
  res.on('end', () => {
    console.log(`Received Body : ${body}`)
  })

})

  req.on('error', (e) => {
    console.log(`ERROR: ${e.message}`)
  })
