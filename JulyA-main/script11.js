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
for(let i = 1 ; i <= 3 ; i++){ // 2 //3 //4
    console.log(i) // 1 // 2 //3
}


// program2
// print 1 to 5

for(let i = 1 ; i <= 5 ; i++){ // 2 //3 //4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
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























// while



