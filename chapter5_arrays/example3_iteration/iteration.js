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



