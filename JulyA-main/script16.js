// let names = ["chinmay","ram","sham","sarika","swapnil"]
// let q1 = names.push("rohit")
// console.log(q1)

// let q2  = names.unshift('ashish')
// console.log(q2)
// console.log(names)

// let q3 = names.pop()
// console.log(q3)
// console.log(names)

// let q4 = names.shift()
// console.log(q4)
// console.log(names)

// let q5 = names.includes('ram')
// console.log(q5)


// program 1
//                0    1    2    3
let birthYear = [2000,2001,2002,2003]
let ages = []
//[23,22,21,20]
for(let i = 0 ; i < 4; i++){  // 1 // 2 // 3 
   // console.log(i) // 0 // 1 // 2 // 3
   //console.log(birthYear[i])
   //console.log(2023 - birthYear[i])
   let s = 2023 - birthYear[i] 
   ages.push(s)
}
console.log(ages)

// program 2 

//                 0    1    2    3
let birthYears = [2000,1999,1998,1997]
let ages2 = []
// [23,24,25,26]
for(let i = 0 ; i < birthYears.length ; i++){
    // console.log(i)
    // console.log(birthYears[i])
    //console.log(2023 - birthYears[i])
    let t = 2023 - birthYears[i]
    ages2.push(t)
}
console.log(ages2)


// program 3
//             0  1  2  3  4
let  marks = [33,44,56,77,44]
//[56,77]
let above50 = [] // [56,77]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)









