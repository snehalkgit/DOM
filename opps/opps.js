let info = {
    first_Name: "snehal",
    lastname: "kamble"
}

console.log(info.first_Name)
console.log(info.lastname)

info.city = "hinganghat"
console.log(info)
console.log(typeof info)



class personA {
    set first_Name(fn) {
        this.firstname = fn
    }
    get first_Name() {
        return this.firstname
    }
    set last_name(ln) {
        this.lastname = ln
    }
    get last_name() {
        return this.lastname
    }

}

let name = new personA()
name.first_Name = "snehalK"
console.log(name.first_Name)


name.last_name = "kamble"
console.log(name.last_name)



//program 2

class personB {
    constructor(fn, ln, age, rolln) {
        this.firstName = fn
        this.lastname = ln
        this.age = age
        this.rollno = rolln
    }
    displayName() {
        console.log(this.firstname + this.lastname)
    }
    displayAge() {
        console.log(this.age)
    }

}

let A = new personB("snehal", "kamble", 23, 1)
let B = new personB("monika", "soyam", 24, 2)
let C = new personB("pritii", "lohkare", 25, 3)
let D = new personB("rishi", "maharaj", 26, 4)
A.displayAge()
B.displayName()

let students = [A, B, C, D]
console.log(students)

students.forEach(function (el) {
    el.displayName()
    el.displayAge()
})

console.log(students)
students.forEach(function (el) {
    el.city = "mumbai"
    console.log(students)
})

let total = students.reduce(function (acc, el) {
    return acc + el.displayName()
})

console.log(students.length)

let studentsC = {
    students1: new personB("snehal", "kamble", 23, 1),
    students2: new personB("monika", "soyam", 24, 2),
    students3: new personB("pritii", "lohkare", 25, 3),
    students4: new personB("rishi", "maharaj", 26, 4)

}
for (let key in studentsC) {
    //console.log(key)
    studentsC[key].displayName()
}
