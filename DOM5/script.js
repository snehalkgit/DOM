 let byID = document.getElementById('one')
 console.log(byID)
 
 let TAGname = document.getElementsByTagName('li')
 console.log( TAGname)

  let classname = document.getElementsByClassName('fruit')
console.log(classname)

 let byname = document.getElementsByName('fruit1')
 console.log(byname)
 

  let ele = document.querySelector('p')
  console.log(ele)
  console.log(ele.className)
  ele.classList.add("seven")//add
  ele.classList.remove("seven")//remove in list
  ele.classList.toggle("seven")//add
  ele.classList.toggle("seven")//remove after added

  let q1 = ele.getAttribute('id')
  console.log(q1)

   ele.setAttribute('id',"eight")
   console.log(ele)
    ele.setAttribute('data-cy',"username")//chhange in para
    ele.removeAttribute('id')
    console.log(ele)

    