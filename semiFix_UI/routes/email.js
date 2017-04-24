var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = require('../database.js');
var formidable = require('formidable');
var path       = require('path');  
var fs         = require('fs-extra');  

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


router.get('/upload', require('../middleware/auth.js'), function(req, res){
    //console.log(req.session);
    console.log("MASUK FUNGSI GET /UPLOAD");
    //req.session.banana = "login";
     res.render('compose', {
            'login': req.session.pisang.user_email
    });

}).post("/upload", function(req, res, next){
    console.log("MASUK FUNGSI POST /UPLOAD");

    var form = new formidable.IncomingForm();
    //Formidable uploads to operating systems tmp dir by default
    form.uploadDir = "./img";       //set upload directory
    form.keepExtensions = true;     //keep file extension

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log("form.bytesReceived");

        var nameFile = JSON.stringify(files.fileUploaded.name);
        var pathFile = JSON.stringify(files.fileUploaded.path);
        var sizeFile = JSON.stringify(files.fileUploaded.size);
        var timeFile = JSON.stringify(files.fileUploaded.lastModifiedDate);

        var query = "INSERT INTO ??(??,??,??,??) VALUES (?,?,?,?)";
        var table = ["file_upload","name_file","path_file","size_file", "time_file",nameFile, pathFile, sizeFile, timeFile];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                // res.json({"Error" : false, "Message" : "Success", "Users" : rows});
                // req.session.pisang = rows;
                // console.log(req.session);
                console.log(rows);
                console.log("BISA MASUK GA")
            }
        });

        //TESTING
        console.log("file size: "+JSON.stringify(files.fileUploaded.size));
        console.log("file path: "+JSON.stringify(files.fileUploaded.path));
        console.log("file name: "+JSON.stringify(files.fileUploaded.name));
        console.log("file type: "+JSON.stringify(files.fileUploaded.type));
        console.log("astModifiedDate: "+JSON.stringify(files.fileUploaded.lastModifiedDate));

        //Formidable changes the name of the uploaded file
        //Rename the file to its original name
        fs.rename(files.fileUploaded.path, './img/'+files.fileUploaded.name, function(err) {
        if (err)
            throw err;
            console.log('renamed complete');  
        });
        
        // res.end();

        res.render('compose', {
                'login': req.session.pisang.user_email
        });

    });



    // var query = "INSERT INTO ??(??,??,??) VALUES (?,?,?)";
    // var table = ["message","msg_source","msg_target","msg_plain",req.session.pisang.user_email,req.body.msg_target,req.body.msg_plain];
    // query = mysql.format(query,table);
    // connection.query(query,function(err,rows){
    //     if(err) {
    //         res.json({"Error" : true, "Message" : "Error executing MySQL query"});
    //     } else {
    //         // res.json({"Error" : false, "Message" : "Success", "Users" : rows});
    //         // req.session.pisang = rows;
    //         res.redirect("/inbox");
    //         var login = req.session.pisang.user_email;
    //         console.log(login);
    //         // console.log(req.session);
    //     }
    // });

}); 

router.get('/new', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
