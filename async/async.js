// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
	// do network request in 10 secs...
	return "dasom";
}
const user = fetchUser();
user.then(console.log);
console.log(user);

