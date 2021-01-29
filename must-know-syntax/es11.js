// 1. Optional chaining
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Optional_chaining
{
	const person1 = {
		name: 'Dasom',
		job: {
			title: 'Frontend Engineer',
			department: {
				name: 'Engineering'
			}
		}
	};

	const person2 = {
		name: 'Brie'
	};

	// 💩 (1)
	{
		function printDepartment(person) {
			console.log(person.job.department.name);
		}
		printDepartment(person1); // Engineering
		// printDepartment(person2); ❌ Uncaught TypeError
	}

	// 💩 (2)
	{
		function printDepartment(person) {
			console.log(
				person.job
					? person.job.department
						? person.job.department.name
						: undefined
					: undefined
			);
		}
		printDepartment(person1); // Engineering
		printDepartment(person2); // undefined
	}

	// 💩 (3)
	{
		function printDepartment(person) {
			console.log(
				person.job && person.job.department && person.job.department.name
			);
		}
		printDepartment(person1); // Engineering
		printDepartment(person2); // undefined
	}

	// ✨
	{
		function printDepartment(person) {
			console.log(person.job?.department?.name);
		}
		printDepartment(person1); // Engineering
		printDepartment(person2); // undefined
	}
}

// 2. Nullish coalescing operator
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand
// when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// 🔗 https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
{
	// Logical OR operator
	// false: false(bollean), ''(empty string), 0, null, undefined
	{
		const name = 'Dasom';
		const userName = name || 'Guest';
		console.log(userName);
	}
	// 💩 
	{
		const name = '';
		const userName = name || 'Guest';
    console.log(userName); // Guest
    
    const number = 0;
		const message = number || 'undefined';
		console.log(message); // undefined
	}

	// ✨
	{
		const name = '';
		const userName = name ?? 'Guest';
		console.log(userName); // empty string

		const number = 0;
		const message = number ?? 'undefined';
		console.log(message); // 0
	}
}
