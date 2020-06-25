const button = document.querySelector("#btn")
const text = document.querySelector("#qt")
const author = document.querySelector("#by")

quotes = [
    {
        quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: "Tyne Daly",
    },
    {
        quote: "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector De Villars",
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau",
    },
    {
        quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: "Life",
    }
]

button.addEventListener('click', (e) => {
    e.preventDefault()

    let genQuote = quotes[Math.round(Math.random()*3)]

    text.innerHTML = genQuote.quote
    author.innerHTML = genQuote.author

})