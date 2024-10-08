//The Promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting value.

/* A Promise in in one of these state
> Pending - initial state, neither fulfilled nor rejected
> fulfilled - meaning that the operation was completed successfully
> rejected - meaning that the operation failed */

const promiseOne = new Promise(function(resolve, reject){
        //Do an async task
        //Db calls, cryptography, network
        
setTimeout(function(){
    console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, rejecr){
    setTimeout(function(){
        resolve({username:"alok", email:"example@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject("Error:Something went wrong.")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then((username) => {
    console.log(username);
}).catch(function(error){    // here error = "Error:Something went wrong."
    console.log(error);     
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({username:"JavaScript",password:"123"})
    }else{
        reject("Error:JS went wrong.")
    }
},1000)

async function consumePromiseFive() {
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
    
}

consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))