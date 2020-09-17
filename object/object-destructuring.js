'use strict';

// Object Destructuring

// example(1) - basic syntax
let menu = {
	title: 'Kimbap',
	price: 6,
	preference: 10
};
let { title, price, preference } = menu;
console.log(title); // Kimbap
console.log(price); // 6
console.log(preference); // 10
// console.log(menu.title) 👉🏼 Kimbap
// console.log(menu.price) 👉🏼 6
// console.log(menu.preference) 👉🏼 10
// ㄴ properties menu.title, menu.price, menu.preference are assigned to the corresponding variables
// ㄴ the order does not matter, the below also works
// let { price, title, preference } = menu;

// example(2) - to assign a property to a variable with another name
let { title: t, price: p, preference: pre } = menu;
console.log(t); // Kimbap
console.log(p); // 6
console.log(pre); // 10

// example(3) - setting default values
let menu2 = {
	name: 'ramyeon'
};
let { cost = 4, spicy = 6, name } = menu2;
console.log(cost); // 4
console.log(spicy); // 6
console.log(name); // ramyeon

// example(4) - combining colon and equality
let student = {
	name: 'Dasom'
};
let { lastName: last = 'Won', age = 27 } = student;
console.log(last); // Won
console.log(age); // 27
console.log(student.name); // Dasom

// example(5) - extracting specific property
let skills = {
	languages: 3,
	programmingLanguages: 5,
	designSkills: 4
};
let { designSkills } = skills;
console.log(designSkills); // 4

// example(5) - ✨ the rest pattern
let friends = {
	number: 15,
	city: 'Seoul',
	love: 100
};
let { city, ...rest } = friends;
console.log(city); // Seoul
console.log(friends.number); // 15
console.log(friends.love); // 100
