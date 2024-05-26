"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q21
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// * Tests for equality and inequality with strings
let city = 'New York';
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York'); // true
console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles'); // true
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles'); // false
console.log("Is city != 'New York'? I predict False.");
console.log(city != 'New York'); // false
// * Tests using the lower case function
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // true
console.log("Is city.toLowerCase() == 'NEW YORK'? I predict False.");
console.log(city.toLowerCase() == 'NEW YORK'); // false
// * Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 10;
console.log("Is num == 10? I predict True.");
console.log(num == 10); // true
console.log("Is num != 5? I predict True.");
console.log(num != 5); // true
console.log("Is num > 5? I predict True.");
console.log(num > 5); // true
console.log("Is num < 20? I predict True.");
console.log(num < 20); // true
console.log("Is num >= 10? I predict True.");
console.log(num >= 10); // true
console.log("Is num <= 5? I predict False.");
console.log(num <= 5); // false
console.log("Is num < 10? I predict False.");
console.log(num < 10); // false
// * Tests using "and" and "or" operators
console.log("Is num > 5 && num < 15? I predict True.");
console.log(num > 5 && num < 15); // true
console.log("Is num < 5 || num > 15? I predict False.");
console.log(num < 5 || num > 15); // false
// * Test whether an item is in a array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // true
console.log("Is 'grape' in fruits? I predict False.");
// * Test whether an item is not in a array
console.log(fruits.includes('grape')); // false
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape')); // true
console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana')); // false
//Q22
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// * Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("You just earned 5 points!");
}
// * Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
alien_color = 'red';
if (alien_color == 'green') {
    // No output
}
//Q23
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// * If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// * If the alien’s color isn’t green, print a statement that the player just earned 10 points.
alien_color = 'green';
if (alien_color == 'green') {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
// * Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
//Q24
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// * Write three versions of this program, making sure each message is printed for the appropriate color alien.
// * If the alien is green, print a message that the player earned 5 points.
alien_color = 'green';
if (alien_color == 'green') {
    console.log("You earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}
// * If the alien is yellow, print a message that the player earned 10 points.
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log("You earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}
// * If the alien is red, print a message that the player earned 15 points.
alien_color = 'red';
if (alien_color == 'green') {
    console.log("You earned 5 points.");
}
else if (alien_color == 'yellow') {
    console.log("You earned 10 points.");
}
else if (alien_color == 'red') {
    console.log("You earned 15 points.");
}
//Q25
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder.");
}
// //Q26
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// * Make a array of your three favorite fruits and call it favorite_fruits.
// * Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ['mango', 'apple', 'banana'];
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('cherry')) {
    console.log("You really like cherries!");
}
// //Q27
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// * If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// * Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ['admin', 'john', 'eric', 'alice', 'bob'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//Q28
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// * If the list is empty, print the message We need to find some users!
// * Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
//Q29
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// * Make a list of five or more usernames called current_users.
let current_users = ['john', 'eric', 'alice', 'bob', 'mike'];
// * Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['eric', 'MIKE', 'susan', 'george', 'anna'];
// * Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// * Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already in use, please enter a new username.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
//Q30
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// * Store the numbers 1 through 9 in a array.
// * Loop through the array.
// * Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//Q31
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// * Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// * Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizzas = ['pepperoni', 'margherita', 'bbq chicken'];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
//Q32
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ['dog', 'cat', 'rabbit'];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
//Q33
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}
make_shirt('large', 'I love TypeScript!');
//Q34
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt1(size = 'large', message = 'I love TypeScript!') {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}
make_shirt1(); // Large shirt with default message
make_shirt1('medium'); // Medium shirt with default message
make_shirt1('small', 'JavaScript is cool!'); // Small shirt with a different message
//Q35
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = 'USA') {
    console.log(`${city} is in ${country}.`);
}
describe_city('New York');
describe_city('Los Angeles');
describe_city('London', 'UK');
//Q36
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country('New York', 'USA'));
console.log(city_country('London', 'UK'));
console.log(city_country('Tokyo', 'Japan'));
//Q37
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Taylor Swift', '1989'));
console.log(make_album('Adele', '25', 11));
console.log(make_album('Drake', 'Scorpion', 25));
//38
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ['David Copperfield', 'Dynamo', 'David Blaine'];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
//39
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//q40
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
magicians = ['David Copperfield', 'Dynamo', 'David Blaine'];
let great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
