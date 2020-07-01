"use strict";

// Promise is a JavaScript object for asynchronous operation.

// 📖 Study Point
// ㄴ 1. State: pending -> fulfilled or rejected
// ㄴ 2. Producer vs Consumer

// 1. Producer
// ❗️when a new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read files)
	console.log("doing something");
	setTimeout(() => {
		resolve("dasom");
		reject(new Error("no network"));
	}, 2000);
});
