'use strict';

// Function Binding
// 1. Problem: losing 'this'
// - When a method is passed somewhere else than the object, 'this' is lost.
let dasom = {
	firstName: 'Dasom',
	lastName: 'Won',
	sayHi() {
		console.log(`Hi, ${this.firstName}`);
	}
};
setTimeout(dasom.sayHi, 1000); // Hi, undefined
// ㄴ in this case, setTimeout's 'this' is window, not dasom

// 2. ✨ Solution(1): a wrapper
setTimeout(function() {
	dasom.sayHi(); // Hi, Dasom
}, 1000);
// ㄴ this works because it receives dasom from the outer lexical environment,
// and then calls the method normally
setTimeout(() => dasom.sayHi(), 1000); // Hi, Dasom
// ㄴ we can write the same code but short like above

// However, this solution has a little vulneralbility
// - what if before setTimeOut triggers, dasom object changes values?
// - in that case, it will call the wrong object

// 3. ✨ Solution(2): bind
// functions provide a built-in method bind that allows to fix 'this'.
// 👇🏼 basic syntax
function sayHello() {
	console.log(`Hello, ${this.firstName}`);
}
let sayHelloDasom = sayHello.bind(dasom); // this = dasom
sayHelloDasom(); // Hello, Dasom
// 👇🏼 applying .bind() to the previous example
let sayHi = dasom.sayHi.bind(dasom);
console.log('bind');
sayHi(); // Hi, Dasom
setTimeout(sayHi, 2000);

// 4. Partial functions
// we can use bind and fix arguments, as well as the context
function multiply(a, b) {
	return a * b;
}
let double = multiply.bind(null, 2);
console.log(double(1)); // multiply(2, 1) = 2
console.log(double(2)); // multiply(2, 2) = 4
console.log(double(3)); // multiply(2, 3) = 6
console.log(double(4)); // multiply(2, 4) = 8
