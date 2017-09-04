#!/usr/bin/env node

var cheerio = require('cheerio')
let http = require('http');

let options = {
  host: 'www.imdb.com',
  path: '/find?ref_=nv_sr_fn&q=findingnemo&s=all'
};

let req = http.get(options, function (res) {
  let bodyChunks = [];

  res.on('data', function (chunk) {
    bodyChunks.push(chunk);
  })

  res.on('end', function () {
    let body = Buffer.concat(bodyChunks);
    var $ = cheerio.load(body);
    let movies = []

    $('td.result_text').each(function (index, element) {
      movies.push($(this).text())
    });

    //Slice 2 items from the end ->Unnecessary Info
    //For each movie title get rid of everything after '-' ->Unnecessary Info
    movies = movies.slice(0, -2).map((movie) => {
      let sliceIdx = movie.indexOf('-')
      return movie.slice(0, sliceIdx)
    })

    //For each movie create an object in the form 
    // { title: '', year: '', type: '' }
    let moviesDetail = movies.map((movieText) => {
      let movieInfo = movieText.split('(')
      return {
        title: movieInfo[0], 
        year: `(${movieInfo[1]}`, 
        type: movieInfo[2] === undefined ? ' ' : `(${movieInfo[2]}`
      }  
    })


    console.log(moviesDetail)

  })

});

req.on('error', function (e) {
  console.log('ERROR: ' + e.message);
});

