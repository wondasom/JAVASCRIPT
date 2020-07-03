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

// 2. await ✨
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(2000);
	return "🍎";
}
async function getBanana() {
	await delay(1000);
	return "🍌";
}

async function pickFruit() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

pickFruit().then(console.log);

