/*
//reverse the array 

let city = ["pune","mumbai","Nagpur","Delhi","banglore"]
let a = city.reverse()
console.log(a)
console.log(city)


//sort()
let b = city.sort()
console.log(b)
let marks = [1256,254,236,86,456,6665]
let a1 = marks.sort()
console.log(a1)

// concat    joining 2 array together
let a12=[11,22,33]
let a13=[44,55,66]
let a14=a12.concat(a13)
console.log(a14)

//join()    to join each element together using anything like space, symbols
let info = ["tanushree","verma",5646598464]
let a15=info.join('_')
console.log(a15)

let a16=info.flat(1)
console.log(a16)       // ['tanushree', 'verma', 5646598464]
*/

/****************************************************************************** */
let vegetable = ["mushroom","potato","cauliflower","spinach","brinjal"]
console.log(vegetable.slice(2))
console.log(vegetable.slice(1,3))
console.log(vegetable.slice(2,1))  // doesnt give backward array
console.log(vegetable.slice(4))
console.log(vegetable.slice(0,3))

console.log(vegetable.splice(2))
console.log(vegetable.splice(1,2))
console.log(vegetable.splice(2,1))
console.log(vegetable.splice(5,4))
console.log(vegetable.splice(0,2))



let mark = [25,26,1,55,14,36,89,70,56]
let q18 = mark.fill(99,2,5)
console.log(q18)


/********************************************************* */

let info = ["chinmay","deshpande",23,55]
info[1]= "dani"
info.push("city")
info.unshift("Mr")
console.log(info)



/********************************************************* */

let info2 = {
    firstname: "Tanushree",
    lastname: "Verma",
    age: 25,
    RollNo: 7
}

// retrive (dot notation and bracket notation)
console.log(info2.firstname)
console.log(info2['firstname'])


// add 
info2.city="Nagpur"
info2['language']="hindi"
console.log(info2)

//update
info2.firstname="tanu"
info2['lastname']="verma"






