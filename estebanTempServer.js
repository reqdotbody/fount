var express = require('express')
var path = require('path')
var app = express();

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'public','index.html'));
});

app.use('/scripts', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.listen(4000);
console.log('running...');