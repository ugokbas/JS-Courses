const wages = [4000, 5000, 3500, 4200, 2850, 7500, 3000];

const list = document.createElement("ul");
list.className = "list";
document.querySelector(".list-div").appendChild(list);

const addToList = function(row){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(row));
    list.appendChild(li);
}

const addArrayToList = function(){
    for (let i in wages) {
        addToList(wages[i]);
    }
}

const updateExplanation = function(arr) {
    const explanation = document.querySelector(".explanation");
    const newWages = arr.join(" ");
    explanation.innerHTML = `Wages: ${newWages} <br>
    Total Wage: ${arr.reduce((x,y) => x + y, 0)}`;
}

addArrayToList();
updateExplanation(wages);

document.querySelector(".add").onclick = function(){
    const add = document.querySelector(".input-list");
    if(!add.value){
        alert("You didn't enter a wage")
    }else{
        wages.push(Number(add.value));
        addToList(add.value);
        add.value = "";
        updateExplanation(wages);
    } 
}

document.querySelector(".delete").onclick = function(){
    if(wages.length == 0){
        alert("No wages!");
    }else{
        wages.pop();
        const list = document.querySelector(".list");
        list.removeChild(list.lastElementChild);
        updateExplanation(wages);
    }  
}

document.querySelector(".search").onclick = function(){
    const add = document.querySelector(".input-list");
    if(!add.value){
        alert("Enter the top wage limit.");
    }else{
        const filtered = wages.filter((m) => m <= add.value);
        if(filtered.length == 0) {
            alert("Cannot find any wages!");
        } else{
            updateExplanation(filtered);
        }
    }
    add.value = "";
}

document.querySelector(".input-list").onkeydown = function(e){
    if(e.key === "Enter"){
        document.querySelector(".add").onclick();
    } else if(e.key === "Del"){
        document.querySelector("delete").onclick();
    }
}
    