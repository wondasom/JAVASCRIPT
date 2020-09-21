// ⏳ Date and Time

// Date: built-in object
// ㄴ provides methods for date/time management

// 1. Creation
// (1) without arguments: current date and time
let now1 = new Date();
console.log(now1);
// (2) with arguments
// new Date(timestamp)
// ㄴ timestamp: an integer number representing the number of milliseconds that has passed since the beginning of 1970
// ㄴ date before 1970 has netagive timestamp
let date1 = new Date(0);
console.log(date1); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)
let before1970 = new Date(-24 * 3600 * 1000);
console.log(before1970); // Wed Dec 31 1969 01:00:00 GMT+0100 (Central European Standard Time)
// (3) with string arguments
let date2 = new Date('2020-01-01');
console.log(date2); // Wed Jan 01 2020 01:00:00 GMT+0100 (Central European Standard Time)
// (4) with specific arguments
// ㄴ new Date(year, month, date, hours, minutes, seconds, ms)
// ㄴ year and month is mandatory
// ㄴ conditions
//   ㄴ (4.1) year: 4 digits
//   ㄴ (4.2) month: starts with 0(Jan) to 11(Dec)
//   ㄴ (4.3) date: actual date of them month, if absent, assumed to be 1
//   ㄴ (4.4) hours, minutes, seconds, ms: if absent, assumed to be 0
let date3 = new Date(2020, 8, 21, 1, 2, 3, 4);
console.log(date3); // Mon Sep 21 2020 01:02:03 GMT+0200 (Central European Summer Time)

// 2. Access Date Components
// all these methods below return the components relative to the 🏡 local time zone
// (1) getFullYear() - ⚠️ NOT getYear()
// (2) getMonth()
// (3) getDate()
// (4) getHours, getMinutes(), getSeconds(), getMlliseconds()
// (5) getDay(): starts from 0(Sun) to 6(Sat)
let now2 = new Date();
console.log(now2);
console.log(now2.getFullYear());
console.log(now2.getDay());
console.log(now2.getHours());

// 3. Setting Date Components
// the methods below allow to set date/time components
// (1) setFullYear(year, [month], [date])
// (2) setMonth(month,[date])
// (3) setDate(Date)
// (4) setHours(hour, [min], [sec], [ms])
// (5) setMinutes(min, [sec], [ms])
// (6) setMilliseconds(ms)
// (7) setTime(milliseconds): sets the whole date by milliseconds since 01.01.1970 UTC

// 4. Autocorrection
let weirddate = new Date(2020, 11, 32); // 32th of December 2020??
console.log(weirddate); // ✅ Fri Jan 01 2021 00:00:00 GMT+0100 (Central European Standrad Time)

// 5. Date.now()
// ㄴ it is semantically equivalent to new Date().getTime(), but it does not create an intermediate Date object
// ㄴ so it is faster and lighter, and does not put pressure on garbage collection
// ㄴ mostly used for convenience or when performance matters specifically
let now3 = Date.now();
console.log(now3); // number in milliseconds
let start = Date.now();
for (let i = 0; i < 1000000; i++) {
	let doSomething = i * i * i;
}
let end = Date.now();
console.log(`the loop took ${end - start} milliseconds`); // the loop took 7 milliseconds

// 6. Date.parse from a String
// the method Date.parse(str) can read a date from a string
// ㄴ format: YYYY-MM-DDTHH:mm:ss.sssZ
//   ㄴ YYYY-MM-DD: year-month-date
//   ㄴ T: delimiter
//   ㄴ HH:mm:ss.sss: hours, minutes, seconds, and milliseconds
//   ㄴ Z: time zone
let date4 = Date.parse('2020-09-21T11:00:50.123-07:00');
console.log(date4); // 1600711250123

