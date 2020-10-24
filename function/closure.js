// Closure 🔐
// - function can access to outer variables(global scope variable)
// - but what happens
//   ㄴ (1) if the outer variable changes after a function is creatd?
//   - will it get the updated(newer) values or the old(original) one?
//   ㄴ (2) if the function is passed as a parameter and called from another place(as a callback function),
//   - will it get access to the global variable at the new place?
// ex)
let menu = 'Mandu 🥟';
function lunchMenu() {
	console.log(`I want to have ${menu} for lunch!`);
}
menu = 'Bibimbap 🍚';
lunchMenu(); // I want to have Bibimbap 🍚 for lunch!

// to really understand this concept, you might need to have solid understanding on Lexical Environment

// 👉🏼 According to JavaScript Info, a closure is
// "a function that remembers its outer variables and can access them"
// "In JavaSCript, all functions care naturally closures - except new Function syntax"

// 👉🏼 According to MDN, a closure is
// "the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time."

// Q: "What is a closure?"
// A-1.🙋🏻‍♀️: "A closure is a combination of a function bundled together,
// which gives you access to the outer function's scope from an inner function"
// A-2.🙋🏻‍♀️: "A closure is a function that 💡 remembers its outer variables and can ✨ access them"

// Garbage Collection
// Memory is kept only when a object is reachable(when it is still there)
// if the function call finishes, a lexical environment is removed from memory

// ⚠️ Usually, a function automatically is a closure
// except for a new Function syntax