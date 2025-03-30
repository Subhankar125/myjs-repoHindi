let score = "33sdf" 
//let score = ture

console.log(typeof score)

let variableInNumber= Number(score)
console.log(typeof variableInNumber)
console.log(variableInNumber)


let score1 = null

console.log(typeof score)

let variableInNumber1= Number(score1)
console.log(typeof variableInNumber1)
console.log(variableInNumber1)

console.log("=====Notes====")

//33 = number
//33gfd = NaN
//true = 1; false = 0

// say isloggedin is giving number need to convert ti to boolean
let isloggedIn = 1
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn)


console.log("=====Notes====")

//1 => true ; 0 => false
//"" => false
//"subhankar" => true

let someNumber = 30
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)



//================================operations=============================
console.log("================================operations=============================")
console.log("")
console.log("")



let value = 2
let negvalue = -value
console.log(negvalue)

let string1 = "Hello"
let string2 = " Subhankar"

let string3 = string1+string2
console.log(string3)
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true) //dont use this type of conversion


//link to study: https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-toprimitive
//link to study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment



//================================operations=============================
console.log("================================Stricked check=============================")
console.log("Stricked check is checking with ===")
console.log("")

console.log("2" === 2) //== is basically compare but === it is also check data type ,compareable or not



