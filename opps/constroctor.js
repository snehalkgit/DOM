let info = {
firstName : "snehal",
lastName : "kamble",
age : 23 , 
rollNo : 8
}

 let sam = {
    firstName : "samiksha",
    lastName: "sahare",
    age : 24,
    rollNo : 2
 }

  // 100 ---- 4000 lines 
   class person {
    firstName;
    lastName ;
    age ; 
    rollNo;

   }
    let sam1 = new person ()
    console.log(sam1)
     sam1.firstName = "samiksha"
     sam1 . lastName = "sahare"
     sam1.age = 24 
     sam1.rollNo = 2
     console.log(sam1)


     class personB {

        constructor(fn,ln,age,rollNo){
this.firstName = fn
this.lastName= ln
this.age = age
this.rollNo = rollNo
        }

     }
      let samb= new personB ("samikshab","sahareB",24,2)
      let snehalb = new personB("snehalb","kambleb",23,8)
      console.log(sam1)
      console.log(snehalb)

      