const expect = require('chai').expect
const cheerio = require('cheerio')
const {
  sendGETRequest,
  trimMovieList,
  getMoviesList
} = require('../app/utilities/utilities.js')


describe('#sendGETRequest', function () {

  it('Sends GET request to supplied URL and invokes callback with html string', function (done) {
    options = {
      host: 'www.google.com',
      path: `/`
    }
    sendGETRequest(options, function (res) {
      let body = ''
      res.on('data', function (chunk) {
        body += chunk
      })
      res.on('end', function () {
        const $ = cheerio.load(body)
        expect(body.slice(0, '<!doctype html>'.length)).to.equal('<!doctype html>')
        done()
      })
    })
  })

  it('Throws an error if invalid url is supplied', function () {
    //TODO
    options = {
      host: 'invalid.url',
      path: `/invalid/path`
    }
  })

})

describe('#trimMovieList', function () {
  let movies = [
    'Finding Nemo (2003)',
    'Finding Nemo (2003) (Video Game)',
    'Finding Neverland (2004)',
    'Finding Nemo (2016) (TV Episode)  - Season 5 | Episode 23  - Honest Trailers (2012) (TV Series)',
    'Finding Nemo (2012) (TV Episode)  - Season 2 | Episode 5  - Disneycember (2011) (TV Series)',
    'Finding Nemo (2001) (TV Episode) - Project Playtime (2001) (TV Mini-Series)',
    'Finding Nemo (TV Episode)  - Season 1 | Episode 10  - Raft (in development) (TV Series)',
    'Finding Nemo (2013) (TV Episode)  - Season 3 | Episode 12  - A Movie Review (2012) (TV Series)',
    'reference-to-finding-nemo (7 titles)',
    'Finding Cinema [in] (Production)'
  ]

  let expected = [
    'Finding Nemo (2003)',
    'Finding Nemo (2003) (Video Game)',
    'Finding Neverland (2004)',
    'Finding Nemo (2016) (TV Episode)  ',
    'Finding Nemo (2012) (TV Episode)  ',
    'Finding Nemo (2001) (TV Episode) ',
    'Finding Nemo (TV Episode)  ',
    'Finding Nemo (2013) (TV Episode)  '
  ]
  it('Removes unwanted entries and text from the list', function () {
    expect(trimMovieList(movies)).to.deep.equal(expected)
  })
})

describe('#getMovieList', function (done) {

  it('Returns a list of movies with relevent information', function () {

    let options = {
      host: 'www.imdb.com',
      path: `/find?ref_=nv_sr_fn&q=findingnemo&s=all`
    }

    sendGETRequest(options, function (res) {
      let body = ''
      res.on('data', (chunk) => body += chunk)
      res.on('end', () => {
        const $ = cheerio.load(body)
        getMoviesList($, movies => {
          let expected = [
            'Finding Nemo (2003)',
            'Finding Nemo (2003) (Video Game)',
            'Finding Neverland (2004)',
            'Finding Nemo (2016) (TV Episode)  ',
            'Finding Nemo (2012) (TV Episode)  ',
            'Finding Nemo (2001) (TV Episode) ',
            'Finding Nemo (TV Episode)  ',
            'Finding Nemo (2013) (TV Episode)  '
          ]
          expect(movies).to.deep.equal(expected)
        })
      })
    })
  })

})