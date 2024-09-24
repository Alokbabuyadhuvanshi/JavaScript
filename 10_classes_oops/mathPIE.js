
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const value = Object.getOwnPropertyDescriptor(Math,  'PI')
console.log(value);

const user = {
    name:"Alok",
    price:"200",
    isAvailable : true, 


    finder: function(){
        console.log("time nhi mila");
        
    }
}


Object.defineProperty(user, "name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (const [key , value] of Object.entries(user)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
        
    }
}