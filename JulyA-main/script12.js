

// for 


// for(intialization ;conditionCheck ; increment/decrement){
//     // statements
// }


// program 1
// for(let i = 1 ; i == 5 ; i++){
//     console.log("hello")
// }

// program 2
for (let i = 1; i <= 3; i++) { // 2 // 3 // 4
    console.log(i) // 1 // 2 // 3
}

// program 3

for (let i = 1; i <= 5; i++) { //2 // 3
    if (i == 3) {
        break
    }
    console.log(i) //1 // 2
}

// program 4
for (let i = 1; i <= 5; i++) {  // 2 // 3 // 4 // 5 // 6
    if (i == 3) {
        continue
    }
    console.log(i)  // 1  // 2 // 4 //5
}

// -------------------------------------------------------->

// intialization;
// while(condition){
//     // statement
//     // increment / decrement
// }

// program 1
let q1 = 1
while (q1 <= 3) {
    console.log(q1) //1  // 2 // 3
    q1++ // 2  // 3 // 4
}

// program 2
// print "hello" 3 times
let q2 = 1
while (q2 <= 3) {
    console.log('hello') // "hello" , "hello" , "hello"
    q2++ // 2 // 3 // 4
}

// program 3
// print 5 to 1
let q3 = 5
while (q3 >= 1) {
    console.log(q3) // 5 // 4 // 3 // 2 // 1
    q3--;  // 4 // 3 // 2 // 1 // 0
}

// program 4 
// print table of 2
let q4 = 2
while (q4 <= 20) {
    console.log(q4) // 2 // 4
    q4 = q4 + 2  // 4 // 6 --------------------22
}

// program 5
let q5 = 50
while (q5 > 6) {
    console.log(q5)
    q5 = q5 - 5
}



















