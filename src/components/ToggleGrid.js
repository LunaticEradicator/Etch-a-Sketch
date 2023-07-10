/* eslint-disable no-restricted-syntax */

export default function ToggleGrid() {
  const gridToggleDiv = document.querySelector(".grid__toggle");

  function gridToggleFnc() {
    console.log("run");
    const grid = document.querySelectorAll(".main__grid__row");
    for (const grids of grid) {
      // console.log(grids);
      grids.classList.toggle("gridToggleColor");
    }
  }

  function gridToggle() {
    const gridToggleButton = document.createElement("button");
    gridToggleButton.classList.add("grid__toggle__button");
    gridToggleDiv.append(gridToggleButton);
    gridToggleButton.textContent = "Toggle";
    gridToggleButton.addEventListener("click", gridToggleFnc);
  }
  gridToggle();
}
