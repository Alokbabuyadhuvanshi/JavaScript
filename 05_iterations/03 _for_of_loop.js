// for of

// ["","",""]
//[{},{},{}]


// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello world"
// for (const eachWord of greeting) {
//     console.log(`Each character of greeting is ${eachWord}`);
// }


// Maps -> use to store only unique values

// const map = new Map()

// map.set('IN',"India")
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// console.log(map);

// for (const [key , value] of map) {
//     console.log(key, ':-',value);    
// }


//  0bject 

const myObject = {
    'game1':'NFS',
    'game2': 'Spiderman'
}

//  for-of loop is not work with object , in object we use for-in loop -> check it on next file

// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
// }



 // for-in loop on map  => map can't be iteratable do this will not show any output

//  const map = new Map()

// map.set('IN',"India")
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('Fr',"France")

// for (const key in map) {
//         console.log(key);
// }