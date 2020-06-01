// Your code goes here

//Helper functions for getting elements
const get = selector => document.querySelector(selector)
const getAll = selector => document.querySelectorAll(selector)

//Adds an event listener to each item in a nodelist
const addEventListenerAll = function(list, event, cb){
    for(let i = 0, len = list.length; i < len; i++){
        list[i].addEventListener(event, cb)
    }
}


//Element Variables
const docBody = get("body")
const logoHeading = get(".logo-heading")
const navLinks = getAll(".nav-link")
const navBox = get(".nav-container")
const imgs = getAll("img")
const text = getAll("p")

//Event Listeners
document.addEventListener("DOMContentLoaded", alert("The DOM is Loaded!!"))
document.addEventListener("scroll", () => docBody.classList.toggle("scroll")
)
docBody.addEventListener("wheel", () => docBody.classList.toggle("blur"))
docBody.addEventListener("keydown", () => {
    if(event.key === "Escape"){
        alert(`You pressed: ${event.key}`);
    }
})

logoHeading.addEventListener("click", () => {
    logoHeading.textContent += "!!!"
    event.stopPropagation()
})
logoHeading.addEventListener("auxclick", () => navBox.style.background = "red")
logoHeading.addEventListener("mouseover", () => event.target.style = "cursor: pointer")
logoHeading.addEventListener("mouseleave", () => logoHeading.textContent = "Fun Bus")

addEventListenerAll(navLinks, "mouseover", () => event.target.style.textDecoration = "underline")
addEventListenerAll(navLinks, "mouseleave", () => event.target.style.textDecoration = "none")
addEventListenerAll(navLinks, "click", () => {
    event.preventDefault()
    event.stopPropagation()
})

navBox.addEventListener("click", () => navBox.style.background = "blue")

addEventListenerAll(imgs, "dblclick", () => event.target.classList.toggle("dbl-clicked"))

addEventListenerAll(text, "copy", () => alert(`You copied text from: ${event.target}`))
