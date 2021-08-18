/* ============== DESTRUCTURING ============= */

const person = {
    name: "Can",
    surname: "Deniz",
    location: "Ankara",
    email: "can.deniz@gmail.com"
}

// 1.Way - Common way 

const name1 = person.name;
const location1 = person.location;

console.log(name1, location1);

// 2.Way - Object Destructuring

const {name2, surname, location, email} = birey;
console.log(name2, surname, location, email);

function obtainInfo(){
    return {
        id: "101",
        productName: "book",
        cost: 8
    }
}

const {id, productName, cost} = obtainInfo();
console.log(productName, cost);

// Array Destructuring

const sports = ["Football", "Basketball", "Tennis", "Golf"];

const [sport1, sport2, sport3, sport4] = sports;
console.log(sport1, sport3);

// REST : on Arrays

const carBrands = ["Ferrari", "Mercedes", "Rolls-Royce", "Audi", "BMW"];
const [carBrand1, carBrand2, carBrand3, ...theOthers] = carBrands;

console.log(carBrand1, carBrand2, carBrand3);
console.log(theOthers);

// REST : on Objects

const perfumes = {
    nameOfPerfume: "Black Orchid",
    brand: "Tom Ford",
    releaseDate: 2011
}

const {nameOfPerfume, brand, ...otherOne} = perfumes;
console.log(otherOne);

// REST : Concatenate of Arrays

const vehicles = ["plane", "train", "bike"];
const foods = ["hamburger", "pizza", "doner", "schnitzel"];

const mixture = [... vehicles, ... foods];
console.log(mixture);

const citrus = ["orange", "lemon", "bergamot"];
const fruits = ["apple", "pear", "melon", "fig", ... citrus];

console.log(fruits);
