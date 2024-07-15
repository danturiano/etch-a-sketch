const container = document.querySelector(".container");
const gridBtn = document.querySelector(".gridBtn");
const resetBtn = document.querySelector(".resetBtn");
container.style.display = "flex";
container.style.flexDirection = "column";

let newGridSize;

gridBtn.addEventListener("click", () => {
  newGridSize = prompt("What Grid size do you want?");
  while (newGridSize > 100) {
    newGridSize = prompt(
      "Grid size cannot be greater than 100. What Grid size do you want?"
    );
  }
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  setGrid(newGridSize);
});

resetBtn.addEventListener("click", () => {
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  resetGrid(newGridSize);
});

function setGrid(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";
    container.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.style.color = "red";
      div.style.flex = "1";
      div.style.border = "1px solid #ccc";
      row.appendChild(div);
    }
  }
}

function resetGrid(gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.flex = "1";
    container.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.style.color = "white";
      div.style.flex = "1";
      div.style.border = "1px solid #ccc";
      row.appendChild(div);
    }
  }
}

setGrid();

let isMouseDown = false;

container.addEventListener("mousedown", (event) => {
  if (event.target !== container) {
    event.target.style.backgroundColor = "blue";
    isMouseDown = true;
  }
});

container.addEventListener("mousemove", (event) => {
  if (isMouseDown && event.target !== container) {
    event.target.style.backgroundColor = "blue";
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});
