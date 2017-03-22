exports.sendEmail = function(targetEmail, callback){
	var targetEmailParsed = (targetEmail);
	// console.log(targetEmailParsed);
	// console.log('* [example1] sending test email');
	 
	var send = require('gmail-send')({
	  user: 'kinasihna@gmail.com',
	  pass:  'SMAALAZHAR',
	  to:   '"User" <'+targetEmailParsed+'>',      // Send back to yoursel	
	  from:   '"User" <kinasihna@gmail.com>',  // from: by default equals to user 
	  subject: 'test subject',
	  text:    'test text'
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
