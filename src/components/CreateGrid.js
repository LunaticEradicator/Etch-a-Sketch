/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { columnSize, rowSize } from "./CustomGrid";

export default function CreateGrid() {
  const content = document.querySelector(".main__grid");

  // create the first row [rowSize]
  function createRows() {
    for (let i = 0; i < rowSize; i++) {
      const singleRow = document.createElement("div");
      content.style.gridTemplateColumns = `repeat(${columnSize}, 1fr)`;
      content.style.gridTemplateRows = `repeat(${rowSize}, 1fr)`;
      singleRow.classList.add("main__grid__row");
      content.append(singleRow);
    }
  }

  // create a custom amount of column [rowSize] with row [rowSize]
  function createColumns() {
    for (let j = 0; j < columnSize; j++) {
      createRows();
    }
  }
  createColumns();
}
