// let myFirstName = "Alok     "
// let myLastName = "Babu     "

// console.log(myName.length);

let myhero = ["thor","spiderman"]

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.alok = function(){
    console.log("Alok is present in all objects");
}


Array.prototype.babu = function(){
    console.log("babu is present in only Arrays");
}
// heropower.alok()

// myhero.alok()


myhero.babu()

//heropower.babu()



// INHERITANCE

const User = {
    name:"Alok",
    email:"Alok@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignmant:'Js assignment',
    fullTime:true,
    __proto__:TeacherSupport    // PROTOTYPAL inheritance
}

Teacher.__proto__ = User    // PROTOTYPAL inheritance

// Modern method

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUserName = "ABCD    "

String.prototype.trueLength = function(){
    console.log(`True length is : ${this.trim().length}`);
}


anotherUserName.trueLength()
"alokbabu  ".trueLength()