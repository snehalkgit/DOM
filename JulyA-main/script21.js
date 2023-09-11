let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

// Human 
// Properties --- color , gender , height weight 
// Method - walk() , talk()






// Object --- 
// Properties and methods

// property - length 
let city = "pune"
console.log(city.length) // 4


// toUpperCase()
let city2 = "india"
let city2a = city2.toUpperCase()
console.log(city2a)

// toLowerCase()
let city3 = "Bhopal"
let city4 = city3.toLowerCase()
console.log(city4)

// includes()

let city5 = "indore"
let q1 = city5.includes('i')
console.log(q1)

let q2 = city5.includes('ind')
console.log(q2)

// indexOf()
//   0      1     2    3    4    5  6 
//   j      a     i    p    u    r  a
let city6 = "jaipura"
let q3 = city6.indexOf('a',2)
console.log(q3)

let q4 = city6.indexOf('A')
console.log(q4)


let city7 = "nagpur"
let q5 = city7.startsWith('n')
let q6 = city7.startsWith('nag')
let q7 = city7.startsWith('r')
console.log(q5)
console.log(q6)
console.log(q7)


let city8 = 'udaipur'
let q8 =city8.endsWith('r')
let q9 =city8.endsWith('pur')
let q10 =city8.endsWith('puR')
console.log(q8)
console.log(q9)
console.log(q10)


let sentence = "I am learning javascript"
let q11 = sentence.replace("javascript","python")
console.log(q11)

let city11 = " goa"
console.log(city11.length)
let q12 = city11.trimStart()
console.log(q12.length)

let city12 = " goa "
console.log(city12.length)
let q13 = city12.trimEnd()
console.log(q13.length)


let city13 = " goa "
console.log(city13.length)
let q14 = city13.trim()
console.log(q14.length)

// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// startsWith()
// endsWith()
// trim()
// trimStart()
// trimEnd()
// replace()

let firstNamee = "Chinmay";
let w1 = firstNamee.toUpperCase()
console.log(w1)


let w2 = firstNamee.toLowerCase()
console.log(w2)

let info = "applemangobananagrapes"
let w3 = info.includes("go")
console.log(w3)


let flower = "lotus"
// 0   1   2   3   4
// l   o   t   u   s
console.log(flower[0])
let w4 = flower.indexOf('t')
let w5 = flower.indexOf('T')
console.log(w4)
console.log(w5)


let flower2 = "rose"
let w6 = flower2.startsWith('r')
let w7 = flower2.startsWith('ros')
console.log(w6)
console.log(w7)


let w8 = flower2.endsWith('e')
let w9 = flower2.endsWith('Se')
console.log(w8)
console.log(w9)

let flower3 = " lily";
console.log(flower3.length)
let flower4 = flower3.trimStart()
console.log(flower4.length)


let flower5 = " sunflower "
// console.log(flower5.length) 
// flower5 = flower5.trimEnd()
// console.log(flower5.length)
flower5 = flower5.trim()
console.log(flower5.length)


let r  = "i am learning js"
let flower6 = r.replace('js',"python")
console.log(flower6)


let firstName3 = "tanmay"
let lastName3 = "dani"
let q122 = firstName3.concat(lastName3)
console.log(q122)


let info5 = ["chinmay", "deshpande",7709192441]
let q123 = info5.join("@")
console.log(q123)

let info7 = "i am learning javascript"
//  ["i,"am","learning","javascript"]
let q1234 = info7.split(" ")
console.log(q1234)

let q12345 = info7.split("a")
console.log(q12345)
//["i ","m le","rning j","v","script"]



let birthCity = "chandrapur"

// 0   1  2   3   4   5  6   7  8   9   
// c   h  a   n   d   r  a   p  u   r
//-10 -9 -8  -7  -6  -5 -4  -3  -2  -1

console.log(birthCity.slice(2))
console.log(birthCity.slice(2,9))
console.log(birthCity.slice(2,-3))
console.log(birthCity.slice(-9,-3))
console.log(birthCity.slice(-9,6))
console.log(birthCity.slice(-1,-5))

















































