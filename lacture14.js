// =============
//     Array
// =============

const myArr = [1, 3, 2, 4, 5];


// =====================
// Array Index
// =====================

console.log(myArr[4]);


// =====================
// push()
// =====================

myArr.push(0);

console.log(myArr);


// =====================
// pop()
// =====================

myArr.pop();

console.log(myArr);


// =====================
// unshift()
// =====================

myArr.unshift(6);

console.log(myArr);


// =====================
// includes()
// =====================

console.log(myArr.includes(9));


// =====================
// join()
// =====================

const newArr = myArr.join();

console.log(myArr);

console.log(newArr);

console.log(typeof myArr);
console.log(typeof newArr);


// =====================
// slice()
// =====================

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B ", myArr);


// =====================
// splice()
// =====================

console.log("C ", myArr);

const myn2 = myArr.splice(1, 3);

console.log(myn2);

console.log("D ", myArr);

