function calculate(){
    const r = document.getElementById("r").value;
    const h = document.querySelector(".h").value; // ! (.class_name) for class name in querySelector
                                                  // ! (#id_name) for id name in querySelector
    const result = Math.PI * r * r * h;
    document.querySelector(".volume").innerHTML = result.toFixed(2);                                          
}

const button = document.querySelector(".btn");
button.style.color = "red";
button.style.backgroundColor = "cream";