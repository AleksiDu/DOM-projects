// "use strict";

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // get randmom number between 0 - 3
    const randmomNumber = getRandmomNumber();
    console.log(randmomNumber);

    document.body.style.backgroundColor = colors[randmomNumber];
    color.textContent = colors[randmomNumber];
});

function getRandmomNumber() {
    return Math.floor(Math.random() * colors.length)
}