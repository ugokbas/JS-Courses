// ** ==========  IF-ELSE IF-ELSE  ==========

const number1 = Number(prompt("Enter first number: "));
const operation = prompt("Enter the operation: ");
const number2 = Number(prompt("Enter second number: "));
let result;

if(operation == "+"){
    result = number1 + number2;
}else if(operation == "-"){
    result = number1 - number2;
}else if(operation == "*"){
    result = number1 * number2;
}else if(operation == "/"){
    result = number1 / number2;
}else{
    alert("You did wrong operation!");
}

console.log(`${number1} ${operation} ${number2} = ${result}`);

// ** ==========  SWITCH-CASE  ==========

const dayOfTheWeek = Number(prompt("Enter the day"));
switch (dayOfTheWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break; 
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        alert("Day should be between 1 to 7 👎");
        break;
}
console.log(dayName);

// ** ==========  TERNARY  ==========

const maas = prompt("Maasinizi giriniz: ");
const calismaSuresi = prompt("Kac yillik calisansiniz? ");

const zamliMaas = calismaSuresi > 10 ? maas*1.5 : (calismaSuresi > 5 ? maas*1.2 : maas*1.05);
console.log(zamliMaas);

// ** ==========  FOR  ==========

const num = Number(prompt("Enter a number: "));
const primeNumber = true;

for (let index = 2; index < num; index++) {
    if(num % index === 0){
        primeNumber = false;
        break;
    }
}
primeNumber === true ? console.log("Number is prime!") : console.log("Number is not prime!");

// ** ==========  WHILE  ==========

let point;
point = prompt("Enter a number between 0 to 100");
while(point < 0 || point > 100){
    console.warn("Incorrect entry. Try again!");
    point = prompt("Enter a number between 0 to 100");
}
console.log("Value is between 0 to 100 👍");

