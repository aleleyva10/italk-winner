// requires
var express = require('express');
var app = express();
var index = require('./modules/routes/index');
var register = require('./modules/routes/register');
var login = require('./modules/routes/login');
// var list = require('./modules/routes/list');

// uses
app.use(express.static('public'));
app.use('/', index);
app.use('/register', register);
app.use('/login', login);
// app.use('/list', list);

// globals
var port = process.env.PORT || 2017;

// spin up server
app.listen(port, function(){
  console.log('server up on:', port);
}); // end spin up
