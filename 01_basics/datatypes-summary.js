//Primitive : all premitives are call by reference means when we call it it not provide the actual memory location 
// but provide a copy value.As a resule all the change will be done on the copy value

//7 types : String, Number, Boolean, null, undefined, Symbol(to make any value qniue then use symbol), BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
let userEmail; // it means undefine

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) //false: because symble used to make uniqe.



// Reference type(Non primitive)
//Array, Objects, Functions

const heros = ["Shaktiman","Naagraj","doga"] //array

let myObj = {                //object
    name: "Subhankar",
    age: 30
}

//function
const myFunction = function(){
    console.log("hello World")
}

console.log(typeof myFunction)
console.log(typeof heros)

//https://262.ecma-international.org/5.1/#sec-11.4.3



console.log("================================Memory=============================")
console.log("")
console.log("")

//Stack (use for all premitive data type) and Heap(use for all non-premitive/referance data type) memory

let myYoutubename = "subhankartube.com"

let anotherName = myYoutubename
anotherName = "chai aur Js"

console.log(myYoutubename)
console.log(anotherName) 

let userOne = {
    emai: "mail2subha@gmail.com",
    upi: "subha@ybl"
}

let userTwo = userOne
userTwo.email = "subhankar@google.com"

console.log(userOne.email)
console.log(userTwo.email) 