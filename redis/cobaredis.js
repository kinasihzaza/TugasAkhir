//var from = payload.from
//var to = payload.to
//var key = payload.key
//var message = payload.message

//var createHash = require('sha.js');
var sha256 = require('sha256');
var hashKey = sha256("tes", 'utf8');
//var hashKey = sha256.update('message', 'utf8').digest('hex');
console.log(hashKey) //ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad 

var redis = require("redis"),
client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});

// ini bagian check key
client.get(hashKey, function(err, data) {
    // data is null if the key doesn't exist
    if(err || data === null) {
        //encryptedModule.xxtea(message, function(err2, data2){
        //if(err2) {
	if(err) {
        	console.log(err2);
        } 

	else{
        	mysqlModule.insertdb(from, to, key, data2.messageEncrypted, function(err3, data3){
          		if(err3){
           			console.log(err3);
           		} 
			else {
            			console.log('Setting cache: ' + hashKey);
            			client.set(hashKey, data2.messageEncrypted);//INI DATA YANG DISET ADALAH YANG UDAH DIENCRYPTED HATI HATI BUKAN YANG PLAIN.
            			res.send(users);
           		}
          	});
        }
    }
    else {
        return data;
       //masukin ke DB. tanpa harus encrypsi lagi. kita dapet dari cache langsung aja masukin. Tujuannya biar ga dikit dikit encrypt. soalnya encrypt butuh waktu.
    }
});
