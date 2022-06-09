let cells = document.querySelectorAll(".cell");
let reset = document.querySelector(".reset");
let clearDisplayBtn = document.querySelector(".clearDisplay");
const column = document.querySelector(".column");
let quad = document.querySelectorAll(".quadContainer");
let mainContainer = document.querySelector(".mainContainer");
let cellOne = document.querySelector(".cellOne");
let cellTwo = document.querySelector(".cellTwo");
let cellThree = document.querySelector(".cellThree");
let cellFour = document.querySelector(".cellFour");
let colorSelector = document.querySelector("#color");
let rainbowBtn = document.querySelector(".rainbow");

let showGrid = document.querySelector(".displayGrid");
let displayGrid = document.querySelector(".displayGrid");

let grid = document.getElementById("grid");
let mainGridOption = document.querySelector(".gridOption");
let backgroundColor = document.querySelector("#backgroundColor");

let isMouseDown = false;

let rainbowActive = false;

clearDisplayBtn.disabled = true;

// Created drawing tool when mouse is held down

// setup a function that resets the grid and run that function using an event listener on the reset button

// Create an event listener that makes all the cells shrink

grid.addEventListener("input", (e) => {
  clearDisplayBtn.disabled = false;

  createGrid();
});

showGrid.addEventListener("click", (e) => {
  mainContainer.classList.toggle("showGrid");
  showGrid.classList.toggle("gridActive");
});

rainbowBtn.addEventListener("click", (e) => {
  rainbowBtn.classList.toggle("showRainbow");
  if (rainbowBtn.classList.contains("showRainbow")) {
    rainbowActive = true;
  } else {
    rainbowActive = false;
  }
});

// Create a function that displays the grid.  element(div) creation will need to be placed in a for loop
function createGrid() {
  backgroundColor.addEventListener("input", (e) => {
    mainContainer.style.background = backgroundColor.value;
  });

  let userInput = grid.value;

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
        if (isMouseDown == true && rainbowActive == true) {
          newDiv.style.background = randomColor();
        }
      } else {
        return;
      }
    });

    grid.addEventListener("input", (e) => {
      newDiv.remove();
    });

    clearDisplayBtn.addEventListener("click", (e) => {
      rainbowActive = false;
      mainContainer.style.background = "white";
      showGrid.classList.remove("gridActive");
      rainbowBtn.classList.remove("showRainbow");
      grid.value = "main";
      backgroundColor.value = "backgroundColor";
      colorSelector.value = "color";
      newDiv.remove();
    });

    if (userInput == 1) {
      newDiv.setAttribute("style", " height: 600px;width:600px;");
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
    } else if (userInput == 10000) {
      newDiv.setAttribute("style", " height: 6px;width: 6px; ");
    }
  }
}

// Create a function to clear the div

// Create a function for the range input

function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  console.log(red);
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}
