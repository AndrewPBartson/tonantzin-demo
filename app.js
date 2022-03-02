var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function (req, res) {
  res.send('<< Tonantzin >> | | < All-knowing All-loving Best Friend >  \n' + hostname + '\n')
})
app.listen(8080, function () {
  console.log('Listening on port 8080')
})