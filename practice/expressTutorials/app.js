const express = require('express')
const app = express()

app.listen(3000, function() {
  console.log('Listening to port 3000')
})



app.get("/", function(req, res) {
  res.send("Hi There")
})

app.get("/bye", function(req, res) {
  res.send("Bye")
})

app.get("/dog", function(req, res) {
  res.send("Meow")
})

app.get("/r/:subredditName", function(req, res) {
  res.send(`This could be anything O anything, Check this out.`)
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
  // console.log(req.params)
  res.send(`/r/${req.params.subredditName}/comments/${req.params.id}/${req.params.title}`)
})
app.get("*", function(req, res) {
  res.send("You are a star")
})
