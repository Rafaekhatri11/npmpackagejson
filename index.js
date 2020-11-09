var express = require('express');
var app = express(); // here I use the express() method, instead of the createServer()

app.get('/', function(req, res){
  res.send('Hello World');
});
const port = 4000 || process.env.PORT;
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});