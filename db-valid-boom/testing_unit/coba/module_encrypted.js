exports.method_xxtea = function(plainText, callback){
	var xxtea = require('xxtea');
	var pass  = 'oppagangnamstyle';
	var castedToStringPlainText = String(plainText);
	var encrypted = xxtea.encrypt(castedToStringPlainText, pass);
	callback(false,encrypted);
};

exports.method_arc4 = function(plainText, callback){
	var rc4 = require('arc4');
 
	var cipher = rc4('arc4', 'secret_key');
	var d = cipher.encodeString(plainText);
	var e = cipher.decodeString(d);
	callback(false,d);
};