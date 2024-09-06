//globle scope > block scope

let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 100
//     const b =20
//     var c =30
//     console.log("inner a",a);
// } 


//console.log("outer a",a);  //this will show the error
// console.log(b);      // this also show the error
//console.log(c);


function one(){
    const username = "alok"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
}
one()


// ++++++++++++++++++++++++Interesting ++++++++++++++++++++++++

function addone(num){
    return num+1         // we can access this function at any place in file 
}

console.log(addone(3))

//addtwo(4)  // this will show an error

const addtwo = function(num){    // these type of function we known as expression , it is a type of variable "addtwo"
            return num+2       
            }                      // but here we can't acces this function at any place in the file , you can only access in the downside at the point of declaration

console.log(addtwo(4))