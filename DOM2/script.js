let ullist = document.querySelector('ul')
console.log(ullist)
let inptText = document.querySelector('input')
console.log(inptText)
let buttonAA = document.querySelector('#one')
console.log(buttonAA)

buttonAA.addEventListener('click',function(){
    let txt = inptText.value
    let newLI = document.createElement('li')
    newLI.textContent = txt
    addButtons(newLI)
    ullist.appendChild(newLI)
    inptText.value = ""
})
function addButtons(li){
    let r = document.createElement('button')
    r.textContent ="Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent ="Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent ="Down"
    d.classList.add('down')
    li.appendChild(d)

  
    

}