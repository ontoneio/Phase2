#!/usr/bin/env node

var cheerio = require('cheerio')

const {
  sendGETRequest,
  trimMovieList,
  printMovieList,
  getMoviesList
} = require('./utilities/utilities.js')

let options = {
  host: 'www.imdb.com',
  path: `/find?ref_=nv_sr_fn&q=${process.argv[2]}&s=all`
}

const req = sendGETRequest(options, res => {
    let body = ''
    res.on('data', (chunk) => body += chunk)
    res.on('end', () => {
      const $ = cheerio.load(body)
      getMoviesList($, movies => {
        printMovieList(movies)
      })
    })
  })

req.on('error', function (e) {
  console.log('ERROR: ' + e.message)
});