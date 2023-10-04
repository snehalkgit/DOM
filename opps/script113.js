let info = {
firstname : "snehal",
lastname : "kamble",
age : 24
}
//retrive 

 console.log(info.firstname)
 console.log [info['firstname']]
 console.log(info.lastname)
 console.log[info['lastname']]
 console.log(info.age)
 console.log[info['age']]


 //update 

 info.firstname = "sarika"
 console.log(info)

 info.lastname = "kale"
 console.log(info)

 info['lastname'] = "kale"
 console.log(info)
info['firstname']= "samiksha"
console.log(info)

//add

 info.country= "india"
 console.log(info)
 info.city = "mumbai"
 console.log(info)

info['city']=["nagpur"]
console.log(info)

//delete
 delete info.firstname
 console.log(info)

  delete info['lastname']
  console.log(info)