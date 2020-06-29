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

// 2. Computed properties
// key should be ALWAYS string
console.log("computed properties");
console.log(dasom.name);
console.log(dasom["name"]);
dasom["hasJob"] = true;
console.log(dasom.hasJob);

// ex - when the key is given by the user,
function printValue(obj, key) {
	console.log(obj[key]);
	// console.log(obj.key); -> X
}
printValue(dasom, "name");
printValue(dasom, "age");

// 3. Property value and shorthand
const person1 = { name: "Bob", age: 22 };
const person2 = { name: "Steve", age: 23 };
const person3 = { name: "Zoe", age: 41 };

function makePerson(name, age) {
	return { name, age };
}
const person4 = makePerson("Celine", 30);
console.log(person4);

