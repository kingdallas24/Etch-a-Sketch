let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let gridDisplayBtn = document.querySelector(".gridDisplay");
const column = document.querySelector(".column");
let quad = document.querySelectorAll(".quadContainer");
let mainContainer = document.querySelector(".mainContainer");
let cellOne = document.querySelector(".cellOne");
let cellTwo = document.querySelector(".cellTwo");
let cellThree = document.querySelector(".cellThree");
let cellFour = document.querySelector(".cellFour");
let colorSelector = document.querySelector("#color");

let isMouseDown = false;

reset.disabled = true;

// Created drawing tool when mouse is held down

// setup a function that resets the grid and run that function using an event listener on the reset button

function resetGrid() {
  location.reload();
}

reset.addEventListener("click", (e) => {
  resetGrid();
});

// Create an event listener that makes all the cells shrink

gridDisplayBtn.addEventListener("click", (e) => {
  reset.disabled = false;

  createGrid();
});

// Create a function that displays the grid.  element(div) creation will need to be placed in a for loop
function createGrid() {
  let userInput = parseInt(
    prompt("Number of cells. Options: 1,2,4,9,16,25,100,400,1600, and 6400")
  );

  for (let i = 0; i < userInput; i++) {
    let newDiv = document.createElement("div");

    mainContainer.appendChild(newDiv);
    newDiv.addEventListener("mousedown", (e) => {
      isMouseDown = true;
    });

    newDiv.addEventListener("mouseup", (e) => {
      isMouseDown = false;
    });

    newDiv.addEventListener("mousemove", (e) => {
      if (isMouseDown == true) {
        newDiv.style.background = colorSelector.value;
      } else {
        return;
      }
    });

    gridDisplayBtn.addEventListener("click", (e) => {
      newDiv.remove();
    });

    if (userInput == 1) {
      newDiv.setAttribute("style", " height: 600px;width:600px;");
    } else if (userInput == 2) {
      newDiv.setAttribute("style", " height: 600px;width:300px;; ");
    } else if (userInput == 4) {
      newDiv.setAttribute("style", " height: 300px;width:300px;; ");
    } else if (userInput == 9) {
      newDiv.setAttribute("style", " height: 200px;width: 200px;; ");
    } else if (userInput == 16) {
      newDiv.setAttribute("style", " height: 150px;width: 150px;; ");
    } else if (userInput == 25) {
      newDiv.setAttribute("style", " height: 120px;width: 120px; ");
    } else if (userInput == 100) {
      newDiv.setAttribute("style", " height: 60px;width: 60px; ");
    } else if (userInput == 400) {
      newDiv.setAttribute("style", " height: 30px;width: 30px; ");
    } else if (userInput == 1600) {
      newDiv.setAttribute("style", " height: 15px;width: 15px; ");
    } else if (userInput == 6400) {
      newDiv.setAttribute("style", " height: 7.5px;width: 7.5px; ");
    }
  }
}

// Create a function to clear the div
