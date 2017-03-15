console.log('* [example1] sending test email');
 
// Require the module and set default options 
// You may use almost any option available in nodemailer,  
// but if you need fine tuning I'd recommend to consider using nodemailer directly. 
var send = require('gmail-send')({
  user: 'nindyasaridewiutari@gmail.com',               // Your GMail account used to send emails 
  pass: 'nindy201195',             // Application-specific password 
  to:   'kinasihna@gmail.com',      // Send back to yourself 
  // from:   '"User" <user@gmail.com>'  // from: by default equals to user 
  // replyTo:'user@gmail.com'           // replyTo: by default undefined 
  subject: 'test subject',
  text:    'test text'
  // html:    '<b>html text text</b>' 
});
 
//var file = './demo-attachment.txt';        // File to attach 
 
// Override any default option and send email 
send({                         
  subject: 'attached ',   // Override value set as default  
  //files: [file]                // String or array of strings of filenames to attach 
}, function (err, res) {
  console.log('* [example1] send(): err:', err, '; res:', res);
});

//----------------------------------------------------------------------------------//

// console.log('* [example2] sending test email');
 
// var send = require('gmail-send')({
//   user: 'nindyasari13@mhs.if.its.ac.id',             // Your GMail account used to send emails 
//   pass: '02051957',                                  // Application-specific password 
//   to:   'kinasih.zaza13@mhs.if.its.ac.id',           // Send to yourself 
//   subject: 'ping',
//   text:    'gmail-send example 2'   // Plain text 
// })();  

// console.log(send);

/* Client-Secret Downloaded from Google Development */
// var clientSecret = {
//     installed: {
//         client_id: "411962762057-52t151hq6kdhcrnel3tr0vqcblcbh09a.apps.googleusercontent.com",
//         project_id: "prime-service-161606",
//         auth_uri: "https://accounts.google.com/o/oauth2/auth",
//         token_uri: "https://accounts.google.com/o/oauth2/token",
//         auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//         client_secret: "1mIZ9hyJQWS347Tks0pH1bQf",
//         redirect_uris: [
//             "urn:ietf:wg:oauth:2.0:oob",
//             "http://localhost"
//         ]
//     }
// };

// console.log('* [example2] sending test email');
 
// var send = require('gmail-send')({
//   user: 'nindyasari13@if.its.ac.id',           // Your GMail account used to send emails 
//   pass: '02051957',           // Application-specific password 
//   to:   'kinasih.azizah13@if.its.ac.id',           // Send to yourself 
//   subject: 'ping',
//   text:    'gmail-send example 2'   // Plain text 
// })();                               // Send without any check 

// console.log(send);
 
// var gmailNode = require('gmail-node');
 
// // Message 
// var testMessage = {
//     to: 'kinasih.azizah13@if.its.ac.id',
//     subject: 'Test Subject',
//     message: 'Test Email'
// };
 
// // ClientSecret: 
// gmailNode.init(clientSecret, './token.json', initComplete);
 
// function initComplete(err, dataObject) {
//     if(err){
//         console.log('Error ', err);
//     }else {
//         gmailNode.send(testMessage, function (err, data) {
//             console.log(err,data);
//         });
//     }
// }