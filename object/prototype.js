'use strict';

// ✅ Prototypal Inheritance
// ㄴ very useful in a situation when we want to take something and extend it.

// 1. [[Prototype]]
// - a special property
// - either 'null'
// - or a 'reference to another object(a prototype)'
// The property [[Prototype]] is internal and hidden, but we can set it in many ways
// One of them is to use '__proto__'

let dogs = {
	run: true,
	cute: true,
	love() {
		console.log('Dogs love their humans');
	}
};

// 1-1. set [[Prototype]] using __proto__
let dukong = {
	sassy: true,
	__proto__: dogs // this sets dukong.[[Prototype]] = dogs
};
let fur = {
	color: 'white'
};
fur.__proto__ = dukong; // sets fur.[[Prototype]] = dukong
console.log(dukong.run); // true
console.log(dukong.cute); // true
dukong.love(); // Dogs love their humans
console.log(fur.cute); // true

// ⚠️ __proto__ is not the same as the internal [[Prototype]] property
// - it is a historical getter/setter for [[Prototype]]

// 1-2. Writing a property does not use prototype
// - The prototype is only used for reading properties
// - Writing & deleting work directly in the object, not with the prototype
dukong.love = function() {
	console.log('I love Dasom!');
};
dukong.love(); // I love Dasom!

// 1-3. prototpye does not affect 'this'
let animal = {
	move() {
		if (!this.isSleeping) {
			console.log(`I'm moving!`);
		}
	},
	sleep() {
		this.isSleeping = true;
	}
};
dukong.__proto__ = animal;
dukong.sleep();
console.log(dukong.isSleeping); // true
console.log(animal.isSleeping); // undefined (because 'isSleeping' is not in the prototype)

// 1-4. Object.keys 🆚 for...in
// - Object.keys 👉🏼 returns own keys
// - for...in 👉🏼 loops over both own and INHERITED keys
let brownDog = {
	isBrown: true
};
let jayul = {
	cute: true,
	__proto__: brownDog
};
console.log(Object.keys(jayul)); // ["cute"]
for (let prop in jayul) console.log(prop); // cute, isBrown

// if we want to exclude inherited properties, while using for..in,
// we can do that by using a built-in method 'obj.hasOwnProperty(key)'
for (let prop in jayul) {
	let isOwn = jayul.hasOwnProperty(prop);
	if (isOwn) {
		console.log(`Own: ${prop}`);
	} else {
		console.log(`Inherited: ${prop}`);
	}
}
// Own: cute
// Inherited: isBrown

// ✅ F.prototype
let human = {
	thinks: true
};
function Person(name) {
	this.name = name;
}
Person.prototype = human;
let dasom = new Person('Dasom'); // dasom.__proto__ == human
console.log(dasom.thinks); // true
// Setting Person.prototype = human means
// - when a new Person is create,
// - assign its [[Prototype]] to human

// ⚠️ JavaScript itselt does not ensure the right "constructor" value
// it exsits in the default "prototype" for functions
// in particular, if we replace the default prototype as a whole,
// then there will be no "constructor" in it.
function Individual() {}
Individual.prototype = {
	hasFreedom: true
};
let jiyoung = new Individual();
console.log(jiyoung.constructor === Individual); // false
console.log(jiyoung.constructor); // f Object(){[native code]}
