 let firstE = document.querySelector('.fe')
 console.log(firstE)

  let lastE = document.querySelector('.be')
  console.log(lastE)

    let headone = document.querySelector('h1')
    console.log( headone)

   let allElementsFE =   document.querySelectorAll('.fe')
   console.log(allElementsFE)

    let allElementsBE =  document.querySelectorAll('.be')
    console.log(allElementsBE)

headone.addEventListener('click',function(){
    for (let i= 0 ; i < allElementsFE.length ; i ++){
        allElementsFE[i].style.color = "green "
        allElementsBE[i].style.color = "yellow"
    }
})

 let allElements = document.querySelectorAll('li')
 console.log(allElements)

   let  allElements2 = document.getElementsByTagName('li')
   console.log(allElements2)
    
     

let byId2 = document.getElementById('one')
console.log(byId2)

   let feEL = document.getElementsByClassName('fe')
   console.log( feEL)

 let fet2 = document.getElementsByName('backE')
console.log(fet2)

 