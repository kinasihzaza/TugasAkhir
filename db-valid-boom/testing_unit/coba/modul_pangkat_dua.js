exports.method_pangkat_dua = function(param1, callback){
	var castedToInteger1 = parseInt(param1);
	var result = castedToInteger1*castedToInteger1;
	callback(false,result);
};