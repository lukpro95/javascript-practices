const button = document.querySelector("#changer")
const body = document.getElementById("body")
const text = document.querySelector("#text")

const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let value = '#'

button.addEventListener('click', (e) => {
    e.preventDefault()
    
    for(n = 0; n < 6; n++){
        let randomNumber = Math.round(Math.random()*15)
        let randomHex = hexArray[randomNumber]
        value += randomHex
        
        body.style.backgroundColor = value
        text.innerHTML = `HexCode: ${value}`
    }

    value = '#'

})