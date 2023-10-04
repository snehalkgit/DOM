//  class student{
//      firstname = "snehal"
//      lastname = "kamble"
//      addharcard = 145
//      displayname(){
//         console.log(this.firstname + this.lastname)
//      }
//  }
//   class  teacher {
//      first_Name = " monika"
//      last_name = "soyam"
//      adharcard = 123
//      salary = 8000
//      displayname(){
//         console.log(this.first_Name + this.last_name)

//      }
//      displaysalary(){
//         console.log(this.first_Name + this.last_name)
//      }
//   }

// let snehal = new student()
// console.log(snehal.firstname)

//  let monika = new teacher()
//  monika.displaysalary()


  // program 2 
  

    class student {
       constructor(fn,ln,adhar){
         this.firstname = fn
         this.lastname = ln 
         this.adharno = adhar 
       }
 displayname(){
   console.log(this.firstname + this.lastname)
 }
    }

    class teacher extends student{
      constructor (fn,ln,adhar,salary){
         super(fn,ln,adhar)
         this.salary = salary 

      }
      displaysalary(){
         console.log(this.salary)
      }
    }

     let snehal = new teacher ("snehal","kamable",24,50000)
     console.log(snehal.firstname)
     console.log(snehal.lastname)
     console.log(snehal.salary)
     console.log(snehal.adhar)

     snehal.displayname()
     snehal.displaysalary()
     

   