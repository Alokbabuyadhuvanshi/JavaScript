// ES6

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user("Alok","alok@gmail.com","1234")

console.log(user1.encryptPassword());
console.log(user1.changeUserName());



// Behind the scene 
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password   
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User("Aman","aman@gmail.com","4321")

console.log(user2.encryptPassword());
console.log(user2.changeUserName());
