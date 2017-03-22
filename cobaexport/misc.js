// var x = 5;
// var addX = function(value) {
//   return value + x;
// };
// module.exports.x = x;
// module.exports.addX = addX;



var User = function(name, email) {
  this.name = name;
  this.email = email;
};
module.exports.User = User;



// var powerLevel = function(level) {
//   return level > 9000 ? "it's over 9000!!!" : level;
// };
// module.exports = powerLevel;



//exports.powerLevel = (level) => level > 9000 ? "it's over 9000!!!" : level;



// module.exports = (level) => {
//   return {
//     powerLevel: () => level > 9000 ? "it's over 9000!!!" : level
//   };
// }
