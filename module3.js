//these are linking the modile1 page and the module 2 page to the module3 page

var module1 = require('./module1.js');
var module2 = require('./module2.js');

exports.accountBal = function() {
  return "Account Balance: \n";
};
//thesr are the functions that automatically export (one of the 3 ways to export)
//function slectors need to utilize the file .. and the function modul2.usdNum();
exports.results = function (){
   return module2.usdNum(module1.randomNum(100, 100000));
};
