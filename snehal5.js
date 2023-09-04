//let x = 10
//let y = 5
   // calling  function
function calculator  (x,y){
    console.log ( x+y)
    console.log ( x-y)
    console.log ( x*y)
    console.log ( x/y)
    console.log ( x%y)
}

// calling the function 

calculator (4,5)
calculator (5,3)
calculator (15,6)

/////// function without parameter and without return type 
 
 function addA(){
    console.log (5+4)
 }
 addA()

 function addB (){
     console.log (6+4)
 }
addB ()
 ////////////////////////////////////////
 //////////////////////////////////////
   // function with parameter and without return type
     function addB (x,y){
        console.log (x+y)
     }
 addB(45,8)
addB(7,5)
////////////////////////////////// /
///////////////////////////////

 
function addC(x,y){
    console.log(x-y)
}
 
addC(45,8)
addC (85,6)
   
/////////////////////////////
////////////////////////////////////
 
// function with parameter and with return type 

 function addC (x,y){
    return  x+y
 }
 let q1=addC (12,5)
 console.log (q1)
console.log (q1-5)
console.log (q1*4)
console.log(q1/4)
console.log(q1%5)
 
 function addD(x,y){
 return x+y
 }
   
/////////////////////////////////////////
/////////////////////////////////////////
 //let x= 10
// console.log (x)
  //console.log(typeof x )


//let y= 55 
//consoel.log (y)
//console.log (typeof Y) 

 let x= true 
 console.log (x)
 console.log ( typeof x)
// true or false 
 
 let z=  " snehal"
  console.log (z)
console.log ( typeof z)


//////////////////////// 
//////////////////////////////
  // comparison 
   
  // ==,!=/ value
  //===,!== ?/ value and type
   
 console.log (typeof '10') // string 
console.log (10)// number

  console.log (10=='10')
  console.log (10!==10)
  console.log(10=='10')
console.log (10==10)
console.log (50!=='50')
console.log(15!="15")
console.log(14 !=='14') 
console.log(10===10)
console.log(5>5)
console.log(4>5)
console.log(4<5)
console.log(4<=1)
console.log(12<=2)

/////////////////////////////////////////
/////////////////////////////////////////////
 
// logical
 // && and ( true and true = true )(false and false = false, reaming all false )
    console.log (5==5 && 6!=6)
console.log (5==5&& 7!=5)
console.log (4!=4 && 4!=4 )
console.log (8==8 && 6 == 6 )
console.log (7 !=5 && 4 ==7)

//  || or 
 
// ( true and true = true  reamaning all true expect false false = false )
 console.log (5==5 || 6!=6)
console.log (5==5 || 7!=4)
console.log (4!==4 || 4!=4)
console.log (8==8 || 6==6)
console.log (7!==7 || 4==7)
console.log (4!=4 || 5 == 5)

//  ! not 
 //true ===> false
// false ==> true 
 console.log (!(6==6))
console.log (!(6!==6))

////////////////////////////////////////////////
///////////////////////////////////////////////
  
 // one output and multiple outcomews ............ condtional statment 
  
 let numT= 12 
  if ( numT>0&& numT <=5){
    console.log ('5 % discount ')
  }
 if (numT <=5 && numT <= 20){
    console.log(' 10% discount')
 }
  else{
    console.log (' incorrect input ')
  }
//////////////////////////////////////
////////////////////////////////////
let boolval = true 
   let marks = 65 
    switch (boolval) {
     case marks >75 :
        console.log('  grade A')
    break;
 case   marks >69:
     console.log('grade b ')
 break ;
  case  marks >90:
     console.log ( ' grade c')
  break ; 
  default : 
  console.log( ' fail please try again ')
  } 

  let boolVal = true
//let marks = 92
switch (boolVal) {
    case marks > 90:
        console.log('Grade A')
        break;
    case marks > 75:
        console.log('Grade B')
        break
    case marks > 65 && marks <=55 :
        console.log('Grade C')
        break
    default:
        console.log('Fail please try again')
}



/////////////////////////////////////
//////////////////////////////////
 
 //conditional statment 

 let s = 10
  let y = 50
   if ( s> y){
     console.log ('s is greater ')
   }

if (s <y){

     console.log(' y is greater')
}

//////////////////////////////////////
///////////////////////////////////
 
//  let p1 = 10
//  let q2 = 5 
// let r3= 50
//  if ( p1> q2 &7 q2 > r3 ){
//     console.log (' p is greater ')
//  }



///////////////////////////////////////
////////////////////////////////////////////
   


 // loop ??
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// loops 

// for 

// for(intialization ; conditionCheck ; increment / decrement){ 
//     // statement
// }


// program 1
// print 1 to 3  
for(let i = 1 ; i <= 3 ; i++){ // 2 //3   //4
    console.log(i) // 1 // 2 //3
}


// program2
// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2  //3 //4 // 5 // 6
    console.log(i) // 1 // 2 // 3 //  4 // 5
}

// program 3
// print hello 3 time 
for(let i = 1 ; i <= 3 ; i++){ //2 // 3 // 4
    console.log("hello")
}
// 1 <= 3 =====>  hello
// 2 <= 3 =====>  hello
// 3 <= 3 =====>  hello
// 4 <= 4 =====>  exist


// program 4
// print 5 to 1 using for loop
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i)  // 5 // 4 // 3 // 2 // 1
}


// program 5
// table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6  ---- 22
    console.log(i) // 2 // 4 ------- 20
}

// program 6 
// table of three in reverse
for(let i = 30 ; i >= 3 ; i = i - 3){
    console.log(i)
}

// program 7
// break statement with loop

for(let i = 1 ; i <= 5 ; i++){ // 2 // 3
    if(i == 3){
        break;
    }
    console.log(i) // 1 // 2

}

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    console.log(i) // 5 // 4 // 3
    if(i == 3){
        break
    }
}

for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // 8
    if(i == 8){
        break
    }
    console.log(i) // 2 // 4 // 6
}

// for loop with continue statement 
for(let i = 1 ; i <= 5; i++){ // 2 // 3 //4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 //5 
}

 
   //////////////////////////////////////////////////////////////////
   ///////////////////////////////////////////////////////////////////
   
    
          



















