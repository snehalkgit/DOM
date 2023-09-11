// program 1
let x = 10
console.log(x)
x = 100
console.log(x)

// program 2
const y = 100
console.log(y)
//y = 800

// program 3

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let s = 8
let t = 4

console.log(s+t)
console.log(s-t)
console.log(s*t)
console.log(s/t)
console.log(s%t)

// 10 pair ??  50 lines DRY ---- Don't repeat yourself

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(12,3)
Calculator(9,3)
Calculator(4,2)


// function without parameter and without return type

// program 5
function addA(){
    console.log(9+9)
}
addA()
addA()
addA()
addA()

//program 6
// function with parameter and without return type

function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(1,4)


// program 7

// 100 given 
// 100 shown

// function with parameter and with return type
function addC(x,y){
    return x + y
}
let q1 = addC(12,3)
console.log(q1)
console.log(q1+q1)
console.log(q1* 0.10)

























