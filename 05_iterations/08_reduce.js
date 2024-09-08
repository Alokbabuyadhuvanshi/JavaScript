const myNum = [1,2,3]

// const total = myNum.reduce(function(accumelator,current_value){
//     console.log(`acc:${accumelator} and curval ${current_value}`);
    
//     return accumelator + current_value
// }, 0)

// console.log(total);


// reduce with arrow function

const  myTotal = myNum.reduce((acc, curv)=>acc+curv,0) // 0 is the starting initial value of accumelator
console.log(myTotal);


const shoppingCart = [
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'py course',
        price:999
    },
    {
        itemName:'Dev course',
        price:3999
    }
]

const pricepay = shoppingCart.reduce((accumelator,item)=>accumelator+item.price,0)
console.log(pricepay);
