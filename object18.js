// const course = {
//     courseName: "js in hindi",
//     price: 999,
//     CourseInstructor: "CodeWithHarry",
// }
// course.courseInructor
// const {courseInstructor} = course;
// console.log(courseInstructor);
// {
//     "name": "js in hindi",
//     "coursename": "hinglish",
//     "price": "free",
// }
// function calculateCarPrice(...num1){
//     return num1;
// }
// console.log(calculateCarPrice(1000, 2000, 3000, 4000, 5000));
// output: [1000, 2000, 3000, 4000, 5000] by using ...

const user ={
    username: "harry",
    price: 999,
}
function handleobject(anyobjeect){
    console.log(`username is ${anyobjeect.username} and price is ${anyobjeect.price}`);
}
// heandleobject(user);
handleobject({
username: "harry",
price: 999
});
const myNewArray = [1, 2, 3, 4, 5];
function returnsecondValue(arr){
    return arr[1];
}
console.log(returnsecondValue(myNewArray));
