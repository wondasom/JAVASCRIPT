'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instaces of Objects
// object = { key : value };
// ㄴ key is a string (also called a “property name”), and value can be anything

// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const dasom = { name: 'dasom', age: 4 };
print(dasom);

dasom.hasJob = true; // dynamically typed language
console.log(dasom.hasJob);

delete dasom.hasJob;
console.log(dasom.hasJob);

// 2. Computed properties
// Key should be ALWAYS string
console.log('computed properties');
console.log(dasom.name);
console.log(dasom['name']);
dasom['hasJob'] = true;
console.log(dasom.hasJob);

// ex - when the key is given by the user,
function printValue(obj, key) {
	console.log(obj[key]);
	// console.log(obj.key); -> X
}
printValue(dasom, 'name');
printValue(dasom, 'age');
// ex - for multiword properties, the dot access doesn't work
// (1) the code below will throw a syntax error
// dasom.likes dogs = true
// (2) - the code below will work
dasom['likes dogs'] = true;
// (3) - the code below will work as well
let key = 'likes cats';
dasom[key] = true;

// 3. Property value and shorthand
const person1 = { name: 'Bob', age: 22 };
const person2 = { name: 'Steve', age: 23 };
const person3 = { name: 'Zoe', age: 41 };

function makePerson(name, age) {
	return { name, age };
}
const person4 = makePerson('Celine', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}
const person5 = new Person('Dave', 31);
console.log(person5);

// 5. in operator: property existence check (key in obj)
console.log('name' in dasom); // true
console.log('age' in dasom); // true
console.log('random' in dasom); // false
console.log(dasom.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in dasom) {
	console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
	console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'dasom', age: '27' };
const user2 = user;
user2.name = 'coder';
console.log(user); // 'coder'

// old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object.assign(target, source);
// (1)
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// (2)
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // latter one overlaps the previous ones
console.clear();
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);

// Reading of Obejct copying, reference: https://javascript.info/object-copy