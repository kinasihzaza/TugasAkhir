var rc4 = require('arc4');
exports.encrypt = function(request, reply){
    
    var text = JSON.parse(JSON.stringify(request.payload.text));
    var key = JSON.parse(JSON.stringify(request.payload.key));
    var cipher = rc4('arc4', key);
    var encrypt_data = cipher.encodeString(text);
    reply(encrypt_data);
}
exports.decrypt = function(request, reply){
    var text = JSON.parse(JSON.stringify(request.payload.text));
    var key = JSON.parse(JSON.stringify(request.payload.key));
    var cipher = rc4('arc4', key);
    var decrypt_data = cipher.decodeString(text);
    reply(decrypt_data);
}