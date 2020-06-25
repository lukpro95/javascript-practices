const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const img = document.querySelector("#img")
const text = document.querySelector("#text")
const by = document.querySelector("#by")

let quotes = [
    {
        icon: "https://www.ecopetit.cat/wpic/mpic/63-632135_lambo-wallpaper-engine-car-wallpapers-hd-for-mobile.jpg",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium a vel suscipit similique in veritatis nostrum eius sequi doloribus corporis consequatur unde, impedit sunt quasi? Nisi, et aliquam? Harum.",
        author: "Author"
    },
    {
        icon: "https://www.ecopetit.cat/wpic/mpic/63-632135_lambo-wallpaper-engine-car-wallpapers-hd-for-mobile.jpg",
        quote: "Life is great. Great.",
        author: "Person"
    },
    {
        icon: "https://www.ecopetit.cat/wpic/mpic/63-632135_lambo-wallpaper-engine-car-wallpapers-hd-for-mobile.jpg",
        quote: "Stop wasting your time.",
        author: "Greg"
    }
]

let index = 0

next.addEventListener('click', () => {
    
    if(index >= 2) {
        index = 0
    } else {
        index++
    }

    img.style = `background-image: url(${quotes[index].icon})`
    by.innerHTML = quotes[index].author
    text.innerHTML = quotes[index].quote
})

prev.addEventListener('click', () => {
    
    if(index <= 0) {
        index = 2
    } else {
        index--
    }

    img.style = `background-image: url(${quotes[index].icon})`
    by.innerHTML = quotes[index].author
    text.innerHTML = quotes[index].quote
})