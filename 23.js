// ARROW FUNCTIONS


const user = {
    username: "raman",
    price: 1000,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
};

user.welcomeMessage();

user.username = "hitesh";

user.welcomeMessage();

console.log(this);


function chai(){
    console.log(this);
}

chai();


const chai2 = function(){
    let username = "raman";
    console.log(this);
};

chai2();


const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(2, 3));


const addTwo1 = (num1, num2) => num1 + num2;

console.log(addTwo1(2, 3));


const addTwo2 = (num1, num2) => (num1 + num2);

console.log(addTwo2(2, 3));


const addTwo3 = (num1, num2) => ({
    username: "raman",
    price: 1000
});

console.log(addTwo3(2, 3));


const myArray = [1, 2, 3, 4, 5];

myArray.forEach((num) => console.log(num * 2));
