const form = document.querySelector("#form")
const field = document.querySelector("#field")
const text = document.querySelector("#text")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(field.value == "") {
        if(!document.querySelector("#alert")){
            form.insertAdjacentHTML('afterend', `
            <div class="alert alert-danger mx-5" id="alert">
                <h3>Please enter something to pass.</h3>
            </div>
        `)
        setTimeout(() => {
            document.querySelector("#alert").remove()
        }, 3000)
        }
    } else {
        text.innerHTML = field.value
        field.value = ""
    }

})