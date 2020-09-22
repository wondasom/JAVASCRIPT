// HTTP : Hypertext Transfer Protocol
// AJAX : Asynchronous JavaScript And XML
//  ㄴ XHR(XMLHttpRequest)
//  ㄴ fetch() API - not available in IE

// JSON : JavaScript Object Notation
//  ㄴ ECMAScript 3rd 1999
//  ㄴ simplest data interchange format
//  ㄴ lightweight text-based structure
//  ㄴ easy to read
//  ㄴ key - value pairs { key : value }
//  ㄴ used for serialization and transmission of data between the network connection
//  ㄴ data-only language-independent specification❗️
// ⚠️ JSON-encoded object has several important differences from the object literal:
// (1) strings use double quotes
// (2) object property names are double-quoted (ex: "age":30)

// JSON study point ✨ - serialize & deserialize

// 1. JSON.stringify()
// Object -> JSON
// stringify(obj)
// *overloading :
// Overloading allows different methods to have the same name,
// but different signatures
// where the signature can differ by the number of input parameters or type of input parameters or both.

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// jumpArrow: () => {
	// 	console.log(`${this.name} can jump!`);
	// }, -> You CANNOT access 'name' when you use ARROW FUNCTION 💘 as a method
	jump: function() {
		console.log(`${this.name} can jump!`);
	}
};

let rabbitJSON;
rabbitJSON = JSON.stringify(rabbit);
console.log(rabbitJSON);

// excluding and transforming
// you can add a space as the third parameter for pretty formatting
rabbitJSON = JSON.stringify(rabbit, ['name', 'color'], 2);
console.log(rabbitJSON);

rabbitJSON = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'dasom' : value;
});
console.log(rabbitJSON);

// ⚠️ JSON.stringify can be appliced to primitives as well
// (1) boolean
let booleanJSON = JSON.stringify(true);
console.log(booleanJSON); // true
// (2) array
let arrayJSON = JSON.stringify(['apple', 'banana']);
console.log(arrayJSON);

// ⚠️ data-only language-independent specification
// ㄴ therefore, some JS-specific properties are skippied by JSON.stringify
// ex: function properties, symbolic properties, properties that store undefied

// ⚠️ toJSON
console.log(`👇🏼toJSON`);
let room1 = {
	number: 7
};
let meeting = {
	title: 'MY BIRTHDAY PARTY',
	room1
};
console.log(JSON.stringify(meeting));

room2 = {
	number: 7,
	toJSON() {
		return this.number;
	}
};
let meetup = {
	title: 'MY BIRTHDAY PARTY',
	room2
};
console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup));

// 2. JSON.parse()
// JSON to Object
// parse(obj)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); Uncaught TypeError❗️

console.log(rabbit.birthDate.getDate());
// console.log(obj.birtDate.getDate()) Uncaught TypeError❗️
//  ㄴ BECAUSE birthDate IN obj is STRING

// in order to fix this problem, you need to use 'reviver'
const obj2 = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate()); // NOW it works!

// 💘 USEFUL SITES 💘
// 1. JSON Diff checker: http://www.jsondiff.com/
// 2. JSON Beautifier/editor: https://jsonbeautifier.org/
// 3. JSON Parser: https://jsonparser.org/
// 4. JSON Validator: https://tools.learningcontainer.com/json-validator/
