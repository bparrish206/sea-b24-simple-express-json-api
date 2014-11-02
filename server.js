'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res){
  var time = new Date();
  var hours = time.getHours();
  var min = time.getMinutes();
  var tag = (hours > 12) ? "PM": "AM";
  var rhours = (hours > 12) ? hours -=12: hours;
  var curTime = 'The local time is: ' + hours + ':' + min +' '+ tag;
  console.log(curTime);
  res.json(curTime);
});

app.all('/name/:key', function (req, res) {
  var key = req.params.key;
  var msg = 'Hello ' + key + ' is the man!';
  res.json(msg);
});

app.listen(8080);
module.exports = app;
