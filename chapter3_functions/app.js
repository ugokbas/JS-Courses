// ** ==========  FUNCTIONS  ==========

// ! 1st Method : Function Declaration

function print(name,age){
    console.log(`Hi! My name is ${name}. I'm ${age}!`);
}
print("Ukbe",29); // function calling

//Example-1 : Even or Odd

const number = Number(prompt("Enter a number: "));

function evenOrOdd(number){
    const result = number % 2 === 0 ? "Number is even!" : "Number is odd!";
    return result;
}

console.log(`Result: ${evenOrOdd(number)}`);

// ! 2nd Method : Function Expression

const evenOdd = function(num){
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd(5)); // function calling

// ! 3rd Method : Arrow Functions

const summing = (x,y) => x + y;

console.log(summing(15,20)); // function calling (invoke)