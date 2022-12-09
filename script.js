// Q 21
let x = "John";
let y = "Doe";

console.log(x, "< >", y);

//Q 22
let personObject = {
  name: "Jovellyn",
  surname: "Quiapos",
  age: 26,
  email: "jovellynanne11:gmail.com",
};

delete personObject.email;
console.log(personObject);

// Q 24
let array1 = [
  "Hello",
  "My",
  "Name",
  "Is",
  "Jovellyn",
  "Nice",
  "To",
  "Meet",
  "You",
  "!",
];

console.log(array1);
// Q 26
let arrayRandom = [];

arrayRandom.push(Math.floor(Math.random() * 101));
console.log(arrayRandom);
//return arrayRandom;

// Q 27
function maxNumber() {}

// Q 27
function minNumber() {}

//Q 28

//Q 29

// Q 30

// =================== DOM =================================

// Q31

let idNode = document.getElementById("container");
console.log(idNode);

// Q 32
let tdNodes = document.getElementsByTagName("td");
console.log(tdNodes);

// Q 33
let allTdNodes = tdNodes;
for (let i = 0; i < tdNodes.length; i++) {
  console.log(allTdNodes[i].innerText);
}

//Q 34
let h1Node = document.querySelector("h1");
let changeTitle = function (newTitle) {
  h1Node.innerText = newTitle;
};

//Q 35
//adding a new row
function newRow() {
  let newRow = document.createElement("tr");
  newRow.innerText = "New added Row";

  document.getElementById("table-container").appendChild(newRow);

  newRow.style.background = "orange";
}

//Q 36
// add class to every row
function addClassTest() {
  let trNodes = document.getElementsByTagName("tr");
  //let allRowNode = document.querySelector("tr");
  trNodes.classList.add("test");

  console.log(trNodes);
  return trNodes;
}

// q 37
function addBackground() {
  let linkNode = document.getElementsByTagName("a");
  linkNode.style.background = "red";
}

// q38
window.onload = function () {
  console.log("Page Loaded");
};
//

//q 39
//adding new items to ul
function addNewItemUl(content) {
  let newItem = document.createElement("li");
  newItem.innerText = content;

  document.getElementById("hobbies").appendChild(newItem);
}

function removeList() {
  let removeList = document.getElementById("favourite-food");
  removeList.remove();
}

function hideImages() {
  let imgSelects = document.getElementsByTagName("img");
  imgSelects.classList.add("hidden");
}

function toggleTable() {}
