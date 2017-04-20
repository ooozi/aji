require(["rq_app", "rq_logger"], 
	function(app, logger){
		"use strit";
		app.start();
		logger.log("application start");
	}, 
	function(err){
		console.log(err);
	}
);