// Two ways to declare object
// 1- literal -> multiple instance
// 2- constructor -> singleton


//++++++++++++++++++++ object Literal +++++++++++++++++++++//

mySym = Symbol("key1")

const JsUser = {
    name :"alok",
    "full name": "Alok Babu",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "alok@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email ="alokgoogle.com"
//Object.freeze(JsUser)       // this will stop changing the object 


console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js");
}

JsUser.greetingTwo = function(){
    console.log(`hello js ${this["full name"]}`);
}
JsUser.greeting()
JsUser.greetingTwo()

