const birth = 1980;

const ages = [30, 25, 44, 77];

const names = ["Ali", "Veli", "Ahmet", "Can", "Okan", 20, 40, true, 23.4, 2021 - birth, ages];
console.log(names);

console.log(names[0]);
console.log(names[3] = "Mert");
console.log(names);

names[names.length-2] = false;
console.log(names);

console.log(names[10]);

console.log(names[10][0]);

const h1 = document.getElementById("fruits");
let fruits = ["apple", "pear", "banana", "kiwi"];

                    // Array Degistiren Metodlar //
                    // ========================= //

fruits.pop();

const length = fruits.push("strawberry", "watermelon");

console.log(fruits);
console.log(length);

const length2 = fruits.unshift("pomegranate");
console.log(length2);

const deleted = fruits.shift();
console.log(deleted);

fruits.reverse();
console.log(fruits);

fruits.sort();

fruits.splice(1,0,"orange");

console.log(fruits);

fruits.splice(4,1,"mango");

h1.innerHTML = fruits;

                    // Array Erisim Metodlari
                    // ======================

const numbers = [3, 5, 2, "2", "three", 2,"five", 5];

console.log(numbers.includes(5)); // * true
console.log(numbers.includes("5")); // ! false

const indexOfTwo = numbers.indexOf(2);
console.log("Last index of 2: " + numbers.lastIndexOf(2)); // 5th index
console.log("Index of trhee: " + numbers.indexOf("trhee")); // -1
console.log(indexOfTwo); // 2nd index 

const nums1 = numbers.join("-");
console.log(nums1);

const nums2 = numbers.toString();
console.log(nums2);

const cars = ["Mercedes", "BMW", "Audi", "Volkswagen", "Peugeot"];

const c1 = cars.slice(2);
cars.push("Fiat");
console.log(c1);

const c2 = cars.slice(1,3);
console.log(c2);

