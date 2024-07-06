const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.use(cors())
app.get('/', function (req, res) {
  res.json({text: 'hello world'})
})

app.post('/fitdata', function(req, res) {
    const data = req.body
    console.log(data)
    res.json({status: 'ok'})
})

app.listen(3000)