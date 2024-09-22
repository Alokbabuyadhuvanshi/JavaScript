function SetUsername(username){
    // complex BD calls
    this.username = username
}

function createUser(Username, email,password){
    SetUsername.call(this,Username)

    this.email = email
    this.password = password
}

const user1 = new createUser("Alok","alok@gmail.com",'123')
console.log(user1);
