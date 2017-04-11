var express = require("express");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var rest = require("./REST.js");
var validator = require('express-validator');
var boom = require('express-boom'); 
var app  = express();
// var sqlinjection = require('sql-injection');
var xxtea = require('xxtea-node');

// middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(validator());
// app.use(boom());

function REST(){
    var self = this;
    self.connectMysql();
};

REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100000,
        host     : 'localhost',
        user     : 'root',
        password : 'pisanggoreng',
        database : 'restful_api_demo',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
}

REST.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      app.use(validator());
      app.use(boom());
      // app.use(sqlinjection);
      var router = express.Router();
      app.use('/api', router);
      var rest_router = new rest(router,connection,md5);
      self.startServer();

      // exports.encrypt = function(request, reply){
      //     var text = JSON.parse(JSON.stringify(request.payload.text));
      //     var key = JSON.parse(JSON.stringify(request.payload.key));
      //     var encrypt_data = xxtea.encryptToString(text, key);
      //     reply(encrypt_data);
      // }
      // exports.decrypt = function(request, reply){
      //     var text = JSON.parse(JSON.stringify(request.payload.text));
      //     var key = JSON.parse(JSON.stringify(request.payload.key));
      //     var decrypt_data = xxtea.decryptToString(text, key);
      //     reply(decrypt_data);
      // }
}

REST.prototype.startServer = function() {
      app.listen(8888,function(){
          console.log("All right ! I am alive at Port 8888.");
      });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL \n" + err);
    process.exit(1);
}

new REST();
