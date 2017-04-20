define(function(){
	
	var exports = {};
	
	function Person(firstName, lastName){
		var lastName = lastName;
		var firstName = firstName;
		this.gender = '';
		this.getLastName = function(){
			return lastName;
		};
	}
	
	Person.prototype.getGender = function(){
		return this.gender;
	};
	Person.prototype.setGender = function(gender){
		this.gender = gender;
	};

	var kim = new Person('foo', 'kim');
	kim.tel = '0';
	kim.setGender('female');
	
	console.log(Person);
	console.log(Person.prototype);
	console.log(kim);
	
	console.log(kim.__proto__ === Person.prototype);

	console.log(kim.getGender());
	
	console.log(Person.toString());
	console.log(Person.prototype.toString());
	
	var person = {lastName:'', firstName:'', getName:function(){return this.firstName;}};

		
	function Korean(city, gender){
		Person.call(this, gender);
		this.city = city;
	}
	
	Korean.prototype.nationality = 'korea';
	
	Korean.prototype = new Person();
	Korean.prototype.constructor = Korean;
	
	var kor = new Korean('seoul');
	
	return exports.Person;
});

