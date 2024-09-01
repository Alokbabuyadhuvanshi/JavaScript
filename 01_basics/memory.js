// Stack (Primitive), Heap(Non- Primitive)

/* IN PRIMITIVE DATATYPE IF YOU TAKE A REFRENCE VALUE THEN YOU WILL GET A DUPLICATE VALUE OF AND IF YOU CHANGE
 IT THEN STILL THE ORIGINAL WILL REMAIN SAME.*/

 let myname = "Alok Babu"

 let anothername = myname

 anothername = "aman"

 console.log(myname);    // myname is still same
 console.log(anothername); // but this refrence name is changed

 

/* IN NON PRIMITIVE DATATYPE IF YOU TAKE A REFRENCE VALUE THEN YOU WILL GET A DUPLICATE VALUE OF AND IF YOU CHANGE
 IT THEN THE ORIGINAL VALUE WILL ALSO CHANGE*/

 let userone ={            //Datatype -> object
            email:"alok@gmail.com",
            upi:"alok@ptm"
 }

 let userTwo = userone

 userTwo.email = "ABC.GMAIL.COM"
 userTwo.upi = "xyz@12"

 console.log(userTwo)
 console.log(userone)
 
 