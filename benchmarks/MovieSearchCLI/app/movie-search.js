#!/usr/bin/env node

var cheerio = require('cheerio')
let http = require('http')

const sendGETRequest = (options, callback) => http.get(options, callback)

const trimMovieList = movies => movies.slice(0, -2).map(movie => movie.slice(0, movie.indexOf('-')))

const printMovies = movies => movies.forEach(movie => console.log(`${movie}\n`))

const getMoviesList = ($, callback) => {
  let movies = []
  $('td.result_text').each(function (index, element) {
    movies.push($(this).text())
  })
  callback(trimMovieList(movies))
}

//FUNCTION CALL
const req = sendGETRequest({
  host: 'www.imdb.com',
  path: `/find?ref_=nv_sr_fn&q=${process.argv[2]}&s=all`
}, (res) => {
  let body = ''
  res.on('data', (chunk) => body += chunk)
  res.on('end', () => {
    const $ = cheerio.load(body)
    getMoviesList($, movies => {
      printMovies(movies)
    })
  })
})

req.on('error', function (e) {
  console.log('ERROR: ' + e.message)
});