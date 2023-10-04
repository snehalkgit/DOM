// //destructure 

// //array
//  let info = ["snehal","kamble","monika"]
//   let a1 = info[0]
//   let b1 = info[1]
//   let c1 = info[2]
// console.log(a1,b1,c1)
// console.log(a1)
// console.log(b1)
// console.log(c1)

// let [s1,s2,s3]=info  // destructuree
// console.log(s1,s2,s3)
// console.log(s1)
// console.log(s2)
// console.log(s3)

//  let[b11,b12,b13]=info 
//  console.log(b11)
//  console.log(b12)
//  console.log(b13)

//   let numbers=[[11,22,44,],[12,13,14],[41,42,43]]
//   let [q1,q2,q3] = numbers
//   console.log(q1)
//   console.log(q2)
//   console.log(q3)

//   let[[a12,a13,a14],[a15,a16,a17],[a18,a19,a20]]=numbers
//   console.log(a12)
//   console.log(a15)
//   console.log(a17)

//object

let names = {
    firstname: "snehal",
    lastname: "kamble"

}
let a1 = names.firstname
console.log(a1)

let { firstname: fn, lastname: ln } = names
console.log(fn)
console.log(ln)


// object in object 

let info2 = {

    firstname: "sarika",
    parent: {
        mother: "jyotsna",
        father: "kawadu"
    }
}

console.log(info2)
let q1 = { firstname: fn, parent: { mother: m1, father: f1 } } = info2
console.log(fn)
console.log(f1)


//object in aary
let info3 = [
    {
        firstname: "monika",
        lastname: "soyam"

    },
    {
        firstname: "priti",
        lastname: "lohkare"

    }
]

let q2=[{firstname,lastname},{firstname,lastname}]=info3
console.log(q2)

let q3 =[{firstname:f1,lastname:l1},{firstname :f12,lastname:f13}]=info3

console.log(f12)
console.log(f1)


