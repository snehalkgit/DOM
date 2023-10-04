//lexical scope 
//function


function addition() {

    x = 10
    y = 5
    console.log(x + y)
    function additionB() {


 let a = 10
 let b = 5
 console.log(x + y)
 console.log(a + b + x + y)
function additionC() {
 let e = 10
 let g = 5
 console.log(a + b + x + y)
 console.log(e + g)
   }
  additionC()
    }
    additionB()
}
addition()

//program2


function additionA() {
    let a = 10
    let b = 15
    console.log(a + b)
    console.log("hello")
    return a + b
    console.log('bye')
}
let a1 = additionA()
console.log(a1)

//program3

let A = 10
console.log(A)

let add = function (K, M) {
    return (K + M)
}
let a2 = add(2, 6)
console.log(a2)
console.log(add)

let sub = function (x, z) {
    return x - z

}
let s2 = sub(4, 5)
console.log(s2)

//function as a parameter to another function 

function substraction(fn, x, y) {
    let q2 = fn(x, y)
    return x - y
    let q3 = fn(x, y)
    return q3
}
let q4 = substraction(sub, 12, 8)

console.log(q4)


//function as return type --- closures

function multiplication() {
    let d = 5
    let e = 8
    return function mul() {
        return d * e
    }
}
let s = multiplication()
console.log(s)
console.log(s())
let s1 = function mul() {
    return d * e
}
console.log(s1)


// actual difference arrow function and function declaration


// function declaration 

function addA(x, y) {
    return x + y
}
let q1 = addA(12, 4)
console.log(q1)


// function expression 
let addB = function (x, y) {
    return x + y
}
let q6 = addB(12, 4)
console.log(q6)


// arrow function 
let addC = (x, y) => {
    return x + y
}
let q7 = addC(12, 4)
console.log(q7)




