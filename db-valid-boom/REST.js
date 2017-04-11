var mysql   = require("mysql");
var module_email = require('./email/index.js');
var module_encrypted = require('./testing_unit/coba/module_encrypted');

// dependencies
// var express = require('express');
// var bodyParser = require('body-parser');
// var validator = require('express-validator');
// var boom = require('express-boom'); 
// var app = express();

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/email",function(req,res){
        console.log("bisa1");
        var query = "SELECT * FROM ??";
        var table = ["email"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/email/:user_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["user_login","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/email/from/:email_from",function(req,res){
        console.log("bisa2");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_from",req.params.email_from];
        query = mysql.format(query,table);
        // console.log(query)
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
                // return this.escape(res[query]);
            }
        });
    });

    router.get("/email/to/:email_to",function(req,res){
        console.log("bisa3");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_to",req.params.email_to];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
        
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/email/id/:email_id",function(req,res){
        console.log("bisa4");
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["email","email_id",req.params.email_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    // router.post("/email",function(req,res){
    //     console.log("bisa5");
    //     var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    //     var table = ["email","email_from","email_to","message",req.body.email_dari,req.body.email_ke,req.body.pesan];
    //     query = mysql.format(query,table);
    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //         } else {
    //             res.json({"Error" : false, "Message" : "Added !"});
    //         }
    //     });
    // });

    // router.post("/email",function(req,res){
    //     console.log("bisa5");
    //     // req.checkBody("email", "Enter a valid email address.").isEmail();
    //     // var errors = req.validationErrors();

    //     var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    //     var table = ["email","email_from","email_to","message",req.body.email_dari,req.body.email_ke,req.body.pesan];
    //     query = mysql.format(query,table);

    //     connection.query(query,function(err,rows){
    //         if(err) {
    //             // res.send(errors);
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //             // res.boom.badRequest("Validation didn't suceed");
    //             // console.log("salah input woy! Ketik email lu!");
    //             return;
    //         } else {
    //             // req.checkBody("email", "Enter a valid email address.").isEmail();
    //             // res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email_dari});
    //             console.log("bisa alhamdulillah");
    //             res.json({"Error" : false, "Message" : "Added !"});
    //         }
    //     });
    // });

    // router.post("/email",function(req,res){
    //     console.log("bisa5");

    //     var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    //     var table = ["email","email_from","email_to","message",req.body.email_dari,req.body.email_ke,req.body.pesan];
    //     query = mysql.format(query,table);    

    //     connection.query(query,function(errors,rows){
    //         //req.checkBody('email_dari').isEmail();
    //         //var errors = req.validationErrors();

    //         if(errors) {
    //             // res.send(errors);
    //             res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //             // res.boom.badRequest("Validation didn't suceed");
    //             //console.log("salah input woy! Ketik email lu!");
    //             return;
    //         } else {
    //             // req.checkBody("email", "Enter a valid email address.").isEmail();
    //             // res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email_dari});
    //             console.log("bisa alhamdulillah");
    //             res.json({"Error" : false, "Message" : "Added !"});
    //         }
    //     });
    // });

    router.post("/emailboom",function(req,res){
        // console.log("bisa5");
        var from =          req.body.email_ke;
        var to = req.body.email_dari;
        var emailToFromBody = req.body.email_ke;
        var bodyEmail = req.body.pesan;
        var final_body_email_for_db = bodyEmail;

        var runMethodEncryptedForDB = module_encrypted.method_arc4(bodyEmail, function(err_xxtea_db, result_xxtea_db){
            if(err_xxtea_db) {
                console.log("ENCRYPTED FAIL BEFORE INSERT TO DB");
            } else {
                final_body_email_for_db = result_xxtea_db;
                var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
                var table = ["email","email_from","email_to","message", from, to, final_body_email_for_db];
                query = mysql.format(query,table); 

                connection.query(query,function(errors,rows){
                req.checkBody('email_dari').isEmail();
                var errors = req.validationErrors();

                if(errors) {
                    // res.send(errors);
                    // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                    res.boom.badRequest("Validation didn't suceed");
                    console.log("salah input woy! Ketik email lu!");
                    return;
                } else {
                    
                            var resultEmail = module_email.method_send_email(emailToFromBody, final_body_email_for_db, function(err, result_gmail){
                                if(err) {
                                    console.log(err, result_gmail);
                                    res.json({"Error" : true, "Message" : "EMAIL LIB FAIL", "GMAIL STATUS": result_gmail});
                                } else {
                                    res.json({"Error" : false, "Message" : "Encrypted Success and Email Sent to Target", "GMAIL STATUS": result_gmail});
                                    console.log("ResultEMAIL",result_gmail);
                                }
                            });
                    
    
                }
        });

            }
        });

        
    });

    router.put("/email/update",function(req,res){
        console.log("bisa6");
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["email","message",req.body.pesan,"email_from",req.body.email_dari];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the message for email "+req.body.email_dari});
            }
        });
    });

    router.delete("/email/:email_from",function(req,res){
        console.log("bisa7");
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["email","email_from",req.body.email_dari];
        query = mysql.format(query,table);
        //console.log(req.body.email_dari);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the email from "+ req.body.email_dari});
            }
        });
    });
}

module.exports = REST_ROUTER;