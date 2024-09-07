// if

//const isUserLoggedIn = true
// const temp = 40

// if(temp < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");   
// }
//  >, <, >=, <=, ==, != ,===

// ==  this is a normal comparison operator , only checks the values not datatypes
// ===  #STRICT CHECKING - this is also a comparison operator but this also checks the datatypes and value both.

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);    
// }

const balance = 1000

//if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("middle less");
// }else{
//     console.log("less than 1000");   
// }


// ++++++ AND operator- && \  OR operator - || +++++++++

let a = 4
let b = 5

if (a==4 && b==5){
    console.log("executed");
}
else{
    console.log("not Executed"); 
}


const loggedInFromGoogle = true
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("loggin comfirmed");
}
else{
    console.log("not confirmed");   
}