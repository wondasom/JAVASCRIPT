"use strict";

// JavaScript is synchronous
// Execute the code block in order after hoisting
// *hoisting: putting function/variable declarations into memory BEFORE it executes any code segment

console.log(`1`); // sync
setTimeout(() => console.log("2"), 1000);
// setTimeout is a browser API -> a request to a browser, async
console.log(`3`); // sync
// result -> 1 3 2

// 1. Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately(() => console.log("hello")); // sync

// 2. Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // async



// Callback Hell example
// 1. it is not common to request Backend to have user's role(guest, admin etc).
// it usually comes together with login.
// however, we have this as an exception for a example's sake.
// 2. since we don't have a backend now,
// we'll use setTimeout instead, to pretend we have a server.
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === "ellie" && password === "teacher") ||
				(id === "dasom" && password === "coder")
			) {
				onSuccess(id);
			} else {
				onError(new Error("not Found"));
			}
		}, 2000);
	}
	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === "ellie") {
				onSuccess({ name: "ellie", role: "admin" });
			} else {
				onError(new Error("no access"));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
	id,
	password,
	(user) => {
		userStorage.getRoles(
			user,
			(userWithRole) => {
				alert(
					`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
				);
			},
			(error) => {
				console.log(error);
			}
		);
	},
	(error) => {
		console.log(error);
	}
);
