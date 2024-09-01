const score = 400
//console.log(score);
 
const a = "200"
const balance = new Number(a)  // if you 200% want a number then you should define a number like this ......for banking apps 

//console.log(balance)

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));   // to increse precision after point till n digits , as much you want / here the value of n is 2.

const hundred = 1000000
//console.log(hundred.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++ maths - library ++++++++++++++++++++++++++++

//console.log(Math)

//console.log(Math.abs(-4))   // absolute value means all negative value will converted into positive value 

//console.log(Math.round(4.6));  // round off

//console.log(Math.ceil(4.6));   // round firgure toward next top value like 4.2 will become 5

//console.log(Math.floor(4.6));  // round firgure toward last floor value like 4.9 will become 4

console.log(Math.min(4,3,5,6,2));
console.log(Math.max(4,3,5,6,2));


console.log(Math.random());  // this will return any value between 0 and 1

console.log(Math.random()*10 + 1);   // if you want a value between 0 and 10 then you can use this trick  and we add 1 for avoid getting 0.

console.log(Math.floor(Math.random()*10 + 1));  

console.log(Math.ceil(Math.random()*10 + 1));  






