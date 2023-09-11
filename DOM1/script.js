let head = document.querySelector("#one")
let inpuT = document.querySelector("input")
let button = document.querySelector("button")

console.log(head,inpuT,button)

button.addEventListener('click',function (){
    let cltext =inpuT.value
    head.style.color = cltext
    inpuT.value = " "

})


