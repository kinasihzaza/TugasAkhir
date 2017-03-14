var Joi = require('joi');

var schema = {
  username: Joi.string().alphanum().min(3).max(30).with('birthyear').required(),
  birthyear: Joi.number().integer().min(1900).max(2013)
};

module.exports = function(data, config) {
  config = config || {};
  var err = Joi.validate(data, schema, config);
  console.dir(err ? err : 'Valid!');
}


function(args, next) {
  var err = Joi.validate(value, schema, options);
  if (err) { 
  	return next(err); }
  // ...
}
