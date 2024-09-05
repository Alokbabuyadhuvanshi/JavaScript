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
console.log(loginUserMessage())