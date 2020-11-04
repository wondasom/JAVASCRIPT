'use strict';

// Arrow Funtion
//(1) "this" amd Arrow Function
// One of the reasons of introducing Arrow Function was 
// - to alleviate scope complexities
// - and to make executing functions much more intuitive

// ⚠️ Traditional Function's default "this" === window
// ⚠️ Arrow Function does NOT default "this",
//    rather it executes in the scope where it is created!

let obj = {
	// does not create a new scope
	i: 10,
	// arrow function 
	a: () =>
		console.log(`(a) this: ${this}, this.i: ${this.i}, obj.i: ${obj.i}`),
	// classic function expression 
	b: function() {
		console.log(`(b) this: ${this}, this.i: ${this.i}, obj.i: ${obj.i}`);
	}
};

obj.a(); // (a) this: [object Window], this.is: undefined, obj.i: 10
obj.b(); // (a) this: [object Object], this.is: 10, obj.i: 10

// (2) call, apply and bind and Arrow Function
// they are not suitable for arrow funtions