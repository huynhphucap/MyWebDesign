var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(path.join(__dirname, 'public')));

app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});

app.get('/', function(req, res) {
  res.redirect('/public/index.html');
});
