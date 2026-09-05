// lecture 6

let num1 = 10;

if (num1 % 5 === 0) {
    console.log(num1, "is multiple of 5");
} else {
    console.log(num1, "is not multiple of 5");
}

let marks = 85;

if (marks >= 80 && marks <= 100) {
    console.log("A");
} else if (marks > 70) {
    console.log("B");
} else if (marks > 60) {
    console.log("C");
} else if (marks < 49) {
    console.log("F");
}

let a1 = 10;
a1 = "ram";
a1 = true;
a1 = null;

const a2 = 10;

let name = "Raman";
let age = 18;

console.log("Name:", name);
console.log("Age:", age);

let a = 10;
let b = 20;

console.log("Sum =", a + b);
console.log("sub=", a - b);
console.log(a / b);
console.log(a ** b);

a = a + 1;
console.log(a);

let num = 10;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}