// Callback Hell example - ✨ SOLUTION ✨
// 1. it is not common to request Backend to have a user's role(guest, admin, etc).
// it usually comes together with login.
// however, we have this as an exception for an example's sake.
// 2. since we don't have a backend now,
// we'll use setTimeout instead, to pretend we have a server.

class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === "ellie" && password === "teacher") ||
					(id === "dasom" && password === "coder")
				) {
					resolve(id);
				} else {
					reject(new Error("not Found"));
				}
			}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === "ellie") {
					resolve({ name: "ellie", role: "admin" });
				} else {
					reject(new Error("no access"));
				}
			}, 1000);
		});
	}
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
	.loginUser(id, password)
	.then(userStorage.getRoles)
	.then((user) => alert(`Hello! ${user.name}, You are ${user.role}`))
	.catch(console.log);
