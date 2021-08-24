import Comments from "./data.js";

// Reach to infos
const photo = document.getElementById("person-image");
const author = document.getElementById("author");
const explanation = document.getElementById("explanation");
const job = document.getElementById("job");

// Reach to buttons
const forwardBtn = document.querySelector(".forward-btn");
const backBtn = document.querySelector(".back-btn");
const randomBtn = document.querySelector(".random-btn");

let index = 0;

const showPerson = function (index) {
  const person = Comments[index];
  const { image, personName, profession, comment } = person; // Destructring
  photo.src = image;
  author.textContent = personName;
  job.innerHTML = profession;
  explanation.textContent = comment;
};

showPerson(index);

forwardBtn.onclick = function () {
  index++;
  if (index > Comments.length - 1) {
    index = 0;
  }
  showPerson(index);
};

backBtn.onclick = function () {
  console.log();
  index--;
  if (index < 0) {
    index = Comments.length - 1;
  }
  showPerson(index);
};

randomBtn.onclick = function () {
  index = Math.floor(Math.random() * Comments.length);
  showPerson(index);
};