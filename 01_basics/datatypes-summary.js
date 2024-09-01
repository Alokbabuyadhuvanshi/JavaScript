// primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol, BigInt

const score = 100           //return type -> number 
const scoreValues = 100.3  // return type -> number 

const isLoggedIn = false     //return type -> boolean
const outSideTemp = null     //return type -> object

let userEmail;               //return type -> undefined

const id = Symbol('123')     //return type -> symbol
const anotherid = Symbol('123')  //return type -> symbol 



const bigNumber = 3453245143451n  //return type -> bigint 

// Reference (Non primitive)

// Array , Objects , Function

const heros = ["shaktiman","naagraj","doga"]   //return type -> object 
let obj = {
    name:"Alok",                                //return type -> object
    age:21,
}                                              



const myFunction = function(){
    console.log("hello world")                  //return type -> function
}

console.log(typeof myFunction);
