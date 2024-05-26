// Q16
// Seeing the World: Think of at least five places in the world you’d like to visit.
// * Store the locations in a array. Make sure the array is not in alphabetical order.
let Places: string[] = ["najaf", "Madina", "Karbala", "makkah"]
// * Print your array in its original order.
console.log("Original Order:", Places)
// * Print your array in alphabetical order without modifying the actual list.
console.log("Alphabatic Order:", [...Places].sort())
// * Show that your array is still in its original order by printing it.
console.log("Original Order:", Places)
// * Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabatic Order:", [...Places].sort().reverse())
// * Show that your array is still in its original order by printing it again.
console.log("Original Order:", Places)
// * Reverse the order of your list. Print the array to show that its order has changed.
Places.reverse()
console.log(Places)
// * Reverse the order of your list again. Print the list to show it’s back to its original order.
Places.reverse()
console.log(Places)
// * Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Places.sort()
console.log(Places)
// * Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
Places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", Places);

//Q17
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains: string[] = ["Everest", "K2", "Kangchenjunga"];

mountains.forEach(mountain => console.log(mountain));

// Q18
// Example TypeScript Object structure
let person = {
    first_name: "Mehak",
    last_name: "Hamid",
    age: 25,
    city: "Karachi"}
console.log(person);

// Q19
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let names: string[] = ["Alice", "Bob", "Charlie"];

    console.log(names[3]);
    console.log("IndexError: list index out of range");
    console.log(names[2]);
//Q20
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // false

let age = 25;

console.log("Is age > 20? I predict True.");
console.log(age > 20); // true

console.log("Is age < 20? I predict False.");
console.log(age < 20); // false

console.log("Is age == 25? I predict True.");
console.log(age == 25); // true

console.log("Is age != 25? I predict False.");
console.log(age != 25); // false

console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // true

console.log("Is age <= 18? I predict False.");
console.log(age <= 18); // false

let fruit = 'apple';

console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple'); // true

console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana'); // false

console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple'); // true

console.log("Is fruit.toLowerCase() == 'APPLE'? I predict False.");
console.log(fruit.toLowerCase() == 'APPLE'); // false




















