
//  Immediately Invoked Function Expressions (IIFE)


// normal function calling
// function newfun(){
//     console.log("DB connected");
// }

// newfun()


// ++++++++++ IIFE ++++++++++ -> we use IIFE so that we can protect the function from globle scope / and also for immediate invocation

/* you just need to rap the function in round braces and then invoke it by putting two "()" braces at the end*/

/* syntax -> (function_defination)()  */
(function invoke_checking(){
    console.log("ugent call");
    // named IIFE
})();

// for ending the invoke function we use semicolen ";" 

(() => {
    console.log("DB connected two");    // normal IIFE or unnamed IIFE
})();

((name) => {
    console.log(`DB connected two ${name}`);
})("Alok");