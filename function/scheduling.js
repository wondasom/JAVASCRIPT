'use strict';

// Scheduling
// ㄴ exeute functions later!(=scheduling a call)
// - setTimeout, setInterval

// (1) setTimeout
// ㄴ (interval of time) -> run function
// examples
function greeting() {
	console.log('Hi!');
}
setTimeout(greeting, 1000);

function greetingToYou(name) {
	console.log(`Hi, ${name}!`);
}
setTimeout(greetingToYou, 1000, 'Dasom');

// ⚠️ If the first argument is a string, not a function, then JavaScript creates a function from it
setTimeout('console.log(`like this`)', 1000); // like this

// ⚠️ Pass a function, not RUN it
function passFunc(way) {
	console.log(`this is ${way}.`);
}
setTimeout(passFunc, 2000, 'Right'); // this is Right
setTimeout(passFunc(), 2000, 'Wrong'); // (wrong way) this is undefined.

// (2) canceling with clearTimeout
// - time identifier: (number) something a call to setTimeout returns
// we can use this time identifier to cancel the execution
let timerId = setTimeout(() => console.log('soemthing happend?'), 1000);
console.log(timerId); // 6
clearTimeout(timerId); // it cancel the execution of console.log('something happened?')
console.log(timerId); // 6

// (2) setInterval
// ㄴ (interval of time) -> run function -> (interval of time) -> run function ... repeat
// to stop further calls, we have to call clearInterval(timerId)
let timerIdForInterval = setInterval(
	() => console.log('interval happening!'),
	2000
);
setTimeout(() => {
	clearInterval(timerIdForInterval);
	console.log('stop');
}, 6000);
