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
h1.style.textAlign = "left";

document.querySelector(".add").addEventListener("click", () => {
    // ekleme yapilacak listeyi al
    const list = document.querySelector(".list");
    // input elemanina girilen yeni satirin degerini al
    const row = document.querySelector(.language).value;
    // yeni girilen satiri saklamak icin bir li olursturduk
    const newList = document.createElement("li");
    // newList icin textNode olusturduk
    const textNode = document.createTextNode(row);
    // olusturdugumuz textNode'u newList'e bagladik
    newList.appendChild(textNode);
    // yeni eklenen satiri var olan listeye (ul) baglayalim
    list.append(newList);
})

document.querySelector(".delete").addEventListener("click", () => {
    const list = document.querySelector(".list");
    // list.removeChild(list.firstElementChild); // ilk elemani sil
    list.removeChild(list.lastElementChild); // son elemani sil
})