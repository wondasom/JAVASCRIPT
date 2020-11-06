'use strict';

// Property flags and descriptors 🚩
// ㄴ Object can store properties with configuration options.

// 1. Property flags
// - Object properties, a value, have three special attributes(= "flags")
// - Generally, these flags do not show up.
// - When we create a property "the usual way", all of the flags are set to true
// - But we can change them if necessary
// (1) ✍🏼 writable
//  ㄴ if true, the value can be changed, otherwise it is read-only
// (2) ➰ enumerable
//  ㄴ if true, then the object is listed in loops, otherwise not listed
// (3) 🗑 configurable
//  ㄴ if true, it can be deleted and these attributes can be modified, otherwise not

// 2. How to query the flags
// ✅ Object.getOwnPropertyDescriptor(obj, propertyName)
let dasom = {
	name: 'Dasom'
};
let descriptor = Object.getOwnPropertyDescriptor(dasom, 'name');
console.log(JSON.stringify(descriptor, null, 2));
// property descriptor:
// {
//   "value": "Dasom",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }

// 3. If it was not created by "normally" - all flags are false
let myDog = {};
Object.defineProperty(myDog, 'name', {
	value: 'Dukong'
});
let myDogDescriptor = Object.getOwnPropertyDescriptor(myDog, 'name');
console.log(JSON.stringify(myDogDescriptor, null, 2));
// {
//   "value": "Dukong",
//   "writable": false, 💥
//   "enumerable": false, 💥
//   "configurable": false 💥
// }
// Compared with the example above('user') that was "normally created",
// myDog's flags are all false

// 4. How to change the flags
// ✅ Object.defineProperty(obj, propertyName, descriptor)
// 4-1. Non-writable
Object.defineProperty(dasom, 'name', {
	writable: false
});
// dasom.name = 'Won'
// ☝🏼 Uncaught TypeError: Cannot assign to read only property 'name' of object
// ⚠️ Errors only appear in strict mode
