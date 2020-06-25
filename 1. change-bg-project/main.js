const button = document.querySelector("#changer")
const body = document.getElementById("body")

button.addEventListener('click', (e) => {
    e.preventDefault()
    body.style.backgroundColor = 'blue'
})