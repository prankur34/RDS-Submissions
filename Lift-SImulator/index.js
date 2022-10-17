// Steps
// Take input for floors adn lifts from the user and dynamically
// generate lifts and floors by default all lifts will be at the ground floor

const floorsInput = document.getElementById("input_floors");
const liftsInput = document.getElementById("input_lifts");
const submitForm = document.getElementById("form");

// Create Floors

function createFloors(e) {
  e.preventDefault();
  const floors = [];

  // acces the div and user input to make floors
  const createFloors = document.getElementById("floorsAndLifts");
  for (i = 1; i <= floorsInput.value; i++) {
    const newFloors = document.createElement("HR");
    newFloors.style.margin = "2rem";
    newFloors.style.display = "flex";
    newFloors.style.justifyContent = "space-around";
    createFloors.appendChild(newFloors);
    floors.push(newFloors);
  }

  //  make lifts

  for (j = 1; j <= liftsInput.value; j++) {
    const newLifts = document.createElement("DIV");
    newLifts.style.width = "20px";
    newLifts.style.height = "40px";
    newLifts.style.backgroundColor = "red";
    floors[floors.length - 1].appendChild(newLifts);
  }
}

submitForm.addEventListener("click", createFloors);
