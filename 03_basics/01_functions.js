// console.log("A")
// console.log("l")
// console.log("o")
// console.log("k")


// function sayMyName(){
//     console.log("A")
//     console.log("l")
//     console.log("o")
//     console.log("k")
// }

// sayMyName()

function addTwoNumber(num1 , num2){   // num1 , num2 are the parameters
    console.log(num1 + num2)
}

// addTwoNumber(3,"4")    // here 3, 4 are the parameters
// addTwoNumber(3,null)

function addthreenumbers(num1, num2, num3){
    return num1+num2+num3                

}

// const result = addthreenumbers(3,5,1) //// if you return the output of a function then you can store it in a variable 
// console.log(result);  

// const result2 = addTwoNumber(3,4)
// console.log(result2);   // if your function console the output then you cant able to store in a varible that why it returns "undefined"

function loginUserMessage(username = "sam"){
    if(username === undefined){   // if(!username)   -> same code
        return("Please enter a username")
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("alok"))
//console.log(loginUserMessage())


function calculateCartPrice(num1,num2,...num3){   // ...num is a rest operator
    return num3
}

console.log(calculateCartPrice(200,300,400,500,600))


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

const user ={
    username:"alok",
    price:199
}

handleObject(user)             
handleObject({
    username:"lucky",          // you can also give arguments directly during function calling
    price:399
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// directly give the variable name of the array to the argument
console.log(returnSecondValue(myNewArray));

// or you can direct give an array to the arguemnt
console.log(returnSecondValue([100,200,300,400]));

