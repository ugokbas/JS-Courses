const wages = [4000, 5000, 3500, 4200, 2850];

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

addArrayToList();

document.querySelector(".add").onclick = function(){
    let add = document.querySelector(".input-list");
    if(!add.value){
        alert("You didn't enter a wage")
    }else{
        wages.push(Number(add.value));
        addToList(add.value);
        add.value = "";
    } 
}

document.querySelector(".delete").onclick = function(){
    if(wages.length == 0){
        alert("No wages!");
    }else{
        wages.pop();
        const list = document.querySelector(".list");
        list.removeChild(list.lastElementChild);
    }  
}

