const tinderUser = new Object()   // singleton object
// const tinderUser = {}  => both defination of object are same


tinderUser.id = "1234"
tinderUser.name ="tommy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "alok@gmail.com",
    fullname: {
        userfullname:{
            firstname:"alok",
            lastname:"babu"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

//const obj3 = {obj1 , obj2} 

//const obj3 = Object.assign(obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);


console.log(tinderUser);


console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('name'));


