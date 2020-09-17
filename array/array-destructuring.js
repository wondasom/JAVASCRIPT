'use strict';

// Array Destructuring
// :destructuring assignment

// example(1)
let arr = ['dasom', 'won'];
let [firstName, lastName] = arr;
console.log(firstName); // dasom
console.log(lastName); // won

// example(2) - combined with split method(or other array-returning methods)
let [city, country] = 'Berlin Germany'.split(' ');
console.log(city); // Berlin
console.log(country); // Germany

// ⚠️ 'destructuring' =/= 'destructive'
// ㄴ destructuring assignment 'destructurizes' by COPYING items into variables
// ㄴ so the array itself is NOT MODIFIED
// ㄴ it is just a shorter way of the below
// let arr = ['dasom', 'won'];
// let firstName = arr[0];
// let lastName = arr[1];

// example(3) - you can ignore elements using commas
let [first, , third] = ['dasom', 'taemin', 'eric'];
console.log(first); // dasom
console.log(third); // eric

// example(4) - ⚠️ Actually... it works with any iterable, not only with arrays!(on the right side)
let [one, two, three] = '123';
console.log([one, two, three]); // ["1", "2", "3"]
console.log([one, two, three][0]); // 1
console.log([one, two, three][1]); // 2
console.log([one, two, three][2]); // 3

// example(5) - ⚠️ you can assign anything at the left side
let user = {};
[user.name, user.surname] = 'Dasom Won'.split(' ');
console.log(user.name); // Dasom
console.log(user.surname); // Won

// example(6) - looping with .entries()
// Object.entries(): this object method makes an object into an array
let coder = { name: 'Dasom', age: 27 };
// loop over keys-and-values
for (let [key, value] of Object.entries(coder)) {
	console.log(`${key}:${value}`);
}
// name:Dasom age:27

// example(7) - swapping variables
let guest = 'Jihee';
let admin = 'Dasom';
[guest, admin] = [admin, guest];
console.log(guest); // Dasom
console.log(admin); // Jihee

// example(8) - ⚡️ the rest operator '...'
// if we want to get not just the first value, but also the rest
// we can add one more parameter that gets the rest, using three dots
let [name1, name2, ...rest] = ['Dasom', 'Jihee', 'Juyoung', 'Jeonghyun'];
console.log(name1); // Dasom
console.log(name2); // Jihee
console.log(rest); // ["Juyoung", "Jeonghyun"]
console.log(rest[0]); // Juyoung
console.log(rest[1]); // Jeonghyun

// example(9) - setting default values
let [skill, level] = [];
console.log(skill); // undefined
console.log(level); // undefined
let [lang = 'Eng', langLevel = 90] = [];
console.log(lang); // Eng
console.log(langLevel); // 90
