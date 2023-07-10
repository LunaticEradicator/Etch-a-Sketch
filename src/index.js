/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import "./sass/style.scss";
import CustomGrid from "./components/CustomGrid";
import ClearColor from "./components/ClearColor";
import ColorPicker from "./components/ColorPicker";
import HoverEffect from "./components/HoverEffect";
import ToggleGrid from "./components/ToggleGrid";
import EraseColor from "./components/EraseColor";
import RGBColor from "./components/RGBColor";

function runEtchASketch() {
  CustomGrid();
  ClearColor();
  ColorPicker();
  HoverEffect();
  ToggleGrid();
  EraseColor();
  RGBColor();
}

runEtchASketch();

// function checkUserInput() {
//     if (rowSize !== 70 && columnSize !== 70) {
//         rowSize = prompt(` Enter the Grid ROW value Below "100" `);
//         while (rowSize === "") {
//             rowSize = prompt("Enter Row Grid Again (Below 100)");
//         }
//         columnSize = prompt(` Enter the Grid COLUMN value Below "100" `);

//         while (columnSize === "") {
//             columnSize = prompt("Enter Column Grid Again (Below 100)");
//         }
//         column();
//     }
//     else {
//         column();
//     }
// }
// grid.module.export();
