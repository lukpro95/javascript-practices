let div
let storage
let timeOut
let currentPics

const store = document.querySelector("#store")
const search = document.querySelector("#search")
const field = document.querySelector("#field")
const table = document.querySelector("#table")

const allBtn = document.querySelector("#all")
const cakesBtn = document.querySelector("#cakes")
const donutsBtn = document.querySelector("#donuts")
const sweetsBtn = document.querySelector("#sweets")
const cupsBtn = document.querySelector("#cups")

let array = [
    cakes = [
        cake1 = {name: "Strawberry Chocolate", price: 15, img: "cake3.jpg"},
        cake2 = {name: "Strawberry Heaven", price: 10, img: "cake2.jpg"},
        cake3 = {name: "Cherry Chocolate Syroup", price: 5, img: "cake1.jpg"}
    ],
    donuts = [
        don1 = {name: "Rainbow Childhood", price: 5, img: "don1.jpg"},
        don2 = {name: "Mature Zebra", price: 10, img: "don2.jpg"},
        don3 = {name: "Piggy Pants", price: 15, img: "don3.jpg"}
    ],
    sweets = [
        sw1 = {name: "Mr. Not-Sure", price: 5, img: "sw1.jpg"},
        sw2 = {name: "Sour Balls", price: 10, img: "sw2.jpg"},
        sw3 = {name: "Everything 'N' Nothing", price: 15, img: "sw3.jpg"}
    ],
    cups = [
        cup1 = {name: "Chocolate Military", price: 11, img: "ccake1.jpg"},
        cup2 = {name: "Cute Scottish Inquisition", price: 15, img: "ccake2.jpg"},
        cup3 = {name: "Strawberry Love", price: 7, img: "ccake3.jpg"}
    ]
]

insertIMG = function (item) {
    return (`
    <div class="container col-lg-4 mx-auto mb-3">
        <div class="myCard"><img class="zoom" src="${item.img}" width="350" height="250" alt=""></div>
        <div class="pd-2 desc w-100">
            <strong><span>${item.name}</span></strong>
            <strong><span>$${item.price}</span></strong>
        </div>
    </div>
    `)
}

createDoc = function () {
    table.innerHTML = ""
    div = document.createElement(`div`)
    div.id = "storage"
    storage = document.querySelector("#storage")
    table.appendChild(div)
}

showAll = function () {
    currentPics = []
    array.forEach((category) => {
        category.forEach((item) => {
            currentPics.push(item.img)
            div.insertAdjacentHTML('afterend', insertIMG(item))
        })
    })
}

showSpecific = function (array) {
    currentPics = []
    array.forEach((item) => {
        currentPics.push(item.img)
        div.insertAdjacentHTML('afterend', insertIMG(item))
    })
}

checkValue = function() {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        if(!field.value == "") {
            createDoc()
            currentPics = []
            array.forEach((category)=> {
                category.forEach((item) => {
                    if(item.name.toLowerCase().includes(field.value.toLowerCase()) || item.price == field.value) {
                        currentPics.push(item.img)
                        div.insertAdjacentHTML('afterend', insertIMG(item))
                    }
                })
            })
        } else {
            createDoc()
            showAll()
        }
    }, 250)
}

createListeners = function () {

    let images = document.querySelectorAll(".myCard").forEach((img)=> {
        img.addEventListener('click', () => {
            console.log("yes")
            store.insertAdjacentHTML('afterend', `
            
                <div class="container-fluid">
                    <div class="row lightbox-container d-flex h-100 align-items-center">
                        <div class="col-10 mx-auto text-center">
                            <div class="text-right" style="position: fixed; top:15; right: 0;"><button class="btn" id="closePic">X</button></div>
                            <div class="d-inline mx-5 text-right"><button class="btn" id="prevPic">Previous</button></div>
                            <img id="currentIMG" src="${img.firstElementChild.attributes[1].value}" width="700">
                            <div class="d-inline mx-5 text-left"><button class="btn" id="nextPic">Next</button></div>
                        </div>
                    </div>
                </div>
    
            `)
    
            functionality()
    
        })
    })

}

getPrev = function (value) {
    let x
    if(currentPics.indexOf(value) < currentPics.length-1) {x = currentPics[currentPics.indexOf(value)+1]} else {x = currentPics[0]}
    return x
}

getNext = function (value) {
    let x
    if(currentPics.indexOf(value) > 0) {x = currentPics[currentPics.indexOf(value)-1]} else {x = currentPics[currentPics.length-1]}
    return x
}

functionality = function () {
    const prevPic = document.querySelector("#prevPic")
    const nextPic = document.querySelector("#nextPic")
    const closePic = document.querySelector("#closePic")
    
    closePic.addEventListener('click', () => {
        closePic.parentElement.parentElement.parentElement.parentElement.remove()
    })

    nextPic.addEventListener('click', () => {
        let IMG = document.querySelector("#currentIMG")
        IMG.attributes[1].value = getNext(IMG.attributes[1].value)
    })

    prevPic.addEventListener('click', () => {
        let IMG = document.querySelector("#currentIMG")
        IMG.attributes[1].value = getPrev(IMG.attributes[1].value)
    })
}

search.addEventListener('keyup', (e) => {
    e.preventDefault()
    checkValue()
})

search.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(field.value)
    field.value = ""
})

cakesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDoc()
    showSpecific(cakes)
    createListeners()
})

donutsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDoc()
    showSpecific(donuts)
    createListeners()
})

sweetsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDoc()
    showSpecific(sweets)
    createListeners()
})

cupsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDoc()
    showSpecific(cups)
    createListeners()
})

allBtn.addEventListener('click', (e) => {
    e.preventDefault()
    createDoc()
    showAll()
    createListeners()
})

;(function start() {
    createDoc()
    showAll()
    createListeners()
})()