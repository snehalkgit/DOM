//                0        1        2       3       4       5
let names  = ["chinmay","sarika","poorva","ram","satish","mitesh"]
// names.pop()
// console.log(names)

// names.shift()
// console.log(names)
//names.splice(startPosition,numberOfElementTobeDeleted)

// names.splice(2,2)
// console.log(names)

// names.splice(2,2,"abhisha","komal")
// console.log(names)

//              0       1         2
let cities = ["pune","jaipur","banglore"]
let r1 = cities.at(1)
console.log(r1)


// fill()
//             0  1  2   3  4  5  6  7  8  9
let numbers = [11,22,33,44,55,66,77,88,99,100]
let q1 = numbers.fill("chinmay",2,8)
console.log(q1)


//-----------------------------------------------------


let info = ["chinmay","deshpande",13,44]

// Object 

let info2 = {
    // prop  : val
    firstName:"chinmay",
    lastName:"deshpande",
    age:13,
    rollNo:44
}

// Object does not stores the value by index
//console.log(info2[0])
// retrive dot notation and bracket notation 

console.log(info2.firstName)
console.log(info2['age'])
// upate  dot notation and bracket notation 

info2.firstName = "tanmay"
info2['age'] = 32
console.log(info2)

// add   dot notation and bracket notation

info2.city = "pune"
info2['langauge'] = "marathi"
console.log(info2)

// delete  dot notation and bracket

delete  info2.firstName
delete  info2['lastName']
console.log(info2)


// program 3

let vehicle = {
    model:"q4",
    color:"red"
}

// retrive

console.log(vehicle.model)
console.log(vehicle['color'])

// update
vehicle.color = "blue"
vehicle['model'] = "q6"
console.log(vehicle)

// add
vehicle.regNo = 123
vehicle['city'] = "jaipur"
console.log(vehicle)

// delete

delete vehicle.color
delete vehicle['city']

console.log(vehicle)









