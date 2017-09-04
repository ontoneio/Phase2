#!/usr/bin/env node

var cheerio = require('cheerio')
let http = require('http');

let options = {
  host: 'www.imdb.com',
  path: `/find?ref_=nv_sr_fn&q=${process.argv[2]}&s=all`
};

const sendGETRequest = (options, callback) => http.get(options, callback)

const getMoviesList = ($, callback) => {
  let movies = []
  $('td.result_text').each(function (index, element) {
    movies.push($(this).text())
  });
  callback(trimMovieList(movies))
}

// const getMoviesList = function($) {
//   // console.log(`In getMoviesList($) the value of $ is ${$}`)
//   let movies = []
//   $('td.result_text').each((i, e) => {
//     console.log(`Pushing to array --> ${$(this).text()}`, `${$(this).text()}`)
//     movies.push($(this).text())
//   })//movies.push($(this).text()));
//   // console.log(`The movie list is ${movies}`)
//   return trimMovieList(movies)
// }

// Slice 2 items from the end 
// For each movie title get rid of everything after '-' 
const trimMovieList = movies => movies.slice(0, -2).map(movie => movie.slice(0, movie.indexOf('-')))
// const trimMovieList = movies => {
//   movies = movies.slice(0, -2).map(movie => movie.slice(0, movie.indexOf('-')))
//   return movies
// }

const printMovies = movies => movies.forEach(movie => console.log(`${movie}\n`))




const req = sendGETRequest(options, (res) => {
  let body = ''

  res.on('data', (chunk) => {
    body += chunk
  })

  res.on('end', () => {
    const $ = cheerio.load(body)
    getMoviesList($, movies => {
      printMovies(movies)
    })
  })

})











// let req = http.get(options, function (res) {
//   let bodyChunks = [];

//   res.on('data', function (chunk) {
//     bodyChunks.push(chunk);
//   })

//   res.on('end', function () {
//     let body = Buffer.concat(bodyChunks);
//     var $ = cheerio.load(body);
//     let movies = []

//     $('td.result_text').each(function (index, element) {
//       movies.push($(this).text())
//     });

//     //Slice 2 items from the end ->Unnecessary Info
//     //For each movie title get rid of everything after '-' ->Unnecessary Info
//     movies = movies.slice(0, -2).map((movie) => {
//       let sliceIdx = movie.indexOf('-')
//       return movie.slice(0, sliceIdx)
//     })



//   })

// });

req.on('error', function (e) {
  console.log('ERROR: ' + e.message);
});



/*
//For each movie create an object in the form 
// { title: '', year: '', type: '' }
let moviesDetail = movies.map((movieText) => {
  let movieInfo = movieText.split('(')
  return {
    title: movieInfo[0] === undefined ? '' : movieInfo[0], 
    year: movieInfo[1] === undefined ? '' : `(${movieInfo[1]}`, 
    type: movieInfo[2] === undefined ? '' : `(${movieInfo[2]}`
  }  
})

moviesDetail.forEach((movie) => {
  console.log(`${movie.title} ${movie.year} ${movie.type}`)
})

*/