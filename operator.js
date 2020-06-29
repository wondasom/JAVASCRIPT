"use strict";
// 1. String concatenation
console.log("my" + "cat");
console.log(1 + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("Dasom's book");
console.log("Dasom's \nbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment add decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the FIRST truthy value
// >>> simplest value should come first(heavy operation should be excuted at last)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the FIRST falsy value
// >>> simplest value should come first(heavy operation should be excuted at last)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
// 	nullableObject.something;
// }

function check() {
	for (let i = 0; i < 10; i++) {
		//wasting time
		console.log(`:(`);
	}
	return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference*
const dasom1 = { name: "dasom" };
const dasom2 = { name: "dasom" };
const dasom3 = dasom1;
console.log(dasom1 == dasom2);
console.log(dasom1 === dasom2);
console.log(dasom1 === dasom3);

// equality - puzzler
console.log("This is euqlity puzzler!");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = "dasom";
if (name === "dasom") {
	console.log("Welcome, Dasom!");
} else if (name === "coder") {
	console.log("You are an amazing coder");
} else {
	console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === "dasom" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type chekcs in TS
const browser = "IE";
switch (browser) {
	case "IE":
		console.log("go away!");
		break;
	case "Chrome":
	case "Firefox":
		console.log("love you!");
		break;
	default:
		console.log("same all!");
		break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is excuted.
let i = 3;
while (i > 0) {
	console.log(`while ${i}`);
	i--;
}

// do while loop, body code is excuted first,
// then check the condition.
do {
	console.log(`do while: ${i}`);
	i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
	//inline variable declaration
	console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i:${i}, j:${j}`);
	}
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use condition)
// solution (1)
for (let i = 0; i < 11; i++) {
	if (i % 2 !== 0) {
		continue;
	}
	console.log(`q1. ${i}`);
}
// solution (2)
for (let i = 0; i < 11; i++) {
	if (i % 2 == 0) {
		console.log(`q1. ${i}`);
	}
}

// Q2. iterate from 0 to 10 and print only numbers until reaching 8
// solution
for (let i = 0; i < 11; i++) {
	if (i > 8) {
		break;
	}
	console.log(`q2. ${i}`);
}
