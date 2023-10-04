// // object literal ------

//  let amol = {
//      first_Name : "snehal",
//      lastname :"kamble",
//      age : 24,
//      rollno : 56,
//     display:function(){
//         console.log(this.first_Name + this.lastname)
//     }
//  }
//  console.log(amol.first_Name)
//  console.log(amol.lastname)


/// function constructor 

// function person(fn,ln,age,roll) {
//     this.first_Name = fn
//     this.lastname = ln
//     this.age = age
//     this.rollno = roll
//     this.displayName = function(){
//         console.log(this.firstname + this.lastname)

//     }
// }

let amolA = new person("amol", "rao", 44, 55)
// let snehalA = new person("samiksha", "sahare", 45, 66)

// console.log(amolA)
// console.log(snehalA)


/// EVERY OBJECT HAS __PROTO__===PARENT.PRTOTYPE


// console.log(amolA.__proto__===person.prototype)
// console.log(snehalA.__proto__===person.prototype)


// console.log(amolA)
// console.log(snehalA)


//  person.prototype.displayName = function (){
//     console.log(this.firstName  + this.lastName)
//  }


//  person.prototype.country = "india"
//  console.log(amolA.country)
//  amolA.displayName()

// console.log(amolA instanceof person)
// console.log(snehalA instanceof person)



///ES6------



class PersonB { 
    constructor(fn,ln ,ag, rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = ag 
        this.rollNo = rollNo
     this.displayName = function(){
            console.log(this.firstName + this.lastName )
         }
    }
    displayName(){
        console.log(this.firstName + this.lastName) 
     }
}

 let sarikaA = new person ("sapana", "kale",45,25)
console.log(sarikaA)

sarikaA.displayName()
console.log(amolA.__proto__ === PersonB.prototype)
console.log(sarikaA.__proto__ === PersonB.prototy)

