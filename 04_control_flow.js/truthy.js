const userEmail = "alok@gmail.com"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("Don't get the user email");
}


// fasly value
/* false, 0, -0, BigInt 0n, "", null. undefined, NaN */

// truthy values
/* "0", "false", " ", [], {}, function(){} */

// const value = []

// if (value.length === 0){
//     console.log("Array is empty");
// }


const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish coalescing Operator(??): null undefined

let val1 ;
val1 = 5 ?? 10
console.log(val1);

val1 = null ?? 10
console.log(val1);

val1 = undefined ?? 15
console.log(val1);

val1 = null ?? 12 ?? 16
console.log(val1);


// Terniary Operator

// condition ? true : false

const price = 100
price > 80 ? console.log("Greater than 80"): console.log("less than 80");

