let http = require('http')

const sendGETRequest = (options, callback) => 
  http.get(options, callback)

const trimMovieList = movies =>
  movies.slice(0, -2).map(movieTitle =>
    movieTitle.indexOf('-') === -1 ? movieTitle : movieTitle.slice(0, movieTitle.indexOf('-')))
  

const printMovieList = movies =>
  movies.forEach(movie =>
    console.log(`${movie}\n`))

const getMoviesList = ($, callback) =>
  callback(trimMovieList($('td.result_text').map(function() {
    return $(this).text()
  }).get()))

module.exports = {
  sendGETRequest,
  trimMovieList,
  printMovieList,
  getMoviesList
}
