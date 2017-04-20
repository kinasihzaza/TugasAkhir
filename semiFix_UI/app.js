var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var expressSession = require('express-session');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//session = session({resave: true, saveUninitialized: true, secret: 'tahutek', cookie: { maxAge: 3600000 }})


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(expressSession({
    saveUninitialized: true,
    resave: true,
    secret: "This is a secret"
}));

var routes = require('./routes/index');
var email = require('./routes/email');
var inbox = require('./routes/inbox');
var outbox = require('./routes/outbox');
app.use('/', routes);
app.use('/email', email);
app.use('/inbox', inbox);
app.use('/outbox', outbox);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(8081, function(){
  console.log("Listening on port " + 8081);
});


module.exports = app;