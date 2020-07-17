"use strict";

// Array 🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
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
fruits.forEach((fruit) => console.log("(c)" + fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍒", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item from the beginning
fruits.unshift("🍇", "🍉");
console.log(fruits);

// remove an item from the beginning
fruits.shift();
console.log(fruits);

//❗️note! shift, unshift are SLOWER than pop, push

// splice: remove an item by index position
fruits.push("🍓", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍒", "🍊");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// console.clear();
console.log(fruits);

// 5. Searching
// find the index

// indexOf
console.log(fruits.indexOf("🍉")); // 0
console.log(fruits.indexOf("watermelon")); // -1

// includes
console.log(fruits.includes("🍉")); // true
console.log(fruits.includes("watermelon")); // false

// lastIndexOf
// console.clear();
fruits.push("🍉");
console.log(fruits); // ["🍉", "🍒", "🍊", "🍓", "🍋", "🍉"]
console.log(fruits.indexOf("🍉")); // 0
console.log(fruits.lastIndexOf("🍉")); // 5
