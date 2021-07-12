const animals = ["cow", "duck", "monkey", "elephant", "monkey", "lion","duck", "monkey", "lion", "giraffe"];
const animal = prompt("Which animal do you search?").toLowerCase();

const animalNumber = function(animal){
    let numOfAnimal = 0;
    for(let i in animals){
        if(animals[i] == animal){
            numOfAnimal++;
        }
    }
    return numOfAnimal;
}

const number = animalNumber(animal);
number == 0
? alert("The animal you were looking for was not found!") 
: (number == 1 
    ? alert(`There is ${number} ${animal}!`) 
    : alert(`There are ${number} ${animal}s!`));

    //Example - 2

    let cars = ["BMW", "Volvo", "Toyota"];
    let output = "";

    for (const i of cars) {
        console.log(i);
        output += i + " ";
    }
    console.log(output);


// =============== FOR EACH ==================

let students = ["Mike", "John", "Kate", "Brad", "Tom", "Jennifer", "Brie"];

function print(i) {
    console.log(i);
}

students.forEach(print);

// ------------- With Arrow Function -------------

students.forEach((x) => console.log(x));


// ============== NUM() =====================
// ============ EXAMPLE-1 ===================

const nums = [3,5,1,4,6,0,2,8];
const multiplyTwo = nums.map((x) => x * 2);
console.log(multiplyTwo, nums);

// ============ EXAMPLE-2 ===================
// use together map() and forEach()

const names = ["John", "Anthony", "Jack", "Leonardo", "Brad", "Giorgio", "Alexander", "Matthew"];
// Pipeline
names.map((name) => name.toUpperCase()).forEach((name) => console.log(name));


// EXCHANGE
tlPrices = [120, 340, 550, 245, 322.5, 789];

const dollarRate = document.querySelector(".dollar");
const euroRate = document.querySelector(".euro");

const dollar = document.querySelector(".dollar-price");
const euro = document.querySelector(".euro-price");

dollarRate.addEventListener("change", () => {
    dollarRate.value < 0 ? alert("Error!") : 
    dollar.innerHTML = tlPrices.map((tl) => (tl / dollarRate.value).toFixed(2));
})

euroRate.addEventListener("change", () => {
    euroRate.value < 0 ? alert("Error!") : 
    euro.innerHTML = tlPrices.map((tl) => (tl / euroRate.value).toFixed(2));
})

// RAISE

const newPrices = tlPrices.map((value,index) => {
    if(value < 250){
        return `increased price of ${index + 1}.product : ${value * 1.1}`;
    } else{
        return `increased price of ${index + 1}.product : ${value * 1.2}`;
    }
})



