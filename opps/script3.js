let names = [
    {
        fullName: "rushi prasad ",
        city: "nagpur",
        skills: ["angular", "python", "react js", "django"],
        age: 26
    },
    {
        fullName: "snehal kamble",
        city: "pune",
        skills: ["cypress", "python", "react js", "js", "selenium"],
        age: 22

    },
    {
        fullName: "sarika jain",
        city: "mumbai",
        skills: ["sql", "python", "js", "MSBI"],
        age: 25
    },
    {
        fullName: "mayuri kawale",
        city: "pune",
        skills: ["testing", "python", "selenium"],
        age: 22
    }
]


// program 1

// print fullname for every user
names.forEach(function (el) {
    console.log(el.fullName)

})


//print  skilsl for every user 

names.forEach(function (el) {
    console.log(el.skills)
})


// print fullName:numberofSkills

names.forEach(function (el) {
    console.log(el.fullName + ":" + el.skills)
})


//print name of user with python 

names.forEach(function (el) {
    console.log(el.skills.includes("python"))

    {
        console.log(el.fullName)
    }
})


// add java  skill to every user


 names.forEach(function(el){
    console.log(el.skills.push("java"))
 })
 console.log(names)

 // add working city property with value nagpur

  names.forEach(function(el){
el.workingcity = "nagpur"
  })
  console.log(names)


  // average age of all students --avarage 
   let q1 = names.reduce(function(acc,el){
return el.age + acc


  },0)
  console.log(q1/names.length)

  //user with city name mumbai 

   names.forEach(function(el){
    if(el.city == "mumbai")
    {
        console.log(el.fullName)
    }
   })

