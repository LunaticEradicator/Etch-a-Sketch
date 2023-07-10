/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import HoverEffect from "./HoverEffect";
import CreateGrid from "./CreateGrid";

const gridRangeSelector = document.querySelector(".range");
let rowSize = gridRangeSelector.value;
let columnSize = gridRangeSelector.value;

export default function CustomGrid() {
  const customGridDiv = document.querySelector(".button5");

  function customGridReset() {
    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");

    for (const removeGrid of grid) {
      removeGrid.remove();
      for (const removeBr of br) {
        removeBr.remove();
      }
    }

    rowSize = 0;
    columnSize = 0;
    rowSize = gridRangeSelector.value;
    columnSize = gridRangeSelector.value;
    CreateGrid();
    HoverEffect();

    console.log(`This is the Row Size: ${rowSize} `);
    console.log(`This is the column Size: ${columnSize} `);
  }

  function customGridUpdate() {
    const newScore = document.querySelector(".resetBtn");
    newScore.textContent = `Grid: ${rowSize} x ${columnSize}`;
    newScore.append(gridRangeSelector);
  }

  function customGrid() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = `Grid: ${rowSize} x ${columnSize}`;
    resetBtn.classList.add("resetBtn");
    customGridDiv.append(resetBtn);
    resetBtn.append(gridRangeSelector);

    gridRangeSelector.addEventListener("click", (e) => {
      customGridReset();
      customGridUpdate();
    });
  }

  customGrid(); // new custom grid value
  CreateGrid(); // create the grid from the above value
}

export { gridRangeSelector as range, rowSize, columnSize };
