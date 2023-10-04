let x = 10
let y = true
let first_Name = "snehal"
let names = ["snehal", "sarika", "samiksha"]
let info = {
  first_Name: "snehal",
  last_Name: "kamble"
}
let info2 = {
  1: "snehal",
  2: "kamble"

}

let mapA = new Map()
let MapB = new Map(
  [1, "snehal"]
  [2, "srika"]

)
//key:value 
//property : value 

//diff between  object and map 

// OBJECT  KEYS OR PROPERTIES ARE ALWAYS STRING 
// MAP KEYS  CAN BE ANY DATA TYPE 

let mapC = new Map();
console.log(mapC)

let mapD = new Map([
  [1, "admin"],
  [2, "support"],
  [3, "manager"]

])
console.log(mapD)
// major diffrence between ojbect and app 

//map key can be any dta type 
// object -- properties and methods 

mapD = new Map([
  [1, "admin"],
  [2, "support"],
  [3, "manager"]
])

// size of map 
let q1 = mapD.size
console.log(q1)

//set ()

mapD.set(4, "customersupport")
console.log(mapD)

// get()

let q2 = mapD.get(1)
console.log(q2)

//has() --  return booolen value (true  of false )
let q3 = mapD.has(2)
console.log(q3)


let q4 = mapD.has(33)
console.log(q4)

// clear -- full clear empty 

// mapD.clear()
// console.log(mapD)



//delete 

let q5 = mapD.delete(2)
console.log(mapD)

mapD.forEach(function (v, k) {
  console.log(v, k)
})

//keys----
for (let key of mapD.keys()) {
  console.log(key)
}
///values----

for (let val of mapD.values()) {
  console.log(val)
}


//entries----
for (let [k, v] of mapD.entries()) {
  console.log(k, v)
}


let mapE = new Map()
let mapF = new Map([
  ['fullname', "chinmay"],
  [true, "can drive"],
  [1, "role"]
])
console.log(mapE)
console.log(mapF)

console.log(mapF.size)
mapF.set(2, "customer")
mapF.get(2)
mapF.delete(2)
mapF.clear()
mapF.has()
mapF.forEach(function (v, k, m) {
  console.log(v, k, m)
})

for (let key of mapF.keys()) {
  console.log(key)
}

for (let key of mapF.values()) {
  console.log(val)
}

for (let [k, v] of mapF.entries()) {
  console.log(k, v)
}
console.log(mapF[0])

//set
//defination a set of array 
// let arrayA =["snehal","samiksha","rishi"]
// console.log(arrayA)
//  let setA = new set(arrayA)
//  console.log(setA)

//  //defining a blank set 
//  let setB = new set()
//  console.log(setB)

//  setB.add('PUNE')
//  setB.add("NAGPUR")
//  Cconsole.log(setB)

let setC = new Set(["a", "b", "c", "d"])
console.log(setC)
//delete----

setC.delete("a")
console.log(setC)


// clear--
setC.clear()
console.log(setC)


let q6 = setC.has("b")
console.log(q6)

/////////////////
let setB = new Set([
  {
    first_Name: "snehal",
    age: 23
  }
])
for (let k of setB.keys()) {
  console.log(k)
}

for (let v of setB.values()) {
  console.log(v)
}
for (let [k, v] of setB.entries()) {
  console.log(k, v)
}


let SetD = new Set()
let dd = SetD.size
console.log(dd)



