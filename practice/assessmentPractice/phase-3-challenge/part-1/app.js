const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3000, function () {
  console.log('Listening on Port 3000')
})

app.get("/api/days/:day", function (req, res) {
  let day = req.params.day
  daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }

  if(res.statusCode !== 200) {
    res.send('Something went wrong')
  }

  res.send(daysOfWeek[day] !== undefined
    ?  day
    : `${day} is not a valid day!`
  )

})