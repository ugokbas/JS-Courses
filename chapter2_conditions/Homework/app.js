// ! Question-1 : Letter Grade

// let point = Number(prompt("Enter your exam point: "));

// if(25 > point >= 0){
//     console.log("Your letter grade: FF");
// }else if(45 >= point){
//     console.log("Your letter grade: DD");
// }else if(65 >= point){
//     console.log("Your letter grade: CC");
// }else if(75 >= point){
//     console.log("Your letter grade: BB");
// }else if(90 >= point){
//     console.log("Your letter grade: BA");
// }else if(100 >= point){
//     console.log("Your letter grade: AA");
// }else{
//     console.log("Error! Out of range entry!");
// }

// ! Question-2 : Which Month?

const month = prompt("Enter the month name: ");

switch(month){
    case "January":
        console.log(1);
        break;
    case "February":
        console.log(2);
        break;
    case "March":
        console.log(3);
        break;
    case "April":
        console.log(4);
        break;
    case "May":
        console.log(5);
        break;
    case "June":
        console.log(6);
        break;
    case "July":
        console.log(7);
        break;
    case "August":
        console.log(8);
        break;
    case "September":
        console.log(9);
        break;
    case "October":
        console.log(10);
        break;
    case "November":
        console.log(11);
        break;
    case "December":
        console.log(12);
        break;
    default:
        alert("Incorrect Entry");
        break;
}

// ! Question-3 : Addition, Multiplication, Find the Largest and Smallest

const firstNumber = Number(prompt("Enter the first number: "));
const secondNumber = Number(prompt("Enter the second number: "));
const thirdNumber = Number(prompt("Enter the third number: "));

console.log("Sum of numbers: " + (firstNumber + secondNumber + thirdNumber));
console.log("Multiplication of numbers: " + (firstNumber * secondNumber * thirdNumber));

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log("Largest number: " + firstNumber);
}else if(secondNumber > firstNumber && secondNumber > thirdNumber){
    console.log("Largest number: " + secondNumber);
}else if(thirdNumber > firstNumber && thirdNumber > secondNumber){
    console.log("Largest number: " + thirdNumber);
}else{
    console.log("Equal numbers exist!");
}

if(firstNumber < secondNumber && firstNumber < thirdNumber){
    console.log("Smallest number: " + firstNumber);
}else if(secondNumber < firstNumber && secondNumber < thirdNumber){
    console.log("Smallest number: " + secondNumber);
}else if(thirdNumber < firstNumber && thirdNumber < secondNumber){
    console.log("Smallest number: " + thirdNumber);
}else{
    console.log("Equal numbers exist!");
}

// ! Question-4 : Even or Odd Number

const number = Number(prompt("Enter a number: "));

const evenOrOdd = number % 2 === 0 ? `${number} is even number!` : `${number} is odd number!`;

console.log(evenOrOdd); 

// ! Question-5 : Degree Conversion

const degreeType = prompt("Fahrenheit to Celsius or Celsius to Fahrenheit");

const degree = Number(prompt("Enter the degree: "));

const result = degreeType === "Fahrenheit to Celsius" ? (degree - 32) / 1.8 : degree * 1.8 + 32;

console.log(result);

