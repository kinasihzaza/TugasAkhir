// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var boom = require('express-boom'); 
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(boom());

app.post('/boom', function(req, res) {
    req.checkBody("email", "Enter a valid email address.").isEmail();

  var errors = req.validationErrors();
  if (errors) {
    // res.send(errors);
    res.boom.badRequest("Validation didn't suceed");
    console.log("salah input woy! Ketik email lu!");
    return;
  }
  else {
    // normal processing here
    res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email});
    console.log("benar");
  }

});

app.get('/boom', function(req, res) {
    res.boom.badRequest("Validation didn't suceed");

});

app.listen(8888);
console.log("All right ! I am alive at Port 8888.");

