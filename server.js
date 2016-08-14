'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js');
    
var app = express();
var router = express.Router();

app.use('/public', express.static(process.cwd() + '/public'));
app.use("/",router);
routes(router);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("server listening");
});