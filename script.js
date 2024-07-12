const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexDirection = "column";

// Create the 16x16 grid
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.flex = "1";
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.style.color = "red";
    div.style.flex = "1";
    div.style.border = "1px solid #ccc"; // Added to visualize the divs
    row.appendChild(div);
  }
}

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
