const form = document.querySelector("#form")
const bill = document.querySelector("#bill")
const ppl = document.querySelector("#ppl")
const service = document.querySelector("#service")

let timeOut
let errors = []

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    validate()

    if(!errors.length){
        showAnimation()
        timeOut = setTimeout(() => {
            hideAnimation()
            calculate()
            clear()
        }, 2000)
    } else {
        let dangers = document.querySelectorAll("#Danger")
        if(!dangers.length){
            insertError()
            timeOut = setTimeout(() => {
                deleteError()
                clear()
            }, 5000)
        }
    }

})

showAnimation = function () {
    form.insertAdjacentHTML('afterend', `
    <div class="col-12 text-center" id="anime">
        <img src="https://gifimage.net/wp-content/uploads/2018/04/loading-animated-gif-transparent-background-9.gif" width="110">
    </div>
    `)
}

hideAnimation = function () {
    let anime = document.querySelector("#anime")
    anime.remove()
}

insertError = function () {
    errors.forEach((error) => {
        form.insertAdjacentHTML('beforebegin', `
        <div class="col-12 text-center" id="Danger">
            <div class="alert alert-danger mt-2">${error}</div>
        </div>
        `)
    })
}

deleteError = function () {
    let dangers = document.querySelectorAll("#Danger")
    dangers.forEach((danger) => {
        danger.remove()
    })
}

clear = function () {
    bill.value = ""
    ppl.value = ""
    service.value = 0
}

validate = function () {
    errors = []
    if(!bill.value) {errors.push("You must enter a value of Bill.")}
    if(!ppl.value) {errors.push("You must enter a number of people sharing a Bill.")}
    if(service.value == 0) {errors.push("You must give us an opinion on received service.")}
}

calculate = function () {
    let serviceRate
    if(service.value == 1) {serviceRate = 0.2}
    if(service.value == 2) {serviceRate = 0.1}
    if(service.value == 3) {serviceRate = 0.02}

    let billN = parseFloat(bill.value)
    let pplN = parseFloat(ppl.value)

    let tipM = ((billN)*serviceRate)
    let totalBill = billN + tipM
    let sharedPay = (totalBill/pplN)

    results = {
        tip: tipM.toFixed(2),
        total: totalBill,
        shared: sharedPay.toFixed(2)
    }

    show(results)
}

show = function (results) {

    form.insertAdjacentHTML('afterend', `
    <div class="col-12 text-center" id="result">
        <h3>Tip Amount: $${results.tip}</h3>
        <h3>Total Amount: $${results.total}</h3>
        <h3>Each Person Owes: $${results.shared}</h3>
    </div>
    `)

    timeOut = setTimeout(() => {
        destroy()
    }, 4000)

}

destroy = function () { 
    let result = document.querySelector("#result")
    result.remove()
}