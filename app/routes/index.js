'use: strict';

module.exports = function (router) {
    // Provide all routes here, this is for Home page.
    router.get("/",function(req,res){
      res.sendFile(process.cwd() + '/public/index.html');
    });
    
    router.get("/:value",function(req,res){
      
  		var submission = req.params.value;
	  	//may be either a number or a date string
  		var valueAsDate = Number(submission) ?  new Date(Number(submission)) :  new Date(submission);
  		var obj = { 'unix': null, 'natural': null };
		if (valueAsDate.toString().indexOf('Invalid') < 0 ) {
   			obj.unix = valueAsDate.getTime();
   			obj.natural = valueAsDate.toString().split(' ').slice(1,4).join(' '); //as specified even though the requirements say "similar to" the example
    //obj.natural = valueAsDate.toDateString();// enhanced functionality includes day of the week (rather than the date only).
  		}
  		res.send(JSON.stringify(obj, null, ' '));
  	});
}

