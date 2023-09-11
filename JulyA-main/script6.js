

// conditional statment
// one input and multiple outcomes

// numT > 0 && numT <= 5  ----> 10% discount
// numT > 5 && numT <= 10 ----> 20% discount
// numT > 10              ----> 30% discount


// if(condition){
//     // statements
// }


// program 1

let numT = 11

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10 ){
    console.log("30 % discount")
}


// Program 2

let numT2 = -11

if(numT2 > 0 && numT2 <= 5){
    console.log("10 % discount")
}
else if(numT2 > 5 && numT2 <= 10){
    console.log("20 % discount")
}
else if(numT2 > 10){
    console.log("30 % discount")
}
else {
    console.log('incorrect input')
}

// program 3

let marks = 6

// if(marks > 90){
//     console.log('Grade A')
// }
// if(marks > 75){
//     console.log('Grade B')
// }
// if(marks > 65){
//     console.log('Grade C')
// }


// if(marks > 90){
//     console.log('Grade A')
// }
// else if(marks > 75){
//     console.log('Grade B')
// }
// else if(marks > 65){
//     console.log('Grade C')
// }
// else {
//     console.log('Fail ...')
// }


// program 4

let a = 10
let b = 5

if(a > b){
    console.log('a is greater')
}
else {
    console.log('b i greater')
}
let x = 100
let y = 500
let z = 2500

if(x > y && x > z){
    console.log('x is greater')
}
else if (y > x && y > z){
    console.log('y is greater')
}
else {
    console.log('z i greater')
}







































