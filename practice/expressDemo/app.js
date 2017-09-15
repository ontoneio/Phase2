const express = require('Express')
const app = express()
daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

//To enable body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('Hello world')
})


app.get('/api/days/:day', function(req, res) {
  let day = req.params.day;
  // res.send(`The day is ${day}`)
  let dayNum = daysOfWeek[day]
  res.send(dayNum.toString())
})

// app.post("/addfriend", function(req, res) {
//     var newFriend = req.body.newFriend;
//     friends.push(newFriend);
//     res.redirect("/friends");
//     // res.send('You have reached the POST route!!!');
// });
app.post("/api/array/concat", function(req, res) {
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})