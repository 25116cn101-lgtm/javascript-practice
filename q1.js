// let score = Number(prompt("Enter your score (0-100):"));
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else if (score >= 0 && score <= 49) {
//     grade = "F";
// } else {
//     grade = "Invalid score";
// }

// console.log("According to your score, your grade is:", grade);

////////////////////////////////////////////////////////////////
// prompt( ) use for taking input from user in browser environment. 
// It will not work in Node.js environment. If you want to take 
// input in Node.js, you can use the `readline` module or other
//  libraries like `prompt-sync`.
/////////////////////////////////////////////////////////////////



const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your score (0-100): ", (input) => {

    let score = Number(input);
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else if (score >= 0) {
        grade = "F";
    } else {
        grade = "Invalid score";
    }

    console.log("According to your score, your grade is:", grade);

    rl.close();
});