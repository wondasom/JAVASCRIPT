'use strict';
// 0. Terms
// - operand : is what operators are applied to
// - unary : an operator is unary if it has a single operand
// - binary : an operator is binary if it has two operands

// 1. String concatenation
console.log('my' + 'cat');
console.log(1 + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("Dasom's book");
console.log("Dasom's \nbook");
// ❗️ ONLY in case of + operator(add)
// Note: if any of the operands is a string, then the other one is CONVERTED to a string too
// -> string concatenation happens
console.log('1' + 2); // '12'
console.log(2 + 2 + '1'); // '41' not '221'

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation
// ❗️ EXCEPT the + operator(add), other arithmetic operators work only with numbers
// and always CONVERT their operands to numbers
console.log(6 - '2'); // 4
// ❗️ unary + operator(add)
// ㄴ the unary plus operator does not do anything to numbers 🔢
// ㄴ however, it the operand is not a number, the unary plus operator converts it into a number
console.log(+true); // 1
console.log(+''); // 0
// this is especially useful in a situation where you get string values from the form fields and want to sum them
// example
let oranges = '3';
let apples = '2';
console.log(+oranges + +apples); // 5
// ☝🏼 both values converted to numbers before the binary plus
// it is same as
console.log(Number(oranges) + Number(apples)); // 5

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
// all comparison operators return a boolean value
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 5-1. String comparison
// JS uses th so-called 'dictionary' or 'lexicographical' order
// Strings are compared letter-by-letter in the order ☝🏼
console.log('Z' > 'A'); // true
console.log('Bee' > 'Be'); // true
console.log('Glow' > 'Glee'); // true
console.log('a' > 'A'); // true
// 5-2. Comparison of different types
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' === 1); // true, string '01' becomes a number 1
console.log(true == 1); // true
console.log(false == 0); // true
// 5-3. Comparison with null and undefined
// The value null and undefined equal == each other and do not equal any other value
// - Treat any comparison with undefined/null except strict equality === with exceptional care.
// - Don't use comparisons >= > < <= with a variable which may be null/undefined, unless you're really sure of what you're doing
// - If a variable can have these values, check for them seperately
console.log(null == undefined); // true
console.log(null === undefined); // false

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the FIRST truthy value
// >>> simplest value should come FIRST(👉🏼 heavy operation should be excuted at last)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the FIRST falsy value
// >>> simplest value should come FIRST(👉🏼 heavy operation should be excuted at last)
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
const stringFive = '5';
const numberFive = 5;

// = assignment
// it is also an operator (with the very low priority of 3 in the precedence table)

// == loose equality, with type conversion
// ㄴ problem: it cannot differentiate 0 from false
console.log(0 == false); // true
console.log('' == false); // true
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, NO type conversion 🙅🏻‍♀️
console.log(0 === false); // false, because the tyeps are different
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference*
const dasom1 = { name: 'dasom' };
const dasom2 = { name: 'dasom' };
const dasom3 = dasom1;
console.log('dasom');
console.log(dasom1 == dasom2);
console.log(dasom1 === dasom2);
console.log(dasom1 === dasom3);

// equality - puzzler
console.log('This is euqlity puzzler!');
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'dasom';
if (name === 'dasom') {
	console.log('Welcome, Dasom!');
} else if (name === 'coder') {
	console.log('You are an amazing coder');
} else {
	console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'dasom' ? 'yes' : 'no');
// multiple '?'
let age = 20;
let message =
	age < 3
		? 'Hi, baby!'
		: age < 18
		? 'Hello!'
		: age < 100
		? 'Greetings!'
		: 'What an unusual age!';

// 10. Nullish coalescing operator: ??
// leftExpr ?? rightExpr
// ⚠️ this is a recent addition to the language. Old browsers may need polyfills
let firstName = null;
let lastName = null;
let nickName = 'randomForeigner';
// shoe the first not-null/undefined value
console.log('HERE');
console.log(firstName ?? lastName ?? nickName); // -> 'randomForeigner'
//  || 🆚 ??
let height = 0;
console.log(height || 100); // -> 100
console.log(height ?? 100); // -> 0
// this is because || takes 0 as false, ?? takes 0 as defined(or not-null) value
// when we'd like to treat null/defined differently from 0, it matters a lot
// CONSIDER adding parentheses when you use ?? because the precedence of ??? is rather low
// which means ?? is evaluated after most other operators, but before = and ?

// 11. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type chekcs in TS
const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you!');
		break;
	default:
		console.log('same all!');
		break;
}

// 12. Loops
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
