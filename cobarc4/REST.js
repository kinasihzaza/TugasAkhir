var mysql   = require("mysql");

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
        console.log("bisa5");
        
        var rc4 = require('arc4');
        var str = req.body.pesan;
        var key = "123456";
        var cipher = rc4('arc4', key);
        var encrypt_data = cipher.encodeString(text);
        

        var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
        var table = ["email","email_from","email_to","message",req.body.email_dari,req.body.email_ke,encrypt_data];
        query = mysql.format(query,table);    
        //var str = req.body.pesan;
        connection.query(query,function(errors,rows){
            req.checkBody('email_dari').isEmail();
            var errors = req.validationErrors();
            console.log(encrypt_data);

            var decrypt_data = cipher.decodeString(text);
            console.assert(str === decrypt_data);
            console.log(decrypt_data);
            
            if(errors) {
                // res.send(errors);
                // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                res.boom.badRequest("Validation didn't suceed");
                console.log("salah input woy! Ketik email lu!");
                return;
            } else {
                // req.checkBody("email", "Enter a valid email address.").isEmail();
                res.json({"Error" : false, "Message" : "pinterrr!! email lu ini kan -> "+req.body.email_dari});
                // console.log("bisa alhamdulillah");
                // res.json({"Error" : false, "Message" : "Added !"});

                // 'use strict';

                // const bunyan = require('bunyan');
                // const nodemailer = require('../lib/nodemailer');

                // // Create a SMTP transporter object
                // let transporter = nodemailer.createTransport({
                //     service: 'Gmail',
                //     auth: {
                //         user: 'kinasihna@gmail.com',
                //         pass:  'SMAALAZHAR'
                //     },
                //     logger: bunyan.createLogger({
                //         name: 'nodemailer'
                //     }),
                //     debug: true // include SMTP traffic in the logs
                // }, {
                //     // default message fields

                //     // sender info
                //     // from: 'Pangalink <no-reply@pangalink.net>',
                //     from: 'Zazaaw <kinasihna@gmail.com>',
                //     headers: {
                //         'X-Laziness-level': 1000 // just an example header, no need to use this
                //     }
                // });

                // console.log('SMTP Configured');

                // // Message object
                // let message = {

                //     // Comma separated list of recipients
                //     to: 'Nindyasari <nindyasaridewiutari@gmail.com>',

                //     // Subject of the message
                //     subject: 'coba message', //

                //     // plaintext body
                //     text: 'Hello to myself!',

                //     // HTML body
                //     // html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
                //     //     '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
                //     html: 'hai sist',

                //     // Apple Watch specific HTML body
                //     watchHtml: '<b>Hello</b> to myself',

                // };

                // console.log('Sending Mail');
                // transporter.sendMail(message, (error, info) => {
                //     if (error) {
                //         console.log('Error occurred');
                //         console.log(error.message);
                //         return;
                //     }
                //     console.log('Message sent successfully!');
                //     console.log('Server responded with "%s"', info.response);
                //     transporter.close();
                // });
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