var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = require('../database.js');

router.get("/", require('../middleware/auth.js'), function(req,res){
    console.log("MASUK FUNGSI GET /OUTBOX");
    var outboxList = [];
    var query = "SELECT * FROM ?? WHERE ?? = ? ORDER BY ?? DESC";
    var table = ["message", "msg_source", req.session.pisang.user_email, "msg_time"];
    query = mysql.format(query,table);

    connection.query(query,function(err,rows,fields){
        if(err) {
            //console.log("MASUK IF ERROR QUERY");
            return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            // res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            for (var i = 0; i < rows.length; i++) {
                console.log("row length: ", rows.length);
                console.log("i: ", i);
                // Create an object to save current row's data
                var login = req.session.pisang.user_email;
                console.log(login);
                var outbox = {
                    'msg_id'     : rows[i].msg_id,
                    'msg_source' : rows[i].msg_source,
                    'msg_plain'  : rows[i].msg_plain,
                    'msg_time'   : rows[i].msg_time,
                    'msg_target' : rows[i].msg_target,
                    'login'      :login
            }
            // Add object into array
            outboxList.push(outbox);
            }
        }
        res.render('outbox', {
            'outboxList': outboxList,
            'login': req.session.pisang.user_email
        });
    });
});

router.get('/viewOutbox/:msg_id', require('../middleware/auth.js'), function(req, res, next) {
    console.log("MASUK FUNGSI GET /VIEWOUTBOX");
    var viewOutbox = [];

    var query = "SELECT * FROM ?? WHERE ?? = ?";
    var table = ["message", "msg_id", req.params.msg_id];
    query     = mysql.format(query,table);
    console.log(query);
    console.log(req.params.msg_id);

    connection.query(query,function(err,rows,fields){
        if(err) {
            return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {    
            //return res.json({"Error" : false, "Message" : "Success", "users" : rows});
            var viewOutbox2 = {
                'msg_id'     : rows[0].msg_id,
                'msg_source' : rows[0].msg_source,
                'msg_plain'  : rows[0].msg_plain,
                'msg_time'   : rows[0].msg_time,
                'msg_target' : rows[0].msg_target
            }
            viewOutbox.push(viewOutbox2);
        }
 
        res.render('viewOutbox', {
            'viewOutbox': viewOutbox,
            'login': req.session.pisang.user_email
        });   

    });
});

module.exports = router;
