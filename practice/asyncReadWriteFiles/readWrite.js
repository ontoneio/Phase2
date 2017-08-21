"use strict"
const fs = require('fs')

// const readPromise = (fileName) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (err, data) => {
//     resolve(data.toString())
//     })
//   })
// }

const readPromise = (fileName) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, (err, data) =>
      err ? reject(err) : resolve(data.toString())))

// const writePromise = ((fileName, text) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('newText.txt', 'A B C D X')
//   })
// })

const writePromise = (fileName, object) =>
  new Promise((reject, resolve) => {
    fs.writeFile(fileName, 'I got you');})
  

readPromise('someText.txt').then((content) => {
  console.log(content)
})

writePromise('newText.txt').then(() => {
  console.log('success!')
});


// let output = readFromFile('someText.txt')
// console.log(output);
// .then((data) => console.log(data));


// const readFromFile = (fileName) => {
//   let content;
//   fs.readFile('someText.txt', (err, data) => {
//   content = data.toString()
//   })
//   return content
// }

// let content = readFromFile('someText.txt')
// console.log(content);

// fs.readFile('someText.txt', (err, data) => {
//   console.log(data.toString())
// })

// let content = fs.readFile('someText.txt');

// console.log(content.toString());

// let promise = new Promise((resolve, reject) => {
//   let content = fs.readFile('someText.txt', (data));
//   resolve(content);
// })

// promise.then((content) => {
//   console.log(content)
// })


  // let jsObj;

  // let promiseToReadFile  = new Promise((resolve, reject) => {
  //   let json = fs.readFile(fileName)
  //   resolve(json)
  // })

  // promiseToReadFile.then((json) => {
  //   jsObj = JSON.parse(json);
  // })

  // return json;




  // JSON.parse(require('fs').readFile(fileName))
  //   let json;
  // fs.readFile(fileName, (data) => {
  //   console.log(data);
  //   json = data;
  // });

  // exports.readFromFile = readFromFile