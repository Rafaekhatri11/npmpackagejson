var express = require('express');
var app = express();
var path = require("path")
app.get('/', function(req, res){
  // res.send('Hello World');
  res.sendFile(path.join(__dirname,"./_api/package.json"))
});
const port =  process.env.PORT || 4000;
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});