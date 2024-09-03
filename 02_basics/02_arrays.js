const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// console.log(marvel_heros[3][0])

//allHeros = marvel_heros.concat(dc_heros)  // return a complete new array with all combination of both the arrays
//console.log(allHeros);

const allnewHeros = [...marvel_heros, ...dc_heros]  // this is a spread operator use to create a array by combining multiple arrays
//console.log(allnewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_array = another_array.flat(Infinity)   /* this will return a new array by combing all insided subarrays
                    you can give the number of subarrays that you want to combine in the argument in FLAT method*/

//console.log(usable_array);

console.log(Array.isArray("alok"));

console.log(Array.from("alok"));

console.log(Array.from({name: "alok"}));  //INTERESTING  -> it will return the empty array 
console.log(Array.of({name: "alok"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




