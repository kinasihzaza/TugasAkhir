// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());


app.post('/pages/create', function(req, res) {
    req.checkBody("email", "Enter a valid email address.").isEmail();

  var errors = req.validationErrors();
  if (errors) {
    res.send(errors);
    console.log("salah input woy! Ketik email lu!");
    return;
  }
  else {
    // normal processing here
    res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email});
    console.log("bisa alhamdulillah");
  }

});

app.listen(8888);
console.log("All right ! I am alive at Port 8888.");


// app.post('/pages/create', function(req, res) {
//   req.checkBody("leader_email", "Enter a valid email address.").isEmail();

//   var errors = req.validationErrors();
//   if (errors) {
//     res.send(errors);
//     return;
//   } else {
//     // normal processing here
//   }
// });