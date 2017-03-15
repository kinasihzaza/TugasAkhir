var PythonShell = require('python-shell');

PythonShell.run('message.py', function (err) {
  if (err) throw err;
  console.log('finished');
});

// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/send', function(req, res) {
	messages.send(service, user_id, message){};
  if (errors) {
    res.send(errors);
    console.log("try again");
    return;
  }
  else {
    // normal processing here
    //res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email});
    console.log("sent");
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