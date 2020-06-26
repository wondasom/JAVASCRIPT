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
