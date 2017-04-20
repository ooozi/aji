var animals = [
	{species: 'Lion', name: 'King'},
	{species: 'Whale', name: 'Fail'	}
];

console.log("" + animals.length);

for (var i=0; i<animals.length; i++){
	//console.log('$' + i);
	
	(function(i){
		this.print = function(){
			console.log('#' + i + ' ' + this.species + ': ' + this.name);
		}
		
		this.print();
		
	}).call(animals[i], i);
}

function Person(name){
	
	this.name = name;
	this.getName = function(a, b){
		console.log(this.name);
		console.log(a + ' ' + b);
		console.log(arguments);
		
		//console.log(Array.prototype.join.call(arguments));
	}
}

function Car(name){
	this.name = name
}

var person = new Person('kim');
var car = new Car('suv');
person.getName.apply(car, ['taxi', 'truck']);
//bind
var getCarName = person.getName.bind(car);

console.log('---------------------------------------------');
console.log('JSON');
console.log('---------------------------------------------');
var objJson = {test: 'yes'};
var objJson2 = JSON.parse(JSON.stringify(objJson));
objJson2.test = 'no';
console.log(objJson.test + ' ' + objJson2.test);

console.log('---------------------------------------------');
console.log('syntactic sugar');
console.log('---------------------------------------------');
//This is false value -> undefinded, null, 0, '', NaN
var a = [];
var b = NaN;
var c;
console.log(!!a + ' ' + !!b + ' ' + !!c);

console.log('---------------------------------------------');
console.log('clourse');
console.log('---------------------------------------------');

for(var i=0; i<6; i++){
	setTimeout(
			(function(x){
				return function(){
					console.log(x);
				};
			})(i), 1000*i);
}
console.log('closure end');

console.log('---------------------------------------------');
console.log('function chaining');
console.log('---------------------------------------------');

var Kitten = function(){
	this.name = 'Garfield';
	this.color = 'brown';
	this.gender = 'male';
};

Kitten.prototype.setName = function(name){
	this.name = name;
	return this;
};

Kitten.prototype.setColor = function(color){
	this.color = color;
	return this;
};

Kitten.prototype.setGender = function(gender){
	this.gender = gender;
	return this;
};

Kitten.prototype.save = function(){
	console.log(this.name, this.color, this.gender);
	return this;
}

var boo = new Kitten();
boo.setName('Bob').setColor('black').setGender('male').save();










