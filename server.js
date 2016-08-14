<<<<<<< b2793115e64ee1c1bedc90ae5e1477922e410855
var express = require('express');
=======
'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js');
    
>>>>>>> Change repository and implement using clementine.js
var app = express();
var router = express.Router();

app.use('/public', express.static(process.cwd() + '/public'));
app.use("/",router);
routes(router);

<<<<<<< 65c5198298c5360648e85127f81cac22208d7a5e

//Creating Router() object

//var router = express.Router();

// Provide all routes here, this is for Home page.



// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.



<<<<<<< b2793115e64ee1c1bedc90ae5e1477922e410855
//TODO add Use statement when there is no / on the end of the url
//TODO display error message and Use statement when an invalid value is submitted

app.get('/*', function (req, res) {
  var decodedSubmission = decodeURI(req.url).slice(1);
  //may be either a number or a date string
  var valueAsDate = Number(decodedSubmission) ?  new Date(Number(decodedSubmission)) :  new Date(decodedSubmission);
  var obj = { 'unix': null, 'natural': null };
  if (valueAsDate.toString().indexOf('Invalid') < 0 ) {
    obj.unix = valueAsDate.getTime();
    obj.natural = valueAsDate.toString().split(' ').slice(1,4).join(' '); //as specified even though the requirements say "similar to" the example
    //obj.natural = valueAsDate.toDateString();// enhanced functionality includes day of the week (rather than the date only).
  }
  res.send(JSON.stringify(obj));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('app listening on port.');
=======
=======
>>>>>>> rebase?
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("server listening");
>>>>>>> Change repository and implement using clementine.js
});
