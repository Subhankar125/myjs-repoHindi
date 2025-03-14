const accountId = 123456
let accountEmail = "ss30@gmail.com"
var accuntpassword = "kolkata111"
accountCity = "kolkata"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ayan@gmail.com"
accuntpassword = "qaz123"
accountCity = "Sector 5"

console.table([accountId,accountEmail,accuntpassword,accountState])