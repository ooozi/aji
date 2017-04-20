define(function(){
	
	console.log('---------------------------------------------');
	console.log('patten');
	console.log('---------------------------------------------');

	var Strategy = (function(){
		console.log('Strategy !');
	})();

	var ShipGo = (function(){
		console.log('Ship Go!');
	});

	var LandGo = (function(){
		console.log('Land Go!');
	});

	var Vesp = (function(){
		function Vesp(){
			this.subscribers = [];
		};
		
		Vesp.prototype.publish = function(){
			var self = this;
			this.subscribers.every(function(subcriber){
				subcriber.fire(self);
			});
		};
		
		Vesp.prototype.register = function(target){
			this.subscribers.push(target);
		};
		
		return Vesp;
	})();

	var Mucia = (function(){
		function Mucia(){
			this.list = [];
		};
		
		Mucia.prototype.subscribe = function(target){
			this.list.push({target: target, point: 0});
			target.register(this);
		};
		
		Mucia.prototype.unsubscribe = function(target){
			this.list.filter(function(person){
				return person.target !== target;
			});
		};
		
		Mucia.prototype.fire = function(target){
			this.list.some(function(person){
				console.log(person.target, target, person.target === target);
				if(person.target === target){
					++person.point;
					return true;
				}
			});
		};
		
		return Mucia;
	})();
	
	var vesp = new Vesp();
	var mucia = new Mucia();
	mucia.subscribe(vesp);
	mucia.subscribe(vesp);
	vesp.publish();
	
});


