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
const imgs = getAll("img")

//Event Listeners
document.addEventListener("DOMContentLoaded", alert("The DOM is Loaded!!"))

window.addEventListener("scroll", () => docBody.classList.toggle("blur"))

docBody.addEventListener("wheel", () => docBody.classList.toggle("blur"))
docBody.addEventListener("keydown", () => {
    if(event.key === "Escape"){
        alert(`You pressed: ${event.key}`);
    }
})

logoHeading.addEventListener("click", () => logoHeading.textContent += "!!!")
logoHeading.addEventListener("mouseover", () => event.target.style = "cursor: pointer")
logoHeading.addEventListener("mouseleave", () => logoHeading.textContent = "Fun Bus")

addEventListenerAll(navLinks, "mouseover", () => event.target.style.textDecoration = "underline")
addEventListenerAll(navLinks, "mouseleave", () => event.target.style.textDecoration = "none")

addEventListenerAll(imgs, "dblclick", () => event.target.classList.toggle("dbl-clicked"))