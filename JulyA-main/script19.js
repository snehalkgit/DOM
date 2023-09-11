// program 1
// let info = ["chinmay","deshpande",67,55]
// // retrtive 
// console.log(info[1])

// // update 
// info[1] = "dani"
// console.log(info)

// // add 
// info.push("pune")
// info.unshift("Mr")

// // delete 
// info.pop()
// info.shift()
// info.splice(1,1)

// program 2

let info = {
    firstName:'chinmay',
    lastName:"deshpande",
    age:55,
    rollNo:66
}

// object does not stores the value by index
// retrive (dot notation and bracket notation)
console.log(info.firstName)
console.log(info['lastName'])
// update (dot notation and bracket notation)
info.firstName = "tanmay"
info['lastName'] = "dani"
console.log(info)
// add (dot notation and bracket notation)
info['city'] = "pune"
info.lang  = "hindi"
console.log(info)
// delete (dot notation and bracket notation)
delete info.firstName
delete info['lastName']

// for loop
//           0  1  2   3 4
let marks = [11,22,33,44,55]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    console.log(marks[i])
}


let vehicle = {
    //prop:"value"
    color:"red",
    regNo:123
}
console.log(vehicle)
for(let k in vehicle){
    console.log(k,vehicle[k]) 
}
//       0  1   2  3
let j = [11,22,33,44]
console.log(j.at(1))

let q1 = j.fill('chinmay',1,3)
console.log(q1)

let names = ["chinmay","sarika","ritu","ram"]

// names.splice(1,2)
names.splice(1,2,"sham","sita")
console.log(names)







