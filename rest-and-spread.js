// Rest Parameters and Spread Syntax

// 1. Rest Parameters 👉🏼 ...
// parameters ➡ array
// if "excessive" arguments exist
// ㄴ there is no error
// ㄴ however, it does not affect the result
// ㄴ see the example below
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2, 100, 1000)); // 3
// if you want to make sure all the parameters to add up,
// you can use rest parameter
function sumAll(...args) {
	let sum = 0;
	for (let arg of args) {
		sum += arg;
	}
	return sum;
}
console.log(sumAll(1, 2, 100, 1000)); // 1103
// let's see another example - you can add rest parameter at the end
function favShows(category, ...titles) {
	console.log(`The following ${titles.length} shows are ${category} genre`);
	console.log(titles[0]);
	console.log(titles[1]);
	console.log(titles[2]);
}
favShows(
	'comedy',
	'Unbreakable Kimmy Schimidt',
	'Blooklyn Nine Nine',
	'Crazy Ex-girlfriend'
);

// 2. The "arguments" variable
// there is special✨ array-like object named arguments that contain all arguments by their index
function showName() {
	console.log(arguments.length);
	console.log(arguments[0]);
	console.log(arguments[1]);
}
showName('Dasom', 'Won'); // 2, Dasom, Won
showName('Jihee'); // 1, Jihee, undefined
// ⚠️ arrow function does not have "arguments"
// ⚠️ arguments are array-like, not an actual array, hence you can't use array methods like .map()

// 3. Spread Syntax
// array ➡ parameters
// (1) sometimes we need to 'spread' an array into parameters(see the example below)
// ㄴ if the parameter is an array in a function where numeric arguments are expected
console.log(Math.max(1, 2, 3)); // 3
// - since the arr is an array, Math.max(arr) does not work
let arr1 = [1, 2, 3];
console.log(Math.max(arr1)); // NaN
// - we can solve this by using spread syntax
let arr2 = [1, 2, 3];
console.log(Math.max(...arr2)); // 3

// (2) by using spread syntax, we can pass multiple iterables
let arr3 = [1, 10, 0];
let arr4 = [-1, -10, 100];
console.log(Math.max(...arr3, ...arr4)); // 100

// (3) by using spread syntax, we can merge arrays
let arr5 = [2, 3, 4, 5];
let arr6 = [6, 7, 8, 9];
let merged = [1, ...arr5, ...arr6, 10];
console.log(merged); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// (4) in case of string
let str = 'Dasom';
console.log(...str); // D a s o m
let str2 = [...str];
console.log(str2.length); //5
// for this particular case, we can also use Array.from()
let str3 = Array.from(str);
console.log(str3); // ["D", "a", "s", "o", "m"]
console.log(str3.length); // 5

// (5) New Copy of an Array / Object
// ㄴ by using spread syntax, we can copy the original array
let array = [1, 2, 3];
let arrayCopy = [...array];
// - same contents
console.log(JSON.stringify(array) === JSON.stringify(arrayCopy)); // true
// - different reference
console.log(array === arrayCopy); // false

// ㄴ by using spread syntax, we can copy the original array
let object = { name: 'Dasom', passion: 'coding' };
let objectCopy = { ...object };
// - same contencts
console.log(JSON.stringify(object) === JSON.stringify(objectCopy)); // true
// - different reference
console.log(object === objectCopy); // false
