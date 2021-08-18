// Object literal

const human = {
    name: "Can",
    surname: "Yilmaz",
    age: 30,
    job: "Software Developer",
    languages: ["Java", "JS", "C#", "SQL"]
}

console.log(human);

//.(Dot) Notation
console.log(human.job);

//
console.log(human["name"]);

const words = "My name is ";
console.log(`${words} ${human.name}`);