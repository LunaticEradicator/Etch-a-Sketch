/* eslint-disable no-restricted-syntax */

export default function ToggleGrid() {
  const gridToggleDiv = document.querySelector(".button6");

  function gridToggleFnc() {
    console.log("run");
    const grid = document.querySelectorAll(".classOfEachRow");
    for (const grids of grid) {
      console.log(grids);
      grids.classList.toggle("gridToggle");
    }
  }

  function gridToggle() {
    const gridToggleButton = document.createElement("button");
    gridToggleButton.classList.add("gridToggleBtn");
    gridToggleDiv.append(gridToggleButton);
    gridToggleButton.textContent = "Grid:Toggle";
    gridToggleButton.addEventListener("click", gridToggleFnc);
  }
  gridToggle();
}
