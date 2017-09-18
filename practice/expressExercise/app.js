const express = require('express')

const app = express()

app.listen(3000, function() {
  console.log('Listening to port 3000')
})

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment")
})

app.get("/speak/:animal", function(req, res) {
  const sounds = {
    pig: "Oink", 
    cow: "Moo", 
    dog: "Woof Woof!"
  }
  res.send(`${req.params.animal} says ${sounds[req.params.animal]}`)
})

app.get("/repeat/:string/:times", function(req, res) {
  let string = req.params.string 
  let numOfTimes = Number(req.params.times)
  res.send(string.repeat(numOfTimes)) 
})

app.get("*", function(req, res) {
  res.send("Sorry Page not found....")
})






