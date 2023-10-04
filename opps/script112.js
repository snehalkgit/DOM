
// class Student {
//     firstname = " snehal"
//     lastname = "kamble"
//     adhar = 888
//     displayname() {
//         console.log(this.firstname + this.lastname)
//     }
// }

// class Teacher {
//     firstname = "monika"
//     lastname = "soyam"
//     adharno = 888
//     salary = 5000
//     displayname() {
//         console.log(this.firstname + this.lastname)
//     }
//     displaysalary() {
//         console.log(this.salary)
//     }
// }

// let snehal = new Teacher()
// console.log(snehal.firstname)
// console.log(snehal.lastname)
// console.log(snehal.adharno)
// console.log(snehal.salary)

// let monika = new Student()
// console.log(monika.firstname)
// console.log(monika.lastname)
// console.log(monika.adhar)

// ///program 2

// class Student1 {
//     firstname = "sarika"
//     lastname = "jain"
//     adharno = 1234
//     displayname() {
//         console.log(this.firstname + this.lastname)
//     }
// }

// class Teacher1 extends Student1 {
//     salary = 4000
//     displaysalary() {
//         console.log(this.salary)
//     }
// }
// let sarika = new Teacher1()
// console.log(sarika.firstname)
// console.log(sarika.lastname)
// console.log(sarika.adharno)
// console.log(sarika.salary)

// sarika.displaysalary()
// sarika.displayname()

// program 3 

class Student3 {
    constructor(fn, ln, adhar) {
        this.firstname = fn
        this.lastname = ln
        this.adharno = adhar
    }

    displayName3() {
        console.log(this.firstname + this.lastname)
    }
}

class Teacher3 extends Student3 {
    salary = 57678

    displaySalary3() {
        console.log(this.salary)
    }
}

let Snehal3 = new Teacher3('snehal', 'Kamble', 4564)
console.log(Snehal3.firstname)
console.log(Snehal3.lastname)
console.log(Snehal3.adhar)
console.log(Snehal3.salary)
Snehal3.displayName3()
Snehal3.displaySalary3()


// program 4 

class Student4 {
    constructor(fn, ln, adhar) {
        this.firstname = fn
        this.lastname = ln
        this.adharno = adhar
    }
    displayname(){
        console.log(this.firstname + this.lastname)
    }
}
 
 class Teacher4 extends Student4{
    constructor(fn,ln,adharno,salary){
        super(fn,ln,adharno)
        this.salary = salary
    }
    displaySalary(){
        console.log(this.Salary)
    }
 }
let  sneha = new Teacher4("sneha1","kamble1", 144,540000)
console.log(sneha.firstname)
console.log(sneha.lastname)
console.log(sneha.adharno)
console.log(sneha.salary)
sneha.displayname()



