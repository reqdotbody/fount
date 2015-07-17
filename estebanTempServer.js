var express = require('express')
var app = express();

app.get('/', function(req,res){
  res.end('Hello World');
});

app.use('/scripts', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('running...');