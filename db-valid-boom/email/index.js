exports.method_send_email = function(targetEmail, bodyEmail, callback){
	var targetEmailParsed = (targetEmail);
	var bodyEmailParsed = String(bodyEmail);
	// console.log(targetEmailParsed);
	// console.log('* [example1] sending test email');
	 
	var send = require('gmail-send')({
	  user: 'lovely.zaza@gmail.com',
	  pass:  'SMPIA9KP',
	  to:   '"User" <'+targetEmailParsed+'>',      // Send back to yoursel	
	  from:   '"User" <lovely.zaza@gmail.com>',  // from: by default equals to user 
	  subject: 'test subject',
	  text:    bodyEmailParsed
	});
	// Override any default option and send email 
	send({                         
	  subject: 'attached ',  
	}, function (err, res) {
	  // console.log('* [example1] send(): err:', err, '; res:', res);
	  // console.log(JSON.parse(err));
	  if(JSON.parse(err)=== null){
	  	// console.log("SEND");
	  	callback(false, res);
	  }else{
	  	// console.log("FAIL");
	  	callback(true, err);
	  }
	});
}
