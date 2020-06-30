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
//  ㄴ independent programming language and platform ❗️

// JSON study point ✨ - serialize & deserialize

// 1. Object to JSON
// stringify(obj)
// *overloading :
// Overloading allows different methods to have the same name,
// but different signatures
// where the signature can differ by the number of input parameters or type of input parameters or both.
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
	name: "tori",
	color: "white",
	size: null,
	birthDate: new Date(),
	// jumpArrow: () => {
	// 	console.log(`${this.name} can jump!`);
	// }, -> You CANNOT access 'name' when you use ARROW FUNCTION 💘 as a method
	jump: function() {
		console.log(`${this.name} can jump!`);
	}
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === "name" ? "dasom" : value;
});
console.log(json);

// 2. JSON to Object
// parse(obj)
console.clear();
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
	return key === "birthDate" ? new Date(value) : value;
});

console.log(obj2.birthDate.getDate()); // NOW it works!
