'use strict';
// procedural language vs. object oriented language

// Function
// - fundamental building block in teh program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
	console.log('hello');
}
printHello();

function log(message) {
	console.log(message);
}
log('Hello');
log(234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: pased by reference
function changeName(obj) {
	obj.name = 'coder';
}
const dasom = { name: 'Dasom' };
changeName(dasom);
console.log(dasom);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	// (1)
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	// (2)
	for (const arg of args) {
		console.log(arg);
	}
	// (3)
	args.forEach((arg) => console.log(arg));
}
printAll('front-end', 'React', 'Dasom');

// 5. Local Scope
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'hello';
	console.log(message); // local variable
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello';
	}
	// console.log(childMessage); // error
	return undefined; // default
}
printMessage();
// "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다"
// (You can't see inside from outside and you can see outside from inside)

// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

// First-class function
// functions are treated like any other variables, the values representing "actions"
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called or ealier than it is defined. (hoisted)❗️
// a function expression is created when the execution reaches it.
// In most cases when we need to declare a function,
// ✨ a Function Declaration is preferable, because it is visible prior to the declaration itself.
// That gives us more flexibility in code organization, and is usually more readable.
const print = function() {
	// anonymous function
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	// in this case, callback functions are printYes and printNo
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
// anonymous function
const printYes = function() {
	console.log(`yes!`);
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log(`no!`);
	// print() <-- recursion, will cause call stack
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const Print = function() {
	console.log(`simplePrint!`);
};
const simplePrint = () => console.log(`simplePrint!`);

const add = function(a, b) {
	return a + b;
};
const simpleAdd = (a, b) => a + b;
// in case of arrow function, you need a block(curly braces) if the body isn't inline.
// When using curly braces, "return" is needed
const simpleMultiply = (a, b) => {
	// the curly brace opens a multiline function
	// do something
	return a * b; // if we use curly braces, then we need an explicit "return"
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
	console.log(`IIFE`);
})();

// FUN QUIZ!
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// solution
const calculator = (command, a, b) => {
	switch (command) {
		case 'add':
			return a + b;
			break;
		case 'substract':
			return a - b;
			break;
		case 'divide':
			return a / b;
			break;
		case 'multiply':
			return a * b;
			break;
		case 'remainder':
			return a % b;
			break;
		default:
			throw Error(`unknown command`);
	}
};

// Function Object
// in JS, functions are objects - 'action object'
// therefore, functions have properties like objects
// (1) "name" property
function sayHi() {
	console.log('hi');
}
console.log(sayHi.name); // sayHi

// (2) "length" property
function f1() {
	console.log('f3');
}
console.log(f1.length); // 0
function f2(a) {}
console.log(f2.length); // 1
function f3(a, b) {}
console.log(f3.length); // 2

// (3) custom properties
function greeting() {
	console.log('I am a function!');
	greeting.counter++;
}
greeting.counter = 0;
greeting();
greeting();
greeting();
console.log(`function 'greeting' has been called ${greeting.counter} times`);
// ⚠️ A property is not a variable (variables =/= function properties)
// which means
// - even if we can TREAT a function as an object and STORE properties
// - BUT It does not have any effect on its execution

// Named Function Expression, NFE
let funWithoutName = function(name) {
	console.log(`Hi! My name is ${name}.`);
};
let funWithName = function intro(name) {
	if (name) {
		console.log(`Hi! My name is ${name}.`);
	} else {
		console.log(`Hi!`);
	}
};

funWithName('Dasom'); // Hi! My name is Dasom
funWithName() // Hi!

// ⚠️ There's no such thing(internal name feature) for function declaration
// ㄴ It is only available in function expression