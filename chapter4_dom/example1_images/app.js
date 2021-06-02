const paragraph = document.getElementById("par");
paragraph.style.backgroundColor = "black";
paragraph.style.color = "white";
paragraph.style.fontSize = "15px";

const button = document.getElementById("btn");
button.style.width = "100px";
button.style.height = "30px";
button.style.backgroundColor = "yellow";
button.style.color = "black";
button.innerHTML = "Ara";

const image = document.getElementsByTagName("img");
image[0].style.width = "300px";
image[0].style.height = "300px";
image[1].style.border = "3px solid red";

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

const title = document.querySelector(".title");
title.innerHTML = "DOM Selector";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(grey,pink)";

hOne = document.querySelector(".h1");
const h1Color = hOne.style.color;
const h1BackgroundColor = hOne.style.backgroundColor;

document.querySelector(".h1").onmouseover = function(){
    const h1 = document.querySelector(".h1");
    h1.style.color = "white";
    h1.style.backgroundColor = "black";
}
document.querySelector(".h1").onmouseout = function(){
    const h1 = document.querySelector(".h1");
    h1.style.color = h1Color;
    h1.style.backgroundColor = h1BackgroundColor; // h1.style.backgroundColor = "transparent";
}

document.querySelector("#btn").addEventListener("mouseover", () => {
    document.querySelector("#btn").style.width = "150px";
})
document.querySelector("#btn").addEventListener("mouseout", () => {
    document.querySelector("#btn").style.width = "100px";
})