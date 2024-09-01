const name = "Alok"
const repoCount = 11 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// In JavaScript, backticks(``) are used for template literals, which allow embedding expressions inside strings

console.log(name[0]);

const gameName = new String("alokbabu")

console.log(gameName[0]);
 
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName);

console.log(gameName.charAt(3));

console.log(gameName.indexOf("b"));

const newName = "java-Script"

const newString = newName.substring(0, 4)

console.log(newString)

const anotherstring = newName.slice(0,4)
console.log(anotherstring);

const newStringOne = "    spaces   "
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://alokbabuyadhuvanshi.github.io/%20portfolio/"

console.log(url.replace('%20',''));  // can be use to fix the wrong url

console.log(url.includes('xyz'));     // to check is this string present in url or not

