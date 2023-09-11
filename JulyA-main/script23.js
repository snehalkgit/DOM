let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:27,
        roll:89,
        city:"pune",
        skills:["python","javascript","java","css"]
    },
    {
        firstName:"amol",
        lastName:"rao",
        age:22,
        roll:66,
        city:"jaipur",
        skills:["sql","msbi","sql server","python"]
    },

    {
        firstName:"chetan",
        lastName:"sharma",
        age:23,
        roll:45,
        city:"nagpur",
        skills:["sql","machine learning","python"]
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        age:23,
        roll:44,
        city:"pune",
        skills:["cypress","jaipur","python"]
    }

]

// print full name for all students 

//console.log(students[0].firstName + students[0].lastName)
students.forEach(function(el){
    console.log(el.firstName + el.lastName)
})

// print city for all students 
students.forEach(function(el){
    console.log(el.city)
})

// print name of students having city as pune
students.forEach(function(el){
    if(el.city ==  "pune"){
        console.log(el.firstName + el.lastName)
    }
})

// print name of all student with city pune and skill python
students.forEach(function(el){
   if(el.city == "pune" && el.skills.includes("python")){
      console.log(el.firstName)  
   }
})

// print name  and number of skills 
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// name of student above 25 years of age 
students.forEach(function(el){
    if(el.age > 25){
        console.log(el.firstName)
    }
})

// average age of all students 
let q1 = students.reduce(function(acc,el){
        return acc + el.age
},0)
console.log(q1/students.length)


// language = "hindi"
students.forEach(function(el){
    el.language = "hindi"
})
console.log(students)











