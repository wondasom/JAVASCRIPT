// 1. Shorthand property names
// 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
{
	const name = 'Dasom';
	const pet = 'Dukong';

	// 💩
	const user1 = {
		name: name,
		pet: pet
	};

	// ✨
	const user2 = {
		name,
		pet
	};
}

// 2. Destructuring Assignment
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
{
	// for object
	const dasom = {
		name: 'Dasom',
		job: 'engineer'
	};

	// 💩
	{
		const name = dasom.name;
		const job = dasom.job;
		console.log(name, job);
	}

	// ✨
	{
		// as same names
		const { name, job } = dasom;
		console.log(name, job);

		// as different names
		const { name: userName, job: userJob } = dasom;
		console.log(userName, userJob);
	}

	// for array
	const veggies = ['🥒', '🍠', '🥕'];

	// 💩
	{
		const first = veggies[0];
		const second = veggies[1];
		console.log(first, second);
	}
	// ✨
	{
		const [first, second, ...rest] = veggies;
		console.log(first, second, rest);
	}
}

// 3. Spread syntax - object/array copy & array concatenation, object merge
// ⚠️ Shallow copy(only references are copied)
// 🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
{
	const obj1 = { key1: 'value1' };
	const obj2 = { key2: 'value2' };
	const arr = [obj1, obj2];

	// array copy
	const arrCopy = [...arr];
	// ⚠️ Since a spread operator only copies the references,
	obj1.key1 = 'new value1';
	console.log(obj1.key1); // new value1
	console.log(arr); // 👈🏼 it is affected
	console.log(arrCopy); // 👈🏼 it is affected, too!

	// object copy
	const obj3 = { ...obj1 };
	const arrCopyAndMore = [...arr, obj3];
	console.log(arrCopyAndMore);

	// array concatenation
	const animals1 = ['🦖', '🦦'];
	const animals2 = ['🦈', '🦆'];
	const allAnimals = [...animals1, ...animals2];
	console.log(allAnimals);

	// object merge
	const dog1 = { dog1: '🦮' };
	const dog2 = { dog2: '🐕‍🦺' };
	const dogs = { ...dog1, ...dog2 };
	console.log(dogs);
	// ⚠️ if the names of the object key are same, the latter one overlap the former ones
}
console.clear();

// 4. Default parameters
// Default funtion parameters allow named parameters to be initialized with default values if no value or undefined is passed.
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Functions/Default_parameters
{
	// 💩
	{
		function printMessage(message) {
			console.log(message);
		}
		printMessage('Hi!');
		printMessage(); // undefined
	}

	// ✨
	{
		function printMessage(message = 'Hi!') {
			console.log(message);
		}
		printMessage('Hi!'); // Hi!
		printMessage(); // Hi!
	}
}

// 5. Termary operator (Conditional operator)
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
{
	const isDog = true;

	// 💩
	{
		let component;
		if (isDog) {
			component = '🦮';
		} else {
			component = '🐈';
		}
		console.log(component);
	}

	// ✨
	{
		const component = isDog ? '🦮' : '🐈';
		console.log(component);
	}
}

// 6. Template literals
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Template_literals
{
	const weather = '🌤';
	const temperature = '24°C';

	//💩
	console.log(
		"Today's weather is " +
			weather +
			',' +
			' and the temperature is ' +
			temperature +
			'.'
	);

	// ✨
	console.log(
		`Today's weather is ${weather}, and the temperature is ${temperature}.`
	);
}
