// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instaces of Objects
// object = { key : value };

// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const dasom = { name: "dasom", age: 4 };
print(dasom);

dasom.hasJob = true; // dynamically typed language
console.log(dasom.hasJob);

delete dasom.hasJob;
console.log(dasom.hasJob);
