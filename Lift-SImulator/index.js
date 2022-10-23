/*
Algorithm steps : 
1 - Take input and and make lift and floors based on  the input value
2- Make lifts at the first floor lifts should be dynamic in nature 
3- Make up/down button such that the first floor should have only Up buttona nd
top floor should have only down buttona while other should have both up and down \
button
4-  simulate the lifts like when clicked on the top button the lift  which is free should 
be move to the floor from where it is being called vice-versa for down button
 */

const floorsInput = document.getElementById("input_floors");
const liftsInput = document.getElementById("input_lifts");
const submitForm = document.getElementById("form");
const floors = [];

// make floors
function makeFloors() {
  for (let i = 1; i <= floorsInput.value; i++) {
    const makeFloors = document.createElement("div");
    makeFloors.setAttribute("class", "makeFloors");
    const floorAndLifts = document.getElementById("floorsAndLifts");
    floorAndLifts.appendChild(makeFloors);
    floors.push(makeFloors);
  }
}

// make lifts
function makeLifts() {
  for (let i = 1; i <= floorsInput.value; i++) {
    const makeLifts = document.createElement("div");
    makeLifts.setAttribute("class", "makeLifts");
    floors[floors.length - 1].appendChild(makeLifts);
  }
}
// make buttons
function makeMovingButtons() {}

function simulateLifts(e) {
  e.preventDefault();
  makeFloors();
  makeLifts();
}

submitForm.addEventListener("click", simulateLifts);
