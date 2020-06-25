const screen = document.querySelector("#show")
const buttons = document.querySelectorAll(`button`)

let operations = []
let values = []
values[0] = "0";

let ops = ["*", "/"]
let opsG = ["*", "/", "+", "-"]
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()

        if(numbers.includes(parseInt(button.innerHTML)) || button.innerHTML == ".") {
            values[values.length-1] += button.innerHTML
            screen.innerHTML += button.innerHTML
        } else if (button.innerHTML == "Clear") {
            values = []
            values[0] = "0"
            screen.innerHTML = ""
        } else if (button.innerHTML == "=") {
            let n = 0
            while(values.length > 1){
                if(operations.includes("*") || operations.includes("/")) {
                    if(operations.includes("*")) {
                        values[operations.indexOf("*")] = parseFloat(values[operations.indexOf("*")]) * parseFloat(values[operations.indexOf("*")+1])
                        values.splice(operations.indexOf("*")+1, 1)
                        operations.splice(operations.indexOf("*"), 1)
                    }
                    if(operations.includes("/")) {
                        values[operations.indexOf("/")] = parseFloat(values[operations.indexOf("/")]) / parseFloat(values[operations.indexOf("/")+1])
                        values.splice(operations.indexOf("/")+1, 1)
                        operations.splice(operations.indexOf("/"), 1)
                    }
                    n = -1;
                } else {
                    if(operations[n] == "+") {
                        values[0] = parseFloat(values[0]) + parseFloat(values[1])
                        values.splice(1, 1)
                    }
                    if(operations[n] == "-") {
                        values[0] = parseFloat(values[0]) - parseFloat(values[1])
                        values.splice(1, 1)
                    }
                }
                n++
            }
            screen.innerHTML = parseFloat(values[0])
            operations = []
        } else {
            if(opsG.includes(screen.innerHTML.substring(screen.innerHTML.length-1))) {
                operations.splice(operations.length-1, 1)
                values.splice(values.length-1, 1)
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
            }
            operations.push(button.innerHTML)
            screen.innerHTML += button.innerHTML
            values.push("0")
        }

    })
})