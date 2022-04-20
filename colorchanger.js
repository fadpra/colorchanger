const btn = document.querySelector(".btn");
const body = document.querySelector("body");

const colors = ['red','yellow','green','blue','orange']

btn.addEventListener('click',changeColor);

function changeColor() {
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[random]
}