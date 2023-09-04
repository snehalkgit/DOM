//conditional statment 
//one input and multipal outcome 

//numT > 0 && numT <=5 ----> 10 % discount 
//num T > 5 &&  num T <=10 ----> 20% discount 
// numT > 10

// if (condtiona){
//    // statments

//}

/// program 1 
let  numT = 5

 if (numT > 0 && numT <= 5){
    console.log("10 % discount")
 }

if (numT >5 && numT <=10){
    console.log ("50 % disocunt ")
}
if  (numT >10) {
    console.log ( "40 % discount ")
}

/// program 2 

let numT2 = 15

if ( numT2> 0 && numT2 <= 5){
    console.log ("10 % discount")
}
 if (numT2 > 5 && numT2 <= 10 ){
    console.log ("5 % discount" )
 }
else  if (numT2 >10){
    console.log ("20 % discount  ")
 }
  else { 
    console.log (' incorrrect input ')
  }



///// program 3 


//let marks = 5

 // if ( marks >90){
  ///  console.log('grade A)
 //}

// if (marks > 75){
 //   console.log ( 'grade b')
//}
 
  // if (marks > 65){
  //  console.log('grade C)
  //}
 


 //if  (marks > 90 ){
   // console.log ('Grade A')
//}
 //if  (marks > 69){ 
  // console.log('grade B')
 ////}
//if ( marks >56 ) {
 //console.log (' grade C')
//}

  //{
 /////  console.log(' fail...')
  // }


 let marks = 50
  if ( marks > 60){
    console.log ( ' grade A ')
 }
 if ( marks < 56 ){
    console.log ('grade b')
 }

if ( marks < 65 ){
    console.log ( 'grdae c')
}

//program 4 

let a = 15
let b = 5
 if (a>b){
    console.log ( ' a is grater ')
 }
  else {

    console.log ( ' b is grate')
  }

let c = 22
let d = 55
 if ( c >  d ){
    console .log ( 'c is garter')
 }
else {
    console.log ( 'd is grater ')
 }

 let x = 10
 let y = 20
 let z = 30
  if ( x > y &&  x > z){
    console.log ('x is grater ')
}

else if ( y > x & y  > z){
    console.log ('x is grater ')
}
 else {
    console.log ( 'z is grater ')
 }

