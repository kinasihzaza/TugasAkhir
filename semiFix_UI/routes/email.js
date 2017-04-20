var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = require('../database.js');

router.get('/compose', require('../middleware/auth.js'), function(req, res){
    //console.log(req.session);
    console.log("MASUK FUNGSI GET /COMPOSE");
    //req.session.banana = "login";
     res.render('compose', {
            'login': req.session.pisang.user_email
    });

}).post("/compose", function(req, res){
    var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    var table = ["message","msg_source","msg_target","msg_plain",req.session.pisang.user_email,req.body.msg_target,req.body.msg_plain];
    query = mysql.format(query,table);
    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            // res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            // req.session.pisang = rows;
            res.redirect("/inbox");
            var login = req.session.pisang.user_email;
            console.log(login);
            // console.log(req.session);
        }
    });
}); 

router.get('/new', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
