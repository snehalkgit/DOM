// let 
let x = 10
console.log(x)
x  = 300
console.log(300)

// const

const y = 40
console.log(y)
//y = 80


// program 3

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

let q = 90
let r = 45

console.log(q+r)
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)


// program 4
function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(8,4)
Calculator(6,3)


// program 5

function addA(){
    console.log(8+8)
}
addA()
addA()
addA()
addA()

// program 6
function addB(x,y){
    console.log(x+y)
}
addB(12,5)
addB(5,5)
addB(3,4)

// program 7

function addC(x,y){
    return x + y
}

let q1 = addC(12,3)
console.log(q1+q1)
console.log(q1 * 0.10)

// program 8


// Human
// Properties - age weight height color
// Method - talk() , walk()

// Vehicle 
// Properties - color , type , model , regNo
// Method - start() , stop()

// Bank
// Properties - bal , accNo , accName , branchName
// Method - deposit() , withdrawl()


let x1  = 10
console.log(x1)
x1 = 300
console.log(x1)
console.log(typeof x1) // number
// 0 ,12,-12,33.4,55.5

let x2 = true 
console.log(x2)
console.log(typeof x2)
// true or false

let x3 = "chinmay"
console.log(x3)
console.log(typeof x3)

// "A", "aads12321","!@##$$dasd"," "


// comparison
// < , > ,<= , >=
// == ,!=    -------value
// === , !== --- value and type

console.log(typeof 10) // value
console.log(typeof '10') // string

console.log(10 == '10') //  true
console.log(10 === '10') // false
console.log(10 === 10) // true
console.log(10 == 10) // true
console.log(10 !== '10') // true
console.log(10 != '10') // false
console.log(10 == '10') // true
console.log(3 < 2) // false
console.log(3 > 1) // true
console.log(3 <= 1) //false
console.log(3 >= 1) // true
console.log(3 >= 3) // true
console.log(3 <= 3) // true


// Logical operator 

// && , || ,!

// AND -- &&
// True    &&    True  -----> True
// False   &&    True  -----> False
// True    &&    False -----> False 
// False   &&    False -----> False

console.log(3 == 3 &&  4 == 4)
console.log(3 != 3 &&  4 == 4)
console.log(3 == 3 &&  4 != 4)
console.log(3 != 3 &&  4 != 4)



// OR --  ||
// True    ||    True  -----> True
// False   ||    True  -----> True
// True    ||    False -----> True 
// False   ||    False -----> False

console.log(3 == 3 ||  4 == 4) // True
console.log(3 != 3 ||  4 == 4) // True
console.log(3 == 3 ||  4 != 4) // True
console.log(3 != 3 ||  4 != 4) // False

// NOT 
console.log(!(7 == '7'))
console.log(!(7 === '7'))

// true - false
// false - false


// one input and multiple outcomes --- conditional statements


let numT = -17

// if(numT > 0 && numT <= 5){
//     console.log('5 % discount')
// }
// if(numT > 5 && numT <= 10){
//     console.log('10 % discount')
// }
// if(numT > 10){
//     console.log('20 % discount')
// }


if(numT > 0 && numT <= 5){
    console.log('5 % discount')
}
else if(numT > 5 && numT <= 10){
    console.log('10 % discount')
}
else if(numT > 10){
    console.log('20 % discount')
}
else {
    console.log('Incorrect input')
}


let marks = 92

if(marks > 90){
    console.log('Grade A')
}

if(marks > 75){
    console.log('Grade B')
}

if(marks > 60){
    console.log('Grade C')
}


if(marks > 90){
    console.log('Grade A')
}

else if(marks > 75){
    console.log('Grade B')
}

else if(marks > 60){
    console.log('Grade C')
}
else {
    console.log('Fail...')
}


































