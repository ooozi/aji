/**
 * 
 */
define(['rq_logger'], 
	function(logger){
		
		var exports = {
			type: 'controller',
			name: 'main'
		};
		
		var bindEvent = function(){
			logger.log('bind event');
			
		};
		
		var view = function(){
			logger.log('render ui');
		};
		
		exports.execute = function(routeParameters){
			logger.log(exports.name + ' controller excute');
		}
		
		return exports;
});