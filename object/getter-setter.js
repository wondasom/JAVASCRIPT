'use strict';

// Accessor properties

// In JavaScript, there are two types of object properties:
// (1) data properties
// (2) accessor properties: getter & setter
//     - Accessor properties are represented by "getter" and "setter" methods

// 1. Getter & Setter
let dog = {
	name: 'Dukong',
	Family: 'Won',
	get fullName() {
		return `${this.name} ${this.family}`;
	},
	set fullName(value) {
		[this.name, this.family] = value.split(' ');
	}
};
console.log(dog.fullName); // Dukong Won
// The accessors are not called as functions, they are read normally.
dog.fullName = 'Jayul Lee';
console.log(dog.name);
console.log(dog.family);

// 2. Accessor descriptors
// Descriptors for accessors are different from the ones for data properties
// They don't have 'value', 'writable'
// Instead, they have 'get' and 'set'
// - get: a function, arguments 🙅🏻‍♀️, that works when a property is read
// - set: a function, argunents 🙆🏻‍♀️, that works/is called when a property is set
// - enumerable
// - configurable
let Iam = {
	city: 'Seoul',
	country: 'South Korea'
};
Object.defineProperty(Iam, 'from', {
	get() {
		return `${this.city}, ${this.country}`;
	},
	set(value) {
		[this.city, this.country] = value.split(', ');
	}
});
console.log(Iam.from); // Seoul, Koera
Iam.from = 'Berlin, Germany';
console.log(Iam.from); // Berlin, Germany

// 3. Smarter getter, setter
let user = {
	get name() {
		return this._name;
	},
	set name(value) {
		if (value.length < 1) {
			console.log('Name cannot be left empty');
			return;
		}
		this._name = value;
	}
};
user.name = 'Dasom';
console.log(user); // {_name: "Dasom"}
user.name = ''; // Name cannot be left empty

// 4. Using for compatibility
function Dog(name, birthday) {
	this.name = name;
	this.birthday = birthday;
	Object.defineProperty(this, 'age', {
		get() {
			let todayYear = new Date().getFullYear();
			return todayYear - this.birthday.getFullYear();
		}
	});
}
let dukong = new Dog("Dukong", new Date(2014, 11, 13))
console.log(dukong.birthday) // Sat Dec 13 2014
console.log(dukong.age) // 6