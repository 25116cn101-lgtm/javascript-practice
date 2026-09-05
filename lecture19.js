function sayMyname(){
    console.log("John Doe");
    console.log("Johnathon");
    console.log("vijay");
    console.log("raman "); 
}
sayMyname()
// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(5, 23)
function addTwoNumbers(num1,num2){
    // let result = num1+num2;
    // return result;
    return num1+num2;
}
const result = addTwoNumbers(5, 3);
// console.log("result:", result);
function loginUserMessage(username="ram"){
    if(username === undefined){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());