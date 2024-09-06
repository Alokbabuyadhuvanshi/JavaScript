
// this => refer current context
const user = {
    username:"Alok",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()

// user.username = "aman"

// user.welcomeMessage()

// console.log(this);


function me(){
    let username = "alok"
    console.log(this.username);  // you can't use THIS in functions , it can only usable in objects
    }                            // this will show undefined

// me()

// const intro = function(){
//     let myname = "alok"
//     console.log(this.myname);
// }

// ++++++++ARROW FUNCTION ++++++++++
// Syntax ==>   () => {}


// const intro = () => {
//     let myname = "alok"
//     console.log(this.myname);     // so the thing is ,you can't use THIS in any type of function either in normal function or arrow function
//     console.log(this);
//     console.log(myname);
// }

// intro()

// const addTwo = (num1 , num2) => {    //  here a varible "addTwo"  holds a arrow function
//     return num1 + num2
// }

// +++++++++ implicit return(same function but in different syntax)  => here we don't use  curly braces and "return" it automaticly understand everything

//const addTwo = (num1 , num2) => num1 + num2  

// if you use curly braces then only you have to use "return" this is called  explicit return

///const addTwo = (num1 , num2) => num1 + num2  

// otherwise you can also use round braces  => implicit return

const addTwo = (num1 , num2) => (num1 + num2) 

console.log(addTwo(3,4));


// or if you want to return a object through a implicit function then you should rap that object in round braces other wise it show UNDEFINED.

const return_obj = () => ({username:"alok"})

console.log(return_obj());






