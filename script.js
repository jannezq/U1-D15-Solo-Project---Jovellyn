// Q 21
let x = "John";
let y = "Doe";

console.log(x, "<>", y);

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
let array1 = [];
for (let i = 0; i < 10; i++) {
  array1.push(i);
}

// Q25
for (i = 0; i < array1.length; i++) {
  console.log("Number from array1 " + i);
}

// Q 26
let arrayRandom = [];
for (let i = 0; i < 100; i++) {
  arrayRandom.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayRandom);
//return arrayRandom;

// Q 27
function numberMaxMin(nums) {
  let max = nums[0];
  let min = nums[0];

  //for ... of statement
  for (let num of nums) {
    //if the number is grater than the number from random, it is the ,ax
    max = num > max ? num : max;
    //if the number is smaller than the number from random, it is the smallest
    min = num < min ? num : min;
  }
  return { max, min };
}
console.log(numberMaxMin(arrayRandom));

//Q 28
let anotherArrayInArray = [];

for (let i = 0; i < 10; i++) {
  let newArray = [];
  newArray.push(Math.floor(Math.random() * 10) + 1);
  anotherArrayInArray.push(newArray);
}
console.log("new array :", anotherArrayInArray);

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
  console.log("Every td on table: ", allTdNodes[i].innerText);
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

  //newRow.style.background = "orange";
}

//Q 36
// add class to every row
function addClassTest() {
  //let rowNodes = document.getElementsByTagName("td");
  let trNodes = document.querySelectorAll("tr");
  for (let row of trNodes) {
    row.classList.add("test");
  }
}

// q 37
function addBackground() {
  let linkNode = document.querySelectorAll("a");
  for (let links of linkNode) {
    links.classList.add("background-link");
  }
}

// q38
window.onload = function () {
  console.log("Page Loaded");
};

window.onload = onLoadActions;
//

//q 39
//adding new items to ul
function addNewItemUl(content) {
  let newItem = document.createElement("li");
  newItem.innerText = content;

  document.getElementById("hobbies").appendChild(newItem);
}

// q 40
function removeList() {
  let removeList = document.getElementById("favourite-food");
  removeList.remove();
}

// q 41
function onLoadActions() {
  let linkNode = document.getElementsByTagName("a");
  for (let linknodes of linkNode) {
    linknodes.addEventListener("mouseover", function () {
      alert(linknodes.getAttribute("href"));
    });
  }
}

// q 42
function hideImages() {
  let imgSelects = document.getElementsByTagName("img");
  for (let image of imgSelects) {
    image.classList.toggle("hidden");
  }
}

// q42
function toggleTable() {
  let tableContainer = document.querySelector("table");
  tableContainer.classList.toggle("hidden");
}
