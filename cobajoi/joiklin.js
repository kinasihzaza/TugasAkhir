var express = require('express');  
var BodyParser = require('body-parser');  
var Joi = require('joi');  
var Celebrate = require('celebrate');

var app = express();  
app.use(BodyParser.json());

app.post('/signup', Celebrate({  
 body: Joi.object().keys( {
   email: Joi.string().email(),
   age: Joi.number().integer(),
   role: Joi.string()
 }),
 // query: {
 //   token: Joi.string().token().required()
 // }
}), (req, res) => { res.send(req.body); console.log(req.body.age)});

app.use((err, req, res, next) => { res.status(400).send(req.body.email); console.log("apansi"); }); 

app.listen(8080);
console.log("All right ! I am alive at Port 8080.");