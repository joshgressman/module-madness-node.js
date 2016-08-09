var http = require('http');
//this are the linking code to each module.page
var module1 = require('./module1.js');
var module2 = require('./module2.js');
var module3 = require('./module3.js');
//creating server, request and resonse
http.createServer(function(req, res){
  //succes cide
res.writeHead(200);
// res.write(module1.randomNum(100, 100000) +);
// res.write(module2.usdNum(module1.randomNum(100, 1000000)) + '\n');
res.write(module3.accountBal() + '\n');
res.write(module3.results() + '\n');

res.end();
//server
}).listen(3000);

console.log("listen on port 3000");
