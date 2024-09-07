 const coding = ['js','python','java','css','php','cpp']

//  coding.forEach(
//     function(item){
//         console.log(item);
//     }
//  )
 
// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
// }


// In every iteration FOREACH loop holds these three values 1- item of array , 2- indexing of item , 3- and complete array in each iteration.
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);   
// })


// multiple objects in a array

const myCoding = [
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]

myCoding.forEach((values)=>{
    console.log(values.languagename);  
})