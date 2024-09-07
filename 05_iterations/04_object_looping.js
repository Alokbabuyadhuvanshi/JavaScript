const obj = {
    js: 'javascript',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const i in obj) {
  //  console.log(`${i} is the key of value ${obj[i]}`);
}

//   Array

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
       // console.log(key); // this will print only indexing of the values
       console.log(programming[key]);
    }
