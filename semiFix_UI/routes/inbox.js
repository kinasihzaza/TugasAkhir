var express     = require('express');
var mysql       = require('mysql');
var router      = express.Router();
var connection  = require('../database.js');

// var globalInbox = [inbox = {
//                     'msg_source':msg_source,
//                     'msg_time':msg_time,
//                     }];

router.get("/", require('../middleware/auth.js'), function(req,res){
    console.log("MASUK FUNGSI GET /INBOX");
    var loginList = [];
    global.inboxList = [];
    var query = "SELECT * FROM ?? WHERE ?? = ? ORDER BY ?? DESC";
    var table = ["message", "msg_target", req.session.pisang.user_email, "msg_time"];
    query = mysql.format(query,table);
    console.log(query);

    connection.query(query,function(err,rows,fields){
        if(err) {
            return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            //res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            for (var i = 0; i < rows.length; i++) {
                console.log("row length: ", rows.length);
                console.log("i: ", i);
                // Create an object to save current row's data
                var login = req.session.pisang.user_email;
                console.log(login);
                global.inbox = {
                    'msg_id'     : rows[i].msg_id,
                    'msg_source' : rows[i].msg_source,
                    'msg_plain'  : rows[i].msg_plain,
                    'msg_time'   : rows[i].msg_time,
                    'msg_target' : rows[i].msg_target,
                    'login'      :login
                }
            // Add object into array
            inboxList.push(inbox);
            }
        }
        res.render('inbox', {
            'inboxList': inboxList,
            'login'    : req.session.pisang.user_email,
            'loginList': loginList
        });

        console.log(inbox);
    });
});

router.get('/viewInbox/:msg_id', require('../middleware/auth.js'), function(req, res, next) {

    console.log("MASUK FUNGSI GET /VIEWINBOX");
    var viewInbox = [];

    var query = "SELECT * FROM ?? WHERE ?? = ?";
    var table = ["message", "msg_id", req.params.msg_id];
    query     = mysql.format(query,table);
    console.log(query);
    console.log(req.params.msg_id);

    // console.log(viewInbox);

    connection.query(query,function(err,rows,fields){
        if(err) {
            return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {    
            console.log(rows);
            global.viewInbox2 = {
                    'msg_id'     : rows[0].msg_id,
                    'msg_source' : rows[0].msg_source,
                    'msg_plain'  : rows[0].msg_plain,
                    'msg_time'   : rows[0].msg_time,
                    'msg_target' : rows[0].msg_target
            }       
            viewInbox.push(viewInbox2);
            console.log(viewInbox);
        }
    
        res.render('viewInbox', {
            'viewInbox': viewInbox,
            'login': req.session.pisang.user_email
        });   
    });

}).post("/viewInbox", require('../middleware/auth.js'), function(req, res, next){

    var source    = req.session.pisang.user_email;
    var target    = viewInbox2.msg_source;
    var pesan     = req.body.msg_plain; 

    var query  = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    var table  = ["message","msg_source","msg_target","msg_plain",source,target,pesan];
    
    query  = mysql.format(query,table);
    console.log(query);

    connection.query(query,function(err,rows,fields){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            console.log(rows);
        } else {
            res.redirect("/inbox");
        }
    });
});

module.exports = router;