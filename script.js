// Declaring the variables of objects received from the widgets document
const count = document.querySelector(".counter-value")
const add = document.querySelector('.add')
const subtract = document.querySelector('.subtract')
const reset = document.querySelector('.reset')

// Adding event listeners so they activate when clicked
add.addEventListener("click", () => {
    count.textContent++
})

subtract.addEventListener("click", () => {
    count.textContent--
})

reset.addEventListener("click", () => {
    count.textContent = 0
})