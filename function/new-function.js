'use strict';
// new Function
// ㄴ one of the ways to create a function
// ㄴ rarely used
// ㄴ but sometimes very useful to use

// Point
// ⚠️ (1) the function is created from a string
// ⚠️ (2) the function is not a closure(which means it cannot access its outer scope. It can only access the global scope.)

// syntax
let newFunc = new Function('a', 'b', 'return a+b');
console.log(newFunc(1, 2)); // 3

let hi = new Function(`console.log('Hi')`);
hi(); // Hi

// 💡 insight: it can be very useful in a case where
// - you know there will be a function that you will receive from, let's say, a server
// - but you don't know the exact code of the function yet
// - and you need to make it interact with the main script