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
