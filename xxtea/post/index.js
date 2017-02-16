var xxtea = require('xxtea-node');
exports.encrypt = function(request, reply){
    var text = JSON.parse(JSON.stringify(request.payload.text));
    var key = JSON.parse(JSON.stringify(request.payload.key));
    var encrypt_data = xxtea.encryptToString(text, key);
    reply(encrypt_data);
}
exports.decrypt = function(request, reply){
    var text = JSON.parse(JSON.stringify(request.payload.text));
    var key = JSON.parse(JSON.stringify(request.payload.key));
    var decrypt_data = xxtea.decryptToString(text, key);
    reply(decrypt_data);
}