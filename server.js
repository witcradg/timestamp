var express = require('express');
var app = express();

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

app.listen(process.env.PORT|8080, function () {
  console.log('app listening on port !');
});
