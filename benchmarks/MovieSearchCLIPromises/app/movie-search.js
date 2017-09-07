#!/usr/bin/env node

const cheerio = require('cheerio')

let argument = process.argv.slice(2).join(' ')
const {
  makeGETRequest, 
  trimMovieList, 
  getMovieList, 
  printMovieList
} = require('./utilities/utilities.js')


let options = {
  host: 'www.imdb.com',
  path: `/find?ref_=nv_sr_fn&q=${process.argv[2]}&s=all`
}

makeGETRequest(options)
  .then((body) => {
    let $ = cheerio.load(body)
    let movieListPromise = getMovieList($)
    movieListPromise.then((movieList) => {
      printMovieList(movieList)
    })
  })
  .catch(() => {
    console.log(`Promise Rejected`)
  })
  