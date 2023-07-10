/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import HoverEffect from "./HoverEffect";
import CreateGrid from "./CreateGrid";

const gridRangeSelector = document.querySelector(
  ".grid__custom__button__range"
);
let rowSize = gridRangeSelector.value;
let columnSize = gridRangeSelector.value;

export default function CustomGrid() {
  const customGridDiv = document.querySelector(".grid__custom");

  function customGridReset() {
    const grid = document.querySelectorAll(".main__grid__row");
    // const br = document.querySelectorAll("br");

    for (const removeGrid of grid) {
      removeGrid.remove();
      // for (const removeBr of br) {
      // removeBr.remove();
      // }
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
    const newScore = document.querySelector(".grid__custom__button");
    newScore.textContent = `${rowSize} x ${columnSize}`;
    newScore.append(gridRangeSelector);
  }

  function customGrid() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = `${rowSize} x ${columnSize}`;
    resetBtn.classList.add("grid__custom__button");
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
