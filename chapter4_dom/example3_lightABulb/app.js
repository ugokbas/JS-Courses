document.querySelector(".on").addEventListener("click", () => {
    document.querySelector(".image").src = "./img/light-on.jpg";
})

document.querySelector(".off").addEventListener("click", () => {
    document.querySelector(".image").src = "./img/light-off.jpg";
})

document.querySelector(".image").addEventListener("mouseover", () => {
    document.querySelector(".image").src = "./img/light-on.jpg";
})

document.querySelector(".image").addEventListener("mouseout", () => {
    document.querySelector(".image").src = "./img/light-off.jpg";
})

document.querySelector(".textbox").addEventListener("keyup", () => {
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if(checkbox.checked){
        textbox.value = textbox.value.toUpperCase();
    } else{
        textbox.value = textbox.value.toLowerCase();
    }
})

const afterDiv = document.querySelector(".div-input")
const h1 = document.createElement("h1");
const text = document.createTextNode("Programming Languages");
h1.appendChild(text);
afterDiv.after(h1);
h1.style.marginTop = "20px";
h1.style.color = "red";
