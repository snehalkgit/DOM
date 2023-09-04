///dry  dont repeat yourself
//10 pairs .... 50 lines 
//program 1

function calculator (x,y){

console.log (x+y)
console.log (x-y)
console.log (x*y)
console.log (x/y)
console.log (x%y)
}
//calling the function 

//calculator (6,4)
//calculator (5,98)

//function without parameter and without return type
 
function addA(){
    console.log (8+5)
}

//ddA()

//program with parameter and without return type 

function addB(x,y){
    console.log(x+y)
}

//addB( 8,5)
//addB (54,8)

// program 2

// 100 = given 
// 100- shows

// function with parameter and return type 
function addC (x,y){
    return x+y
}
 let q1 = addC(45,8)
 console.log( q1)
 console.log (q1+8)
console.log(q1*5)
console.log(q1/7)
//console.log(q1%7)

// type
// introvert      // extrovert 
 
 // human 
 // proprties  - age , colour , height ,gender  
 // method - talk  (), walk ()
   
let x = 10 
console.log (x)
//console.log (typeof x)

let y =true 
console.log (y)
console.log ( typeof Y )

// ture of false 
 
let z= " snehal"
console.log(z)
console.log (typeof Y)

// ',""
 // "a , "1 , "# "

// comparison
// entity < entity ====> bollean 
// <, >, <=< ,>=
// ==, !=, // value 
// === !==// value and type
 
console.log(typeof '10')// string 
console.log (typeof 10) // number 

console.log (20 =='20')
console.log ( 15 ==='15')
console.log(15!==15)
console.log(20!==20)
console.log(5===5)
console.log(8!='8')
console.log(8<4)
console.log(8>4)
console.log(8>=4)
console.log(8<=4)
console.log(9>=9)
//console.log(5<=5)

// logical
 // && (and )
  
// ture and true = true 
// false and true= false 
// true and false = false
// false and false = false
  

console.log (4 == 4 && 5!=6 )
console.log(4 != 4 && 6 !=5 )
console.log(4==4 && 5== 5)
//console.log(4!= 4 && 5== 5)
 
// || (or )
 console.log(4==5|| 4!=3)
console.log(4!=5 || 6 != 6)
//console.log (2==2 || 5 == 5)
console.log ( 2!= 3 || 8== 6)
console.log ( 5!=5 || 6 == 5)

// ! ( not )
 // true ===> false 
// false ===> true 
 console.log ( ! ( 3==4))
//console.log( !( 5!= 6))

// condtional statment 
// one output and mmultiple outcome 
//numT > 0 && numT <= 5 -->10 % discount 
//numT > 6 && numT <= 10 --> 20% discount 
//numT >10                --> 30 % discount 

// if ( condition ){

// statment 
//}
 // program 1 

let numT = 10 
if (numT > 5 && numT <= 5){
console.log ("10 % discount ")
}
 if (numT > 6 && numT <= 20){
console.log ( " 20 % discount ")
 }
    
 if (numT > 10 ){
 console.log ( "30% discount ")
 }

/////////////////////////////////////////////////////
//////////////////////////////////////////////
  // program 2 
  let numT2 = 11 
   if  ( numT2 >2 && numT2 <= 5 ){
    console.log ( "50% discount ")
   }
 else if ( numT2> 6 && numT2 <= 10 ){
    console.log ( " 20 % discoun")
 }

 //////////////////////////////////////////
 //////////////////////////////////////////

// Program 3 
  let marks = 10

   //if ( marks > 90){
    console.log ( ' grade A ')
  // }

//if ( marks >78 ){
    console.log ( 'grade B')
//}
  //if ( marks > 64 ){
    console.log ( ' grade c')
//  }

///////////////////////////////
///////////////////////
//  program 5 
   let a = 10 
   let b = 5
    if (  a < b ){
        console.log ( " a is grater")
    }
 else {
    console.log ( ' b is grater ')
 }
 










