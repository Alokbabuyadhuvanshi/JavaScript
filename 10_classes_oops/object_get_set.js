const User ={
    _email:'alok@gmail.com',
    _password:'abc456',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const newuser = Object.create(User)

console.log(newuser.email);
console.log(newuser.password);
