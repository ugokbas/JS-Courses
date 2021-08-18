// ============== DESTRUCTURING ============= //

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

const {name, surname, location, email} = birey;
console.log(name, surname, location, email);

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