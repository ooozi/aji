/**
 * 
 */
define(function(){
	//var console = global.console || window.console;
	var console = window.console;
	
	var exports = {
			version: '0.0.1',
			author: 'ooozi'
	};
	
	exports.log = function(){
		var args = Array.prototype.unshift.call(arguments, new Date().toLocaleString());
		//var arr = ["a", "b"];
		//arguments.unshift( new Date().toLocaleString());
		console.log.apply(console, arguments);
	};
	
	return exports;
});