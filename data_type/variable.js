// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
"use strict";

// 2. Variable
// let (added in ES6) - mutable
let globalName = "glbal name";
{
	let name = "dasom";
	console.log(name);
	name = "hello";
	console.log(name);
	console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

// 3. Constant - immutable
// favor immutable data type always for a few reasons:
//    - security
//    - thread safety
//    - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(=functions can be variables too)

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

// number - special numeric values = infinity, -infinity, NaN
// always validate the number before going to computation
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) - available in Chrome, Firefox
const bigInt = 1234567890123456789012345678901234567890n; // over (-2*53) ~ (2*53)
console.log(`value: ${bigInt} type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting} type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob} type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead} type: ${typeof canRead}`);
console.log(`value: ${test} type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing} type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x} type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // true
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description} type: ${typeof symbol1}`);

// object, real-life object, data structure
const dasom = { name: "dasom", age: "27" };
dasom.age = 20;

// 5. Dynamic typing: dynamically typed language (type change occuring during the runtime)
// cf. C or Java: statically typed language
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text} type: ${typeof text}`);
text = 1;
console.log(`value: ${text} type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text} type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text} type: ${typeof text}`);
console.log(text.charAt(0)); // error
