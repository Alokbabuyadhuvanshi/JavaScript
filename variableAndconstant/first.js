const accountId = 1345
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "GN"
let accountState;

//accountId = 2 - not allowed

accountEmail = "abcd@gmail.com"
accountPassword = "123456"
accountCity = "dadri"

console.log(accountId);

/* prefer not to use var
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])