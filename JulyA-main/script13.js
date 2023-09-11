
//intilization 

// while(condition){
    // statements 
    //  increment / or decrement
//}

// program 1 
// print 1 to 5 using while loop
let t1 = 1
while(t1 <= 5){
    console.log(t1) //1 // 2 //3 // 4 // 5
    t1 ++ // 2 // 3 // 4 // 5 // 6
}

// program 2 print 1 to 3

let t2 = 1
while(t2 <= 3){
    console.log(t2) // 1 // 2 // 3
    t2 ++ // 2 // 3 // 4
}

// program 3 
let t3 = 1 
while(t3 <= 3){
    console.log('hello')  // "hello" // "hello" // "hello"
     t3 ++ // 2 //3 // 4
 }

 //program 4
 // print 5 to 1 using  while loop

let t4 = 5
while(t4 >= 1){
    console.log(t4)
    t4 --
}

//program 5
// table of 2

let t5 = 2
while(t5 <= 20){
    console.log(t5)
    t5 = t5 + 2
}

// program 6
// table of 5 in reverse 
// let t6 = 50 
// while(t6 >= 5){
//     console.log(t6)
//     t6 = t6 - 5
// }

// program 7
// break statement with while 

let t7  = 5
while(t7 >= 1 ){
    if(t7 == 3){
        break
    }
    console.log(t7)  // 5 // 4
    t7 --  // 4 // 3
}

let t8 = 1
while(t8 <= 5){
    console.log(t8) // 1 //2 // 3
    if(t8 == 3){
        break
    }
    t8++ // 2 // 3
}

// program 8 
// continue statement with while
let t9 = 1
while(t9 <= 5){
    if(t9 == 3){
        t9 ++  // 4
        continue
    }
    console.log(t9) //1 // 2 // 4 // 5
    t9 ++ //2 // 3 // 5 // 6
}











