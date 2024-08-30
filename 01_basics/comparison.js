console.log("2" > 1); // here JS automatic convert string to number
console.log("02" > 1); // same here

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 

/*The reason is that an equality check == and comparison > < >= <= work differently.
comparison convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false */

console.log("2" === 2) // this is a strict comparison where JS not chnage the string to number