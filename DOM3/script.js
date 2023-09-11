let inputTxt = document.querySelector('input')
console.log(inputTxt)

let buttonA = document.querySelector('#one')
console.log(buttonA)

let ullistA = document.querySelector('ul')
console.log(ullistA)

buttonA.addEventListener('click', function () {
    let Text = inputTxt.value
    let newLi = document.createElement('li')
    newLi.textContent = Text
    addButton(newLi)
    ullistA.appendChild(newLi)
    inputTxt.value = " "

})
ullistA.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.className === "remove") {
            let li = e.target.parentElement
            let p = li.parentElement
            ullistA.removeChild(li)
        }
        else if (e.target.className === "down") {
            let li = e.target.parentElement
            let p = li.parentElement
            let nextli = li.nextElementSibling
            if (nextli) {
                p.insertBefore(nextli, li)
            }
        }
        else if (e.target.className === "up") {
            let li = e.target.parentElement
            let p = li.parentElement
            let prevLi = li.previousElementSibling
            if (prevLi) {
                p.insertBefore(li, prevLi)
            }
        }
    }
})

function addButton(li) {

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)




}