const form = document.querySelector("#form")
const formBox = document.querySelector("#formBox")
const input = document.querySelector("#input")
const clear = document.querySelector("#clear")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    insertDiv(input.value)
    addEvents()

    localStorage.setItem(localStorage.length+1, input.value)
    input.value = ""
})

addEvents = function () {

    let box = document.querySelector(".box")
    let text = box.querySelector(".txt")
    let del = document.querySelector(".delete")
    let edit = document.querySelector(".edit")
    let done = document.querySelector(".done")

    del.addEventListener('click', (e) => {
        box.remove()
        localStorage.removeItem(findKey(text.innerHTML))
    })

    edit.addEventListener('click', (e) => {
        box.innerHTML = changedHTML(text.innerHTML)

        box.querySelector(".accept").addEventListener('click', (e) => {
            box.innerHTML = acceptedHTML(box.querySelector(".toChange").value)

            addEvents()
            let updatedText = box.querySelector(".txt")
            localStorage.setItem(findKey(text.innerHTML), updatedText.innerHTML)
        })

        box.querySelector(".decline").addEventListener('click', (e) => {
            box.innerHTML = acceptedHTML(text.innerHTML)
            addEvents()
        })

    })

    done.addEventListener('click', (e) => {
        text.style = 'text-decoration: line-through;'
        text.classList.add('text-muted')
    })
}

insertDiv = function (value) {
    formBox.insertAdjacentHTML("afterend", `
        <div class="col-12 my-4 between box">
            ${acceptedHTML(value)}
        </div>
    `)
}

acceptedHTML = function (value) {
    return `
        <span class="txt">${value}</span>
            <span class="item-icons">
            <button class="done"><i class="fa fa-check" aria-hidden="true"></i></button>
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="far fa-trash-alt"></i></button>
        </span>
    `
}

changedHTML = function (value) {
    return `
        <span class="txt">
            <input type="text" class="toChange" value="${value}">
        </span>
        <span class="item-icons">
            <button class="accept"><i class="fa fa-check" aria-hidden="true"></i></button>
            <button class="decline"><i class="fa fa-ban" aria-hidden="true"></i></button>
        </span>
    `
}

clear.addEventListener('click', () => {
    localStorage.clear()
    let boxes = document.querySelectorAll(".box")
    boxes.forEach((box) => {
        box.remove()
    })
})

findByValue = function (value) {
    for (let i = 0; i < localStorage.length; ++i) {
        if(localStorage.getItem(localStorage.key(i)) == value) {
            return localStorage.getItem(localStorage.key(i))
        }
    }
}

findKey = function (value) {
    for (let i = 0; i < localStorage.length; ++i) {
        if(localStorage.getItem(localStorage.key(i)) == value) {
            return localStorage.key(i)
        }
    }
}

for (let i = 0; i < localStorage.length; ++i) {
    insertDiv(localStorage.getItem(localStorage.key(i)))
    addEvents()
}