const express = require('express')
const app = express()

app.use(bodyParser.json())

app.listen(3000, function() {
  console.log('Listening on Port 3000')
})













