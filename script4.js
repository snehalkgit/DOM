let city = ["Pune", "banglore","chennai", "hydrerabad", "mumbai"]

// length 
let w1 = city.length
console.log(w1)

//push()
let w2 = city.push("nagpur")  // adds the element at the last
console.log(w2)
console.log(city)

let w3 = city.pop()  /// delete the last element
console.log(w3)
console.log(city)

let w4 = city.shift()   //delete the first element
console.log(w4)
console.log(city)

let w5 = city.unshift("Agra")
console.log(city)

let w6 = city.includes("agra")
console.log(w6)// false....as in strings we have wrote Agra and asked for agra





/*

----------
-
--------------
-----------
------
*/




/*
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33]
//  [34,33,32,31]
for(let i = 0 ; i < birthYear.length ; i++)
{
 console.log(i)
 console.log(birthYear[i])
 console.log(2023-birthYear[i])
 let a = 2023-birthYear[i]
 ages.push(a)
}
console.log(ages)
*/
/*
let marks = [22,33,44,40,45,67,29,56,68,53,12]
let above40 = []
    for(let i = 0 ; i < marks.length ; i++)
    {
    //console.log(i)
    console.log(marks[i])
    if(marks[i]>40)
    {
        above40.push(marks[i])
    }
    }
console.log(above40)



//program 3
let num = [11,22,33]
let total=0
for(let i=0; i<num.length;i++)
{
    total=total+num[i]
}
console.log(total)
*/


let names = ["Pooja","Aarti","saraswati","Bhakti"]
console.log(names)
console.log(names[2])
console.log(names.length)

for(let i=0;i<4;i++)
{
    console.log(names[i])
}

console.log(names.length-1)
for(let i=names.length-1;i>=0;i--)
{
    console.log(names[i])
}


let a1 = names.push("divya")
console.log(a1)
console.log(names)


let a2 = names.pop()
console.log(a2)
console.log(names)

let a3 = names.shift()
console.log(a3)
console.log(names)


let a4 = names.unshift("tanu")
console.log(a4)
console.log(names)

let a5 = names.includes("tanu")
console.log(a5)      //return boolean value 

//******************************************************************** 


let array = ["a12","a13","a14","a15","a16","a17","a18","a19","a20"]
for(let i=array.length;i>=0;i--)
{
    console.log(array[i])
}


let birthyear = [1997,1998,1999,2000]
let age = []
for(i=0;i<birthyear.length;i++)
{
    console.log(i)
    console.log(birthyear[i])
    let a = (2023-birthyear[i])
    console.log(2023-birthyear[i])
    age.push(a)

}
console.log(age)




//***************************************** */

let marks = [50,40,60,10,20,90,30,80,70,100]
let above50 = []
for(let i=0;i<marks.length;i++){
    if(marks[i]>=50)
    {
        above50.push(marks[i])
    }
}
console.log(above50)




/********************************************** */
// map used for whenn we need to work on each element
let number = [11,22,33,44,55,66,77,88,99,100]
let aa = number.map(function(el,index,arr)
{
  //console.log(el,index,arr)
  return el/11;
})
console.log(aa)    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 9.090909090909092]



// filter 
let bb = number.filter(function(el,index,arr){
    return el > 50
})
console.log(bb)      //[55, 66, 77, 88, 99, 100]


let total = [22,33,44,55]
let a22 = total.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(a22)

