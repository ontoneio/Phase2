"use strict"
const fs = require('fs')

const readFromFile = (fileName) => {
  let content;
  fs.readFile('someText.txt', (err, data) => {
  content = data.toString()
  })
  return content
}

let content = readFromFile('someText.txt')
console.log(content);

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