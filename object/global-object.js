'use strict';

// Global Object(in JS)
// ㄴ standardized name: globalThis
// ㄴ in a browser: window
// ㄴ in Node.js: global
// ㄴ in other environment: another name

// (1) We can declare global function or global variable with var(not let/const)
var gVar = 3;
console.log(window.gVar); // 3
let gVar2 = 5;
console.log(window.gVar2); // undefined - because it is declared with let instead of var

// (2) We can write a value directly as a property in the global object
window.user = {
	name: 'Dasom'
};
console.log(user.name); // Dasom
console.log(window.user.name); // Dasom -> safer way to call

// (3) We use a global object to test for support of modern language features - ex: Promise
if (!window.Promise) {
	console.log('Your browser is old and not supporting Promise!');
}
