var express = require('express');
var app = express(); // here I use the express() method, instead of the createServer()

app.get('/', function(req, res){
  res.send('Hello World');
});
const port =  process.env.PORT || 4000;
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});