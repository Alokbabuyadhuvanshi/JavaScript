class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username :${this.username}`);
    }

    static createId(){
        return`123`
    }
}

const user1 = new User("Alok")
// console.log(user1.createId())



class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const user2 = new Teacher("lucky", "lucky@gmail.com")
user2.logMe()
console.log(user2.createId());

