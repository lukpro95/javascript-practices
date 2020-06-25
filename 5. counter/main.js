const addBtn = document.querySelector("#add")
const subBtn = document.querySelector("#sub")
const num = document.querySelector("#number")

let value = 0

let color = function () {
    if(value < 0){num.style = 'color: red'}
    if(value > 0){num.style = 'color: green'}
    if(value == 0){num.style = 'color: white'}
}

addBtn.addEventListener('click', () => {
    value++
    num.innerHTML = value
    color()
})

subBtn.addEventListener('click', () => {
    value--
    num.innerHTML = value
    color()
})