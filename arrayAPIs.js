// Q1. make a string out of an array
{
	const fruits = ["apple", "banana", "orange"];
	// const q1 = fruits.toString(); ❌
	const q1 = fruits.join(" | "); // ⭕️
	console.log(`Q1.`);
	console.log(q1);
}

// Q2. make an array out of a string
{
	const fruits = "🍎, 🥝, 🍌, 🍒";
	// const q2 = new Array(fruits); ❌
	const q2 = fruits.split(","); // ⭕️
	console.log(`Q2.`);
	console.log(q2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const q3 = array.reverse(); // ⭕️
	console.log(`Q3.`);
	console.log(q3); // -> [5, 4, 3, 2, 1]
	// console.log(array); -> [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	// const q4 = array.splice(2); ❌
	const q4 = array.slice(2, 5); // ⭕️
	console.log(`Q4.`);
	console.log(q4); // [3, 4, 5]
	// splice vs slice❗️
	// ㄴsplice:
	//     1. returns the REMOVED item(s) in an array
	//     2. CHANGES the original array
	// ㄴslice:
	//     1. returns the SELECTED element(s) in an array, as a NEW array object.
	//     2. DOES NOT change the original array
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student("A", 29, true, 45),
	new Student("B", 28, false, 80),
	new Student("C", 30, true, 90),
	new Student("D", 40, false, 66),
	new Student("E", 18, true, 88)
];

// Q5. find a student with the score 90
{
	// const q5 = students.filter((person) => (person.score = 90)); ❌
	const q5 = students.find((student) => student.score === 90); // ⭕️
	console.log(`Q5.`);
	console.log(q5);
}

// Q6. make an array of enrolled students
{
	const q6 = [];
	q6.push(students.filter((person) => person.enrolled)); // ⭕️
	console.log(`Q6.`);
	console.log(q6);
	console.log(`The original array`);
	console.log(students); // same with the original
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const q7 = students.map((student) => student.score); // ⭕️
	console.log(`Q7.`);
	console.log(q7);
	console.log(`The original array`);
	console.log(students); // same with the original
}

// Q8. check if there is a student with the score lower than 50
{
	const q8 = students.some((student) => student.score < 50); // ⭕️
	console.log(`Q8.`);
	console.log(
		q8
			? "YES. There is at least one person with the score below 50"
			: "NO. There is no one with the score below 50"
	);
}

// Q9. compute students' average score
{
	// const sum = students.reduce((prev, curr) => {
	// 	return prev.score + curr.score;
	// }, ); ❌

	const q9 =
		students.reduce((prev, curr) => prev + curr.score, 0) / students.length;
	// ⭕️
	console.log(`Q9.`);
	console.log(q9);
	console.log(`The original array`);
	console.log(students); // same with the original
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const q10 = students.map((student) => student.score).join(); // ⭕️
	console.log(`Q10.`);
	console.log(q10);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	// const bonus = students.map((student) => student.score).sort() ❌
	const bonus = students
		.map((student) => student.score)
		.sort((a, b) => a - b)
		.join(); // ⭕️
	console.log(`Bonus Question.`);
	console.log(bonus);
	console.log(`The original array`);
	console.log(students); // same with the original
}
