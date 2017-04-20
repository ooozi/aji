/**
 * 
 */
define(['rq_mainController'],
		function(main){
		"use strit";
		var exports = {};
		
		exports.start = function(){
			main.execute();
		};
		
		
		
		return exports;
});