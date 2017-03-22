exports.bagi = function(param1, param2, callback){
	var castedToInteger1 = parseInt(param1);
	var castedToInteger2 = parseInt(param2);

	var result = castedToInteger1 / castedToInteger2;

	callback(false,result);
};