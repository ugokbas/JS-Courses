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
