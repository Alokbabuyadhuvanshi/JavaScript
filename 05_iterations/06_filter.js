// const coding = ['js','python','java','php','css']

// const array_data = coding.forEach((item) => {     // you can't store fro-each values in a variable
//     return item                                
// })

// console.log(array_data);



const num = [1,2,3,4,5,6,7,8,9,10]

//const newNum = num.filter((num) =>(num>4))   // here you don't need to write "return"
// const newNum = num.filter((num) =>{           // same syntax just braces are different / if you use curly braces then you should definately use "return" because "{}" it is a scope and in scope you should define that you want to return 
//     return num>4})

// console.log(newNum);



// const newNum = []
// num.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })

// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbooks = books.filter((bk)=>bk.genre ==="History")
//   console.log(userbooks);

  const booksdate = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre ==="History"})
  console.log(booksdate);
  