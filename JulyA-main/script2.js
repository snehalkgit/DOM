// program 1
let score = 10
console.log(score)
score = 200
console.log(score)


// program 2
const j = 900
console.log(j)
//j = 6000

// program 3

let s = 10
let t = 5

console.log(s + t)
console.log(s - t)
console.log(s * t)
console.log(s / t)
console.log(s % t)

let q = 8
let r = 4

console.log(q + r)
console.log(q - r)
console.log(q * r)
console.log(q / r)
console.log(q % r)


// DRY (Donnot repeat yourself)
// 10 pair --  50 lines

// program 4
function Calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}

// calling the function
Calculator(6,3)
Calculator(16,8)
Calculator(9,3)

// program 5
// function without parameter and without return type
function addA() {
   console.log(9+9)
}
addA()
addA()
addA()
addA()
addA()

// program 6
// function with parameter and without return type 
function addB(x,y){
    console.log(x+y)
}

addB(12,3)
addB(120,30)
addB(1200,300)


// program 7
// 100 - Given 
// 100 - Shown

// function with parameter and with return type

function addC(x,y){
    return x + y
}

let q1 = addC(12,8)
console.log(q1)
console.log(q1 + 5)
console.log(q1 / 4)
console.log(q1 * 0.10)














