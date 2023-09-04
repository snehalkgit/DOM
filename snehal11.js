//program 1
let score= 10
console.log(10)
  //let  y = 600
 //console.log(y)
    

 /// ptrogram 2 
  let s  = 10 
  let t = 5 
   console.log ( s+t )
   console.log (s-t)
   console.log ( s*t)
   console.log (s/t)
   console.log (s%t)



/// DRY 
 // program 3
 // 10 pairs . 50 lines 

   function calculator (x,y)  {
    console.log ( x+y)
    console.log(x-y)
    console.log( x* y)
     console.log(x/y)
     console.log(x%y)
 
    }

// calling the function 
 calculator ( 5,4)
 calculator ( 6,8)


// program 4 

// function without pramater and without return type 
 function addA(){
    console.log(9+9)
 }

addA( )

//// program 5 
 // function with   parameter and  without return type 
  function addB (x,y){
    console.log (x+y)
  }
  addB (78,3)
  addB ( 5,8)
/// proggram 6 
 // function with prameter and with return type 
 function addC (x,y){
    return  x+y
}
 let q1= addC (14,7)
console.log(q1)
console.log(q1+4)
console.log(q1-8)
console.log(q1*4)
console.log(q1/2)
console.log(q1%3)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////// 

//// types  
  //program 7 

   let x=10
   console.log(x)
   console.log(typeof x )
     
   let k = 15
     console.log(typeof k )
     

       let d = true 
       console.log(d)
       console.log(typeof d)

let z= "snehal"
console.log(z)
console.log(typeof z)

/// comparsion 
 //entity < entity =====> bollean
  // < , !== // value 
  // == , !== // value and tpe 
    console.log (typeof '10')//string 
    console.log(typeof 10)// number
 console.log(10 =='10')
console.log(10==='10')
console.log(10!=='10')
console.log(10!==10)
console.log(10===10)
console.log(10!=='10')
console.log(10===10)
 console.log(6!=6)
console.log(7>4)
console.log(7>5)
console.log(7>=5)
console.log(2<=3)
console.log(7<=7)
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
 //conditional stament 

 //one input muliple outcome 
 let numT = 10
   if (numT > 4 && numT <=5 ){
    console.log("10%  discount ")
   }   

if ( numT >6 && numT <= 10){
    console.log( '20 %  discount ')
}
 if ( numT< 10 && numT <= 6){
console.log ( '30 % discount ')
 }
 // program 8
   let  marks = 60

    if ( marks > 80){
        console.log( ' grade A')
    }
  if ( marks >50 ){
console.log (' grade B')
  }
if ( marks > 55 ){
    console.log( ' garde  C')
} 
///// program 9 

let a= 10 
 let b = 5
     
 if ( a> b){
     console.log ( 'a is grater ')
 }

else {
    console.log (' b is grater ')
} 