const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const friends = ['Tony', 'Miranda', 'Justin', 'Lily']


app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.set("view engine", "ejs")

app.listen(3000, function () {
  console.log('Listening to Port 3000')
})

app.get("/", function (req, res) {
  res.render("home")
})

app.post("/addfriend", function (req, res) {
  // console.log(req.body)
  // res.send("You have reached the post route")
  friends.push(req.body.friendName)
  console.log(req.body)
  res.redirect('/friends')
})

app.get("/friends", function (req, res) {
  res.render("friends", {
    friends: friends
  })
})







// // Is it possible to send a POST request from the browser? 
// // If this is my POST route 
// app.post("/addTask", function(req, res) {
//   tasks.push(req.body.newTask)
//   res.redirect('/tasks')
// })

// // Can I do the following to make a POST request? 
// http://localhost:3000/addTask?newTask=Exercise