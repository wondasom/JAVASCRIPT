'use strict';

// Decorators and forwarding
// - since JavaScript is incredibily flexible with functions, we can forward and decorate function calls

// (1) Decorator (General practice to functions)
// ㄴ a special function that takes another funtion and alter its behavior(simply put, a container function)
// - imagine a situation where a function is really heavy so you want to minimize the number of the function calls
// - what we can do here is to make cache(memory) of the function call
// - and in doing so, we can use decorator

function heavyFunc(x) {
	// so heavy calculation!!
	console.log(`Called with ${x}`);
	return x;
}

function cachingDecorator(func) {
	let cache = new Map();
	return function(x) {
		if (cache.has(x)) {
			return cache.get(x);
		}
		let result = func(x);
		cache.set(x, result);
		return result;
	};
}
heavyFunc = cachingDecorator(heavyFunc);
console.log(heavyFunc('first call'));
console.log(heavyFunc('second call'));
// The 'wrapped' function(heavyFunc) still does the same job
// It just got a caching aspect added to its original behavior

// ✅ Benefits of using a separate caching container(wrapper) instead of altering the heavyFunc itself
// ㄴ 1. The cachingDecorator is re-usable
// ㄴ 2. Since the logic of the decorate is separate, the complexity is not added to the heavyFunc
// ㄴ 3. We can add(combine) multiple wrappers(decorators) if necessary

// (2) Decorator (Practice to object methods)
// - Unfortunately, we cannot use the same practice to object methods.
// - it is because of the scope('this')
// Solutions: 1. call() 2. apply()
//  ㄴ✨difference between call() & apply()
//  - call() takes arguments separately
//  - apply() takes arguments as an array
let workerObj = {
	randomMethod() {
		return 1;
	},
	heavyFunc(x) {
		console.log(`Called with ${x}`);
		return x * this.randomMethod();
	}
};
function cachingDecoratorForOjb(func) {
	let cache = new Map();
	return function(x) {
		if (cache.has(x)) {
			return cache.get(x);
		}
		let result = func.call(this, x);
		cache.set(x, result);
		return result;
	};
}
workerObj.heavyFunc = cachingDecoratorForOjb(workerObj.heavyFunc);
console.log(workerObj.heavyFunc(0));
console.log(workerObj.heavyFunc(1));
console.log(workerObj.heavyFunc(2));
