// http://www.imdb.com/find?ref_=nv_sr_fn&q=findingnemo&s=all

// table findList

// findList > findResult > result_text a 
var $ = require('cheerio')
let http = require('http');
let options = {
  host: 'www.imdb.com',
  path: '/find?ref_=nv_sr_fn&q=findingnemo&s=all'
};

let req = http.get(options, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  let bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    let body = Buffer.concat(bodyChunks);
    // cheerio.load(body.toString())
    let content = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`
    cheerio.load(content)
    let output = $('#me').text()
    console.log('Here come the pain')
    console.log(output)
  })
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
});


$ = cheerio.load('<h2 class = "title">Hello world</h2>');