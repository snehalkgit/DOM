// conditional statements 

// Program 1
let s  = 10
let y = 50

if(s > y){
    console.log('s is greater')
}
else {
    console.log('y is greater')
}

// program 2
let x1 = 10
let x2 = 50
let x3 = 300

if(x1 > x2 && x1 > x3){
    console.log('x1 is greater')
}
else if (x2 > x1 && x2 > x3){
    console.log('x2 is greater')
}
else {
    console.log('x3 is greater')
}

// program 3

let r = 10
let q = 5

if(r > q){
    console.log('r is greater')
}
else {
    console.log('q is greater')
}

// program 4
r > q ? console.log('r is greater'):console.log('q is greater')
let age = 17
let q1 = age >= 18? "can drive":"can not drive"
console.log(q1)


// program  5
//  switch case without break

let city = "jaipdddddr"
switch(city){
    case "pune":
        console.log('MH')
    case 'jaipur':
        console.log('RJ')
    case "indore":
        console.log('MP')
    default:
        console.log('incorrect city  name')
}

let city2 = "asfdasfd"
switch(city2){
    case "pune":
        console.log('MH')
        break
    case 'indore':
        console.log('MP')
        break
    case 'jaipur':
        console.log('rj')
        break
    default:
        console.log('incorrect city name')
}





























