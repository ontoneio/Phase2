const http = require('http')

const makeGETRequest = (options) => {
  return new Promise((resolve, reject) => {
    const req = http.get(options, (res) => {
      let body = ''
      res.on('data', (chunk) => body += chunk)
      res.on('end', () => {
        resolve(body)
      })
    })

    req.on('error', () => {
      reject()
    })
  })
}

const trimMovieList = movies => {
  return movies.slice(0, -2).map(movieTitle =>
    movieTitle.indexOf('-') === -1 ? movieTitle : movieTitle.slice(0, movieTitle.indexOf('-')))
}

const getMovieList = ($) => {
  return new Promise((resolve, reject) => {
    let rawMovieList = $('td.result_text').map(function () {
      return $(this).text()
    }).get()
    resolve(trimMovieList(rawMovieList))
  })
}

const printMovieList = movies =>
  movies.forEach(movie =>
    console.log(`${movie}\n`))

module.exports = {
  makeGETRequest,
  trimMovieList,
  getMovieList, 
  printMovieList
}