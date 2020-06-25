const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
const img = document.querySelector("#myBox")

let array = [
    {url: "https://www.ecopetit.cat/wpic/mpic/63-632135_lambo-wallpaper-engine-car-wallpapers-hd-for-mobile.jpg"},
    {url: "https://www.southernprestigecars.co.uk/dist/img/ql/ql-3.jpg"},
    {url: "https://www.cvmdigital.co.uk/wp-content/uploads/2019/01/Waterhouse-cars-banner-1-700x700.jpg"},
    {url: "https://admin.idaoffice.org/wp-content/uploads/2018/09/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-700x700.jpg"}
]

let index = 0

next.addEventListener('click', () => {
    
    if(index >= 3) {
        index = 0
    } else {
        index++
    }

    img.style = `background-image: url(${array[index].url})`
    console.log(array[index].url)
})

prev.addEventListener('click', () => {
    
    if(index <= 0) {
        index = 3
    } else {
        index--
    }

    img.style = `background-image: url(${array[index].url})`
    console.log(array[index].url)
})