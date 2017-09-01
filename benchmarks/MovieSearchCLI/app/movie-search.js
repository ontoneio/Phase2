// Can make HTTP requests from Node
// Can write Asynchronous code in JavaScript and Node
// Can extract data from HTML in Node
// Can scrape a web page in Node
//=====


const https = require('https')
const fs = require('fs')

let options = {
  hostname: "en.wikipedia.org",
  port: 443,
  path: "/wiki/George_Washington",
  method: "GET"
}

let req = https.request(options, (res) => {
  
  let responseBody = '';
  console.log(`Server Status ${res.statusCode}`)
  console.log(`Response Headers %j`, res.headers)
})









//=======
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });