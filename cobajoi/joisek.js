var express = require('express');
var expressJoi = require('express-joi');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var Joi = expressJoi.Joi; // The exposed Joi object used to create schemas and custom types 
 
var app = express();
app.use(methodOverride());
app.use(bodyParser());
app.use(express.Router);
app.use(errorHandler);
 
// Use the Joi object to create a few schemas for your routes.  
var getUsersSchema = {
  limit: expressJoi.Joi.types.Number().integer().min(1).max(25),
  offset: expressJoi.Joi.types.Number().integer().min(0).max(25),
  name: expressJoi.Joi.types.String().alphanum().min(2).max(25)
};
 
var updateUserSchema = {
  userId: Joi.types.String().alphanum().min(10).max(20),
  name: Joi.types.String().min(3).max(50)
};
 
// Attach the validator to the route definitions 
app.get('/users', expressJoi.joiValidate(getUsersSchema));
app.put('/users/:userId', expressJoi.joiValidate(updateUserSchema));
 
app.listen(8080);
console.log("All right ! I am alive at Port 8080.");