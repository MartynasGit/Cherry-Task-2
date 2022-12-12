const input = document.getElementById("diamondCountInput");
const diamond = document.querySelector(".diamondDiv");
const form = document.getElementById("form");


function renderDiamonds(event) {
    event.preventDefault();
    diamond.innerHTML = input.value;
}

form.addEventListener('submit', renderDiamonds)