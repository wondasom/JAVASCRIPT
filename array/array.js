'use strict';

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[fruits.length - 1]); // 🍌

// 3. Looping over an array
// print all fruits
// (a) for
for (let i = 0; i < fruits.length; i++) {
	console.log(`(a)` + fruits[i]);
}

//(b) for of
for (let fruit of fruits) {
	console.log(`(b)` + fruit);
}

// (c) forEach
fruits.forEach((fruit) => console.log('(c)' + fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍒', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item from the beginning
fruits.unshift('🍇', '🍉');
console.log(fruits);

// remove an item from the beginning
fruits.shift();
console.log(fruits);

//❗️note! shift, unshift are SLOWER than pop, push

// splice: remove an item by index position
// example (1)
console.log('splice');
fruits.push('🍓', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍒', '🍊');
console.log(fruits);
// example (2)
let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", 'dance');
console.log(arr); // now ["Let's", "dance", "right", "now"]
// example (3)
// ❗️splice returns the array of removed elements ️❗️
let arr3 = [0, 1, 2, 3, 4];
let arr4 = arr3.splice(0, 2);
console.log(arr3); // [2, 3, 4] result after splice
console.log(arr4); // [0, 1] ❗️removed elements
// example (4)
// The splice method is lso able to insert the elements without any removals.
// For that, we need to set deleteCount to 0
let arr5 = ['I', 'study', 'JavaScript'];
console.log(arr5.splice(2, 0, 'a programming language')); // 'I', 'study', 'a programming language'

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// console.clear();
console.log(fruits);

// 5. Searching
// find the index

// indexOf
console.log(fruits.indexOf('🍉')); // 0
console.log(fruits.indexOf('watermelon')); // -1

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('watermelon')); // false

// lastIndexOf
// console.clear();
fruits.push('🍉');
console.log(fruits); // ["🍉", "🍒", "🍊", "🍓", "🍋", "🍉"]
console.log(fruits.indexOf('🍉')); // 0
console.log(fruits.lastIndexOf('🍉')); // 5

// find
// Imagine we have an array of objects.
// If we need to find an object with the specific condition
// we can use arr.find(fn) method
let users = [
	{ id: 1, name: 'Danny' },
	{ id: 2, name: 'John' },
	{ id: 3, name: 'Mike' }
];
let user = users.find((item) => item.id === 1);
console.log(user.name); // Danny


// 6. Transform an array
// map(func) ✨
// it calls the function for each element of the array and returns the array of results
// sort(func)
// reverse()
// split/join
// reduce(func, initial)




const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);