const user = {
    username:"alok",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details");
        //return(`${this.username}`);
        return this 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    //return this
}

// New keyword create a empty object called as instance

const userOne = new User('Aman',12,true)
const userTwo = new User('Alok',11,false)
console.log(userOne);
console.log(userOne.constructor);

