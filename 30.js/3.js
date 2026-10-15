const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "py course",
        price: 12999
    },
    {
        itemName: "cpp course",
        price: 1400
    },
    { 
        itemName: "mobile dev course",
        price: 50000,
    }
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)