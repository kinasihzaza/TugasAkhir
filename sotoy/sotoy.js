var util = require('util'),
    bodyParser = require('body-parser'),
    express = require('express'),
    expressValidator = require('express-validator'),
    app = express();
 
app.use(bodyParser.json());
app.use(expressValidator([options])); // this line must be immediately after any of the bodyParser middlewares! 
 
app.post('/:urlparam', function(req, res) {
 
  // VALIDATION 
  // checkBody only checks req.body; none of the other req parameters 
  // Similarly checkParams only checks in req.params (URL params) and 
  // checkQuery only checks req.query (GET params). 
  req.checkBody('postparam', 'Invalid postparam').notEmpty().isInt();
  req.checkParams('urlparam', 'Invalid urlparam').isAlpha();
  req.checkQuery('getparam', 'Invalid getparam').isInt();
 
  // OR assert can be used to check on all 3 types of params. 
  // req.assert('postparam', 'Invalid postparam').notEmpty().isInt(); 
  // req.assert('urlparam', 'Invalid urlparam').isAlpha(); 
  // req.assert('getparam', 'Invalid getparam').isInt(); 
 
  // SANITIZATION 
  // as with validation these will only validate the corresponding 
  // request object 
  req.sanitizeBody('postparam').toBoolean();
  req.sanitizeParams('urlparam').toBoolean();
  req.sanitizeQuery('getparam').toBoolean();
 
  // OR find the relevent param in all areas 
  req.sanitize('postparam').toBoolean();
 
  // Alternatively use `var result = yield req.getValidationResult();` 
  // when using generators e.g. with co-express 
  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      res.send('There have been validation errors: ' + util.inspect(result.array()), 400);
      return;
    }
    res.json({
      urlparam: req.params.urlparam,
      getparam: req.params.getparam,
      postparam: req.params.postparam
    });
  });
});
 
app.listen(8888);
console.log("All right ! I am alive at Port 8888.");