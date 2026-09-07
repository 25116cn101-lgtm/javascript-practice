const userEmail = "user@example.com";
const userPassword = "password123";

if (userEmail && userPassword) {
    console.log("User is authenticated");
}
else {
    console.log("User is not authenticated");
}

// IF userEmail and userPassword are truthy, then the user is authenticated. Otherwise, the user is not authenticated. 
// means
//  const userEmail = "";
// const userPassword = "";

// falsy values

// false, 0, -0, 0n, "", null, undefined, NaN bigInt on


// truthy values

// true, {}, [], 1, -1, "0", "false", new Date(), function() {}, /regex/, Symbol(), BigInt(1)



// if (userEmail.length === 0)  length is proerty of array and string, it returns the number of elements in an array or the number of characters in a string.
// {
//     console.log("User email is empty");
// }


const empty0bj = {}

if (Object. keys(empty0bj).length === 0) {
console. log("Object is .empty");

}


// false == 0
// true

// false==''
// true

// 0 == ''
// true



// Nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is often used to provide default values for variables that may be null or undefined.

let val1;
val1 = 5 ?? 10; // val1 will be 5 because it is not null or undefined
val1 = null ?? 10; // val1 will be 10 because it is null
val1 = undefined ?? 10; // val1 will be 10 because it is undefined
val1 = null ?? undefined ?? 10; // val1 will be 10 because both left-hand side operands are null or undefined
console.log(val1); // Output: 5



//TERNARY OPERATOR

const age = 20; 
const isAdult = age >= 18 ? "Yes" : "No"; // if age is greater than or equal to 18, then isAdult will be "Yes", otherwise it will be "No"
console.log(isAdult); // Output: Yes
