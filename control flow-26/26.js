// IF 

// if (condition) {
//   // code to be executed if condition is true
// }

// <, >, <= , >=, == , != , === , !=
// const inUserloggedIn = true;
// const temperature = 30;
// if (temperature > 25) {
//     console.log("It's a hot day");
// }

// const score = 200;
// if (score > 100) {
//     let bonus = 50;
//     console.log(`Bonus: $${bonus}`);
// }
const balance = 1000;
// if (balance < 500) console.log("Low balance");
// console.log("Balance check complete");
if (balance < 500) {
    console.log("less than");

}
else if (balance < 700) {
    console.log("greater than");
}   
else {
    console.log("less than 1200");
}
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && balance > 0) {
    console.log("You can make a purchase");
}
if(userLoggedIn || loggedInFromEmail) {
    console.log("You can log in");
}