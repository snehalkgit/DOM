let a = 10
console.log(a)

let numbers = [11,22,33,44]
let names = ["chinmay","sarika","poorva"]
let info = ["chinmay","deshpande",7709192441,34, true]

//               0        1        2
let flowers = ["lotus", "lily","jasmine"]
// array stores the value by index

// program 1

console.log(flowers[0])
console.log(flowers[2])


// Array -- Object 
// Properties and method
// method - action and return 

console.log(flowers.length)
console.log(flowers[flowers.length-1])


// program 2
//              0          1         2       3
let names2 = ["poorva","abhisha","sarika","mayuri"]

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names2[3])


for(let i = 0 ; i < names2.length; i++){ 
    //console.log(i) 
    console.log(names2[i]) 

}

// i - 0
// i - 1
// i - 2
// i - 3

//              0        1       2        3
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits[0])
console.log(fruits.length)

for(let i = 0 ; i < fruits.length ; i++ ){
   // console.log(i)
    console.log(fruits[i])
}

// program 3
//              0   1 2  3  4  5  6  7   8
let numbersB = [11,22,33,44,55,66,77,88,99]

for(let i = numbersB.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(numbersB[i])
}


// program 4
//               0          1        2         3
let cities2 =  ["pune","banglore","chennai","kolkata"]

// push()
// action - add the element to last
// return - new length of array

let q1 = cities2.push("nagpur")
console.log(q1)
console.log(cities2)

// program 5
// unshift()
// action - add the element to first
// return - new length of array

let q2  = cities2.unshift("wardha")
console.log(q2)
console.log(cities2)

// program 6
//pop()
//action - removes the last element 
//return - return the same element
//[ 'wardha', 'pune', 'banglore', 'chennai', 'kolkata', 'nagpur' ]

let q3 = cities2.pop()
console.log(q3)
console.log(cities2)

//program 7
let q4 = cities2.shift()
console.log(q4)
console.log(cities2)

// program8
// includes()
// action - search for the element 
// return - boolean

let  cars = ["bmw","audi","mercedes"]
let q5 = cars.includes('Audi')
console.log(q5)

























