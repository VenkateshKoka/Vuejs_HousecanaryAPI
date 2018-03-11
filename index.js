const express = require('express');
const app = express();
const axios = require('axios');
let username = 'JR59KN5RAUBL8J1PQWM9';
let password = 'iXQeq8myjh0RC4xt5UQ2NJ9YUlnB7DSi';

app.all('/housingdata', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers");
  //console.log("The request is being made");

  const request = require('request');
  const url = 'https://api.housecanary.com/v2/property/details';
  request.get({
    url: url,
    auth: {
      user: 'JR59KN5RAUBL8J1PQWM9',
      pass: 'iXQeq8myjh0RC4xt5UQ2NJ9YUlnB7DSi'
    },
    qs: {
      address: '43 Valmonte Plaza',
      zipcode: '90274'
    }
  }, function (error, response, body) {
    console.log(body);
    res.send(body);
  });
})
app.get('/',(req,res)=>{

  const request = require('request');
  const url = 'https://api.housecanary.com/v2/property/details';

  request.get({
    url: url,
    auth: {
      user: 'JR59KN5RAUBL8J1PQWM9',
      pass: 'iXQeq8myjh0RC4xt5UQ2NJ9YUlnB7DSi'
    },
    qs: {
      
      address: '43 Valmonte Plaza',
      zipcode: '90274'
    }
  }, function (error, response, body) {
    console.log(body);
    res.send('the result is '+ body);
  });
    
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);