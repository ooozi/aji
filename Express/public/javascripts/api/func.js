var requirejs = require('requirejs');

(function(factory){
	requirejs(['underscore', 'jquery', 'exports'], function(_, $, exports) {
	      factory(_, $, exports, 'a');
	});
	
})(function(_, $, exports, args){
	
	var personOptions = ['age', 'gender', 'national', 'address'];
	
	function Person(options){
		console.log('Person--------------------');
		var pick = _.pick(options, personOptions);
		console.log(pick);
		_.extend(this, pick);
	};
	
	var extend = function(protoProps, staticProps){
		var parent = this;
		var child;

		if (protoProps && _.has(protoProps, 'constructor')) {
			child = protoProps.constructor;
		} else {
		    child = function(){ return parent.apply(this, arguments); };
		}

		
		_.extend(child, parent, staticProps);
		
		child.prototype = _.create(parent.prototype, protoProps);
		child.prototype.constructor = child;

		child.__super__ = parent.prototype;

		console.log('extend--------------------start');
		console.log(parent.prototype);
		console.log(child.prototype);
		console.log('extend--------------------end');
		
		return child;
	};
	
	Person.extend = extend;
	
	//add Person prototype
	var Events = {click:'click', change:'change'};
	var personProto = {name:'name', getName:function(){return this.name}};
	_.extend(Person.prototype, Events, personProto);
	
	//extend Person
	var options = {name:'kim', getName:function(){return this.name}};
	var Kim = Person.extend(options);
	
	
    var kim = new Kim({age: 10});
	
    console.log('Kim prototype--------------------');
	console.log(Kim.prototype);
	
	console.log(Kim);
	console.log(kim);
	
	
	for(var property in kim){
		console.log('property= ' + property);
	}
		
	
	console.log(kim.getName());
	console.log(kim.age);

	return args;
});








