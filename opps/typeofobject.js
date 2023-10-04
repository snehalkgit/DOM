// object leteral 

let snehu = {
    first_Name: "snehal",
    lastname: "kamble",
    age: 23,
    rollno: 45,
    display: function () {
        console.log(this.first_Name + this.lastname)
    }

}
let shubm = {
    first_Name: " samiksha",
    lastname: "sahare",
    age: 24,
    rollno: 48,
    display: function () {
        console.log(this.first_Name + this.lastname)
    }
}

console.log(snehu.first_Name)
console.log(shubm.first_Name)

snehu.display()
shubm.display()

// object constructor-----


function personA(fn, ln, age, roll) {
    this.first_Name = fn
    this.lastname = ln
    this.age = age
    this.rollno = roll
    this.display = function () {
        console.log(this.first_Name + this.lastname)

    }
}

let sarika = new personA("nikita", "kamble", 27, 5)
sarika.display()
console.log(sarika)



let praful = new personA("praful", "kale", 45, 666)
praful.display()
console.log(praful)


/// ES6 class ---------

class personB {
    constructor(fn, ln, age, roll) {
        this.first_Name = fn
        this.lastname = ln
        this.age = age
        this.rollno = roll
        this.display = function () {
            console.log(this.first_Name + this.lastname)
        }
    }
}



let q1 = new personB("monika", "soyam", 24, 55)
q1.display()
console.log(q1.first_Name)
console.log(q1)
console.log(q1.age)
console.log(q1.lastname)




