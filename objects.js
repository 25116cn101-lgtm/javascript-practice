// try catch

try {
    let a = b + 18;
} catch (error) {
    console.log(error.name);
}


// Symbol

const mySym = Symbol("key1");


// Object literals

const jsUser = {
    name: "raman",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "raman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

Object.freeze(jsUser);

jsUser.email = "raman@google.com";

console.log(typeof mySym);


// Object

const tinderUser = new Object();

tinderUser.id = "1233acs";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// Nested object

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",
            secondename: ""
        }
    }
};

console.log(regularuser.fullname.userfullname.firstname);


// Object combine

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2};

console.log(obj3);


// Array of objects

const users = [
    {},
    {},
    {}
];

users[1].name = "raman";

console.log(users);


// Object methods

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));