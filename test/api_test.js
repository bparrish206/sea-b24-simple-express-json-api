'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var chaihttp = require('chai-http');
var server = require('../server.js');

chai.use(chaihttp);

var time = new Date();
var hours = time.getHours();
var min = time.getMinutes();
var tag = (hours > 12) ? "PM": "AM";
var rhours = (hours > 12) ? hours -=12: hours;
var curTime = 'The local time is: ' + hours + ':' + min +' '+ tag;

describe('Simple JSON API Time', function(){
  it('should send the local time', function(){
    chai.request('http://localhost:8080')
    .get('/')
    .end(function (err, res){
     expect(res.body.curTime).to.equal(curTime);
  });
});
});

describe('Simple JSON API Greeting', function(){
  it('should send get a greeting', function(){
    var name = "Brent"
    chai.request('http://localhost:8080')
      .get('/name/:key')
      .end(function (err, res){
        expect(res.body.msg).to.eql('Hello ' + name + ' is the man!');
      });
});
});
