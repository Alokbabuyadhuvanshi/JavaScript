//globle scope |    block scope

let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 100
    const b =20
    var c =30
    console.log("inner a",a);
} 


console.log("outer a",a);  //this will show the error
// console.log(b);      // this also show the error
console.log(c);


