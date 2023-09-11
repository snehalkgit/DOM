

let  firstName = "chinmay"
let lastName = 'deshpande'
let middleName = `shirsh`

console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)



// program 2
// String concat 
let firstNameA = "chinmay"
let lastNameB = "deshpande"
console.log("My firstName is "+firstNameA+" and my last name is "+lastNameB)
console.log(`My firstName is ${firstNameA} and my last name is ${lastNameB}`)


// program 3

// number + number ====> number 
// string + number ====> string
// number + string ====> string 
// string + string ====> string 

let a1 = 10
let b1 = 5
let c1 = "hello"
console.log(a1+b1+c1)
// number + number + string 
console.log(b1+c1+a1)
// number + string + number    "5hello10"
console.log(c1+a1+b1)
// string + number + number


// program 4
// string stores the value by index

let first_name = "chinmay"
//  0   1  2  3   4   5  6
//  c   h  i  n   m   a   y
console.log(first_name[0])
console.log(first_name[5])
// In javascript ---- everything is object 
// object - properties and method 
let last_name = "deshpande"
console.log(last_name.length)
console.log(last_name)

// 0  1  2  3  4  5  6  7  8
// d  e  s  h  p  a  n  d  e
for(let i = 0 ; i < last_name.length ; i++){
    //console.log(i)
    console.log(last_name[i])
}

for(let i = 8 ; i >= 0  ; i--){ // 7 // 6 // 5 // 4 // 3 // 2 //1 // 0 // -1
    //console.log(i) // 8 // 7 // 6 // 5 // 4 // 3 // 2 // 1 // 0
   console.log(last_name[i])
}
























