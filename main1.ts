//Q9
//Names: Store the names of a few of your friends in 
//a array called names. Print each person’s name by accessing each element in the list, one at a time.

let myFriends=["Fatima", "Zainab", "Samrah"]
for(let i=0; i<myFriends.length; i++)
console.log(myFriends[i])

//Q10
//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message should be the same,
// but each message should be personalized with the person’s name.

let message="I miss you Buddy."
for(let i=0; i<myFriends.length; i++)
    console.log(`Dear, ${myFriends[1]}  ${message}`)

//Q11
//Think of your favorite mode of transportation, such as a motorcycle or a car, and make
// a list that stores several examples. Use your list to print a series of statements about these
// items, such as “I would like to own a Honda motorcycle.”


let favTrans:string[]=["Revo", "fortuner", "Vigo" ]
let message1="i will buy it soon "

for(let i=0;i<favTrans.length;i++)
{ console.log(message1 + favTrans[i]);}

//Q12
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guestList =["soniya", "sadaf", "samira"]
for(let i=0; i<guestList.length; i++)
console.log(`Dear ${guestList[i]} , you are cordially invited to dinner.`)

// //Q13
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let unableToAttend ="Sadaf"
console.log(`${unableToAttend} can't make it to dinner`)
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList[1] = "Jugnu"
// Print a second set of invitation messages, one for each person who is still in your list.
guestList.forEach(guestList=>{console.log(`Dear ${guestList}, Join us for dinner and good vibes tonight!`)})

//Q14
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestlist: string[] = ["Jugnu","Zainab"]
console.log(guestlist)
console.log(`Great News! I have a bigger table for dinner`)

//  Add one new guest to the beginning of your array.
guestlist.unshift("Samrah")
console.log(guestlist)
// Add one new guest to the middle of your array.
guestlist.splice(guestlist.length / 2,0, "sadaf")
console.log(guestlist)
// • Use append() to add one new guest to the end of your list.
guestlist.push("soniya")
console.log(guestlist)
// Print a new set of invitation messages, one for each person in your list.
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist}, would you like to join me for dinner`)})

//Q15
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// * Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`Unfortunately, i can invite only two people for dinners`)
// * Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestlist.length > 2) {let removeGuest = guestlist.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);}
// * Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(guestlist => {console.log(`Dear ${guestlist} you're still invited to dinner.`);})
// * Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.splice(0, guestlist.length);
console.log(guestlist)

//Q16
  
