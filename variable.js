// 1. Use strict
// added in ES 5
// use this for Vanila Javascript
// It is not a statement, but a literal expression,
// ignored by earlier versions of JavaScript.
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.

// Benifits of using use strict:
// ㄴ Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
// ㄴ Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
// ㄴ Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
// ㄴ It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
// ㄴ It disables features that are confusing or poorly thought out.
// ㄴ Strict mode makes it easier to write “secure” JavaScript.
"use strict";

// 2. Variable, rw(read/write)
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

// 3. Constant - immutable, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//    - security
//    - thread safety
//    - reduce human mistakes

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
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ (2**53)
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
