"use strict";

// JavaScript is synchronous
// Execute the code block in order after hoisting
// *hoisting: putting function/variable declarations into memory BEFORE it executes any code segment

console.log(`1`); // sync
setTimeout(() => console.log("2"), 1000);
// setTimeout is a browser API -> a request to a browser, async
console.log(`3`); // sync
// result -> 1 3 2

// 1. Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately(() => console.log("hello")); // sync

// 2. Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // async
