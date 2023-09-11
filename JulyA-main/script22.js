
//              0        1        2      3
let names = ["chinmay","shirsh","ram","satish"]

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [x1,x2,x3,x4] = names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

// program 2
//               0      1         2         3
let cities = ["pune","banglore","kolkata","sydney"]
let [n1,n2,n3] = cities
console.log(n1)
console.log(n2)
console.log(n3)

// program 3
//                   0                    1
//               0      1          0          1
let states = [["pune","nagpur"],["kolkata","chennai"]]
let [[c1,c2],[c3,c4]] = states
console.log(c1)
console.log(c3)
console.log(c4)
console.log(states[0][1])

// program 4
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:33
}

let a1 =  info.firstName
let a2 =  info.lastName
let a3 =  info.age

console.log(a1)
console.log(a2)
console.log(a3)

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)


// program 5
let family = {
    fullName:"chinmay deshpande",
    parent:{
        father:"shirish deshpande",
        mother:"kanchan deshpande"
    }
}
let {fullName:m1,parent:{father:m2,mother:m3}} = family
console.log(m1)
console.log(m2)
console.log(m3)







