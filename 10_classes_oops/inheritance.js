class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 =  new Teacher("Alok","alok@gmail.com","1234")
// user1.addCourse()
user1.logMe()

const user2 = new User("Alok Babu")
user2.logMe()

// console.log(user1 === user2);
// console.log(user1 === Teacher);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);

