const myArr = [ 93, 54, 33, 43 ,56]

console.log(myArr[0]);

// array method

//myArr.push(5);

//myArr.pop()

//myArr.unshift(10)    // add a element in the starting of the array

//myArr.shift()    // remove a element from the starting of the array

//console.log(myArr.includes(9));   // check whether the element is present in the array or not

//console.log(myArr.indexOf(33));   // find the indexing of the given number

const newArr = myArr.join()   // this will change the value of array into string

//console.log(myArr);

//console.log(newArr);

//console.log(typeof newArr);



//  slice , splice

console.log("A ",myArr);

const ar1 = myArr.slice(1,3)   // SLICE can only return a copy of data from the indexing of 1 to 3, where it don't return the last indexing element 

console.log(ar1);

console.log("B", myArr);

const ar2 = myArr.splice(1,3)  // But in SPLICE if crop the array from 1 to 3 indexing and return it , now in main array have only remaining indexing element  

console.log("c", myArr);

console.log(ar2)












