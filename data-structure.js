// Data Structure

// 1. Object
// - for storing keyed collections(key should be string type)

// 2. Array
// - for storing ordered collections

// 3. Map
// - for storing keyed collections, just like objects
// but the main difference is that Map allows keys of any type
// - methods and properties
// ㄴ new Map(): creates the map
// ㄴ map.set(key, value): stores the value by the key
// ㄴ map.get(key): returns the value by the key, undefined if key does not exist in map
// ㄴ map.has(key): returns true if the key exists, false otherwise
// ㄴ map.delete(key): removes the value by the key
// ㄴ map.clear(): removes everything from the map
// ㄴ map.size: returns the current element count
let map = new Map();
map.set('1', 'value1'); // a string key
map.set(1, 'value2'); // a numeric key
map.set(true, 'value3'); // a boolean key
console.log(map.get('1')); // value1
console.log(map.get(1)); // value2
console.log(map.get(true)); // value3
console.log(map.size); // 3
// - map chaining
let map2 = new Map();
map2
	.set(1, 'str1')
	.set(2, 'str2')
	.set(3, 'str3');

// 4. Set
// - for storing a special type collection: set of values(without keys), where each value may occur only ocne
// - methods and properties
// ㄴ new Set(iterable): creates the set, and if and iterable object is provided(usually an array), copies values from it into the set
// ㄴ set.add(value): adds a value, returns the set itself
// ㄴ set.delete(value): removes the value, returns true if value existed at the moment of the call, otherwise false
// ㄴ set.has(value): returns true if the value exists in the set, otherwise false
// ㄴ set.clear(): removes everything from the set
// ㄴ set.size: is the element count
let set = new Set();
let dasom = { name: 'dasom' };
let brie = { name: 'brie' };
let roxane = { name: 'roxane' };
set.add(dasom);
set.add(brie);
set.add(roxane);
set.add(dasom); // -- does not count becuase it is not unique
set.add(roxane); // -- does not count becuase it is not unique
console.log(set.size); // 3
