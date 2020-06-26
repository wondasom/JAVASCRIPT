"use strict";

// Object-oriented programming
// class: template (ex - 붕어빵 틀)
// object: instance of a class (ex - 팥붕어빵, 슈크림붕어빵)
// JavaScript classes
// - instroduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}
	//methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const dasom = new Person("dasom", 27);
console.log(dasom);
console.log(dasom.name);
console.log(dasom.age);
dasom.speak();


// 2. Getter and Setter
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	// get age() {
	// 	return this.age;
	// }
	//
	// set age(value) {
	// 	this.age = value;
	// }
	// -> call stack error

	get age() {
		return this._age;
	}
	set age(value) {
		//(1)
		// if (value < 0) {
		// 	throw Error("age can not be negative");
		// }

		// (2)
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

