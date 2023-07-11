"use strict";
(self["webpackChunketch_a_sketch"] = self["webpackChunketch_a_sketch"] || []).push([["main"],{

/***/ "./src/components/ClearColor.js":
/*!**************************************!*\
  !*** ./src/components/ClearColor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearColor)
/* harmony export */ });
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateGrid */ "./src/components/CreateGrid.js");
/* harmony import */ var _HoverEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoverEffect */ "./src/components/HoverEffect.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */



function ClearColor() {
  const clearColorDiv = document.querySelector(".main__allButton__clear");
  function clearColorFnc() {
    const grid = document.querySelectorAll(".main__grid__row");
    // const br = document.querySelectorAll("br");

    for (const clearGrid of grid) {
      clearGrid.remove();
      // for (const removeBr of br) {
      //   removeBr.remove();
      // }
    }

    (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_HoverEffect__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
  function clearColor() {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    clearBtn.classList.add("main__allButton__clear__button");
    clearColorDiv.append(clearBtn);
    clearBtn.addEventListener("click", clearColorFnc);
  }
  clearColor();
}

/***/ }),

/***/ "./src/components/ColorPicker.js":
/*!***************************************!*\
  !*** ./src/components/ColorPicker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
function ColorPicker() {
  const colorDiv = document.querySelector(".main__button__colorPicker");
  function colorPickerFnc() {
    const tempColorPickerBtn = document.querySelector(".main__button__colorPicker__button__size");
    const grid = document.querySelectorAll(".main__grid__row");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", e => {
        e.target.style.backgroundColor = tempColorPickerBtn.value;
      });
    }
  }
  function colorPicker() {
    const colorPickerButton = document.createElement("button");
    colorPickerButton.classList.add(".main__button__colorPicker__button");
    colorDiv.append(colorPickerButton);
    const colorPickerInput = document.createElement("input");
    colorPickerInput.classList.add("main__button__colorPicker__button__size");
    colorPickerInput.setAttribute("type", "color"); // to display color preview
    colorPickerInput.setAttribute("value", "#f0f8ff"); // to change the selected color
    colorPickerButton.append(colorPickerInput);
    colorPickerButton.addEventListener("click", colorPickerFnc);
  }
  colorPicker();
}

/***/ }),

/***/ "./src/components/CreateGrid.js":
/*!**************************************!*\
  !*** ./src/components/CreateGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateGrid)
/* harmony export */ });
/* harmony import */ var _CustomGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomGrid */ "./src/components/CustomGrid.js");
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */

function CreateGrid() {
  const content = document.querySelector(".main__grid");

  // create the first row [rowSize]
  function createRows() {
    for (let i = 0; i < _CustomGrid__WEBPACK_IMPORTED_MODULE_0__.rowSize; i++) {
      const singleRow = document.createElement("div");
      content.style.gridTemplateColumns = `repeat(${_CustomGrid__WEBPACK_IMPORTED_MODULE_0__.columnSize}, 1fr)`;
      content.style.gridTemplateRows = `repeat(${_CustomGrid__WEBPACK_IMPORTED_MODULE_0__.rowSize}, 1fr)`;
      singleRow.classList.add("main__grid__row");
      content.append(singleRow);
    }
  }

  // create a custom amount of column [rowSize] with row [rowSize]
  function createColumns() {
    for (let j = 0; j < _CustomGrid__WEBPACK_IMPORTED_MODULE_0__.columnSize; j++) {
      createRows();
    }
  }
  createColumns();
}

/***/ }),

/***/ "./src/components/CustomGrid.js":
/*!**************************************!*\
  !*** ./src/components/CustomGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   columnSize: () => (/* binding */ columnSize),
/* harmony export */   "default": () => (/* binding */ CustomGrid),
/* harmony export */   range: () => (/* binding */ gridRangeSelector),
/* harmony export */   rowSize: () => (/* binding */ rowSize)
/* harmony export */ });
/* harmony import */ var _HoverEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverEffect */ "./src/components/HoverEffect.js");
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateGrid */ "./src/components/CreateGrid.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */



const gridRangeSelector = document.querySelector(".grid__custom__button__range");
let rowSize = gridRangeSelector.value;
let columnSize = gridRangeSelector.value;
function CustomGrid() {
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
    (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_HoverEffect__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    gridRangeSelector.addEventListener("click", e => {
      customGridReset();
      customGridUpdate();
    });
  }
  customGrid(); // new custom grid value
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_1__["default"])(); // create the grid from the above value
}



/***/ }),

/***/ "./src/components/EraseColor.js":
/*!**************************************!*\
  !*** ./src/components/EraseColor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EraseColor)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */

function EraseColor() {
  const eraseColorDiv = document.querySelector(".main__allButton__erase");
  function eraseColorFnc() {
    const grid = document.querySelectorAll(".main__grid__row");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", e => {
        e.target.style.backgroundColor = "#152224";
      });
    }
  }
  function eraseColor() {
    const eraserBtn = document.createElement("button");
    eraserBtn.textContent = "Eraser";
    eraserBtn.classList.add("main__allButton__erase__button");
    eraseColorDiv.append(eraserBtn);
    eraserBtn.addEventListener("click", eraseColorFnc);
  }
  eraseColor();
}

/***/ }),

/***/ "./src/components/HoverEffect.js":
/*!***************************************!*\
  !*** ./src/components/HoverEffect.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HoverEffect)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

function HoverEffect() {
  function hoverEffect() {
    const grid = document.querySelectorAll(".main__grid__row");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", e => {
        e.target.classList.add("defaultHoverColor");
        // console.log("Selected");
      });
    }
  }

  hoverEffect();
}

/***/ }),

/***/ "./src/components/RGBColor.js":
/*!************************************!*\
  !*** ./src/components/RGBColor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RGBColor)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */

function RGBColor() {
  const rgbColorDiv = document.querySelector(".main__button__rgbColor");
  function randomColor() {
    const rand = Math.floor(Math.random() * 16777215).toString(16);
    return rand;
  }
  function randomRGBFnc() {
    const grid = document.querySelectorAll(".main__grid__row");
    for (const grids of grid) {
      grids.addEventListener("mouseenter", e => {
        e.target.style.backgroundColor = `#${randomColor()}`;
      });
    }
  }
  function randomRGB() {
    const rgbButton = document.createElement("button");
    rgbButton.textContent = "RGB Mode";
    rgbButton.classList.add(".main__button__rgbColor_button");
    rgbColorDiv.append(rgbButton);
    rgbButton.addEventListener("click", randomRGBFnc);
  }
  randomRGB();
}

/***/ }),

/***/ "./src/components/ToggleGrid.js":
/*!**************************************!*\
  !*** ./src/components/ToggleGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleGrid)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */

function ToggleGrid() {
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _components_CustomGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CustomGrid */ "./src/components/CustomGrid.js");
/* harmony import */ var _components_ClearColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClearColor */ "./src/components/ClearColor.js");
/* harmony import */ var _components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ColorPicker */ "./src/components/ColorPicker.js");
/* harmony import */ var _components_HoverEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HoverEffect */ "./src/components/HoverEffect.js");
/* harmony import */ var _components_ToggleGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ToggleGrid */ "./src/components/ToggleGrid.js");
/* harmony import */ var _components_EraseColor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/EraseColor */ "./src/components/EraseColor.js");
/* harmony import */ var _components_RGBColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RGBColor */ "./src/components/RGBColor.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */









function runEtchASketch() {
  (0,_components_CustomGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_ClearColor__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_components_HoverEffect__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_ToggleGrid__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_EraseColor__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_RGBColor__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_ColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background-color: #d6e2cf;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}

h1 {
  color: #354f52;
  text-align: center;
  font-size: 4rem;
  margin-left: 65px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
}
.header__icon {
  width: 100px;
  height: 100px;
  box-shadow: 10px 1px 17px #000000;
  border-radius: 50%;
  transition: 0.6s all;
}
.header__icon:hover {
  transform: scale(1.1);
  border-radius: 50%;
  box-shadow: 10px 1px 17px #000000;
}
@media (max-width: 90em) {
  .header__icon {
    width: 80px;
    height: 80px;
  }
}
@media (max-width: 56.25em) {
  .header__icon {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 43.75em) {
  .header__icon {
    width: 40px;
    height: 40px;
  }
}
.header__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  position: relative;
}
.header__title__two {
  color: #354f52;
  position: absolute;
  top: 50%;
  left: 38%;
  transform: scale(1, -1);
}
@media (max-width: 90em) {
  .header__title {
    font-size: 4rem;
  }
}
@media (max-width: 56.25em) {
  .header__title {
    font-size: 3rem;
  }
}
@media (max-width: 43.75em) {
  .header__title {
    font-size: 2rem;
  }
}

.grid {
  display: flex;
  justify-content: center;
  padding-right: 20px;
}
.grid__custom {
  padding-right: 20px;
}
.grid__custom__button:active {
  font-size: medium !important;
}
@media (max-width: 43.75em) {
  .grid__custom__button {
    font-size: 0.9rem !important;
  }
}

.grid__custom__button__range {
  appearance: none;
  width: 90px;
  height: 12px;
  cursor: pointer;
  border: 3px solid #ebd48a;
  background-color: #152224;
  border-radius: 10px;
  margin-top: 4.5px;
}
@media (max-width: 90em) {
  .grid__custom__button__range {
    width: 85px;
    height: 12px;
  }
}
@media (max-width: 56.25em) {
  .grid__custom__button__range {
    width: 83px;
    height: 12px;
  }
}
@media (max-width: 43.75em) {
  .grid__custom__button__range {
    width: 30px;
    height: 10px;
  }
}

.gridToggleColor {
  border: 1px solid rgb(24, 105, 28);
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 5px solid #152224;
  border-radius: 50%;
}
.main__allButton__erase {
  margin-top: 20px;
}
@media (max-width: 90em) {
  .main {
    padding-bottom: 40px;
    border-bottom: 5px solid #152224;
    border-radius: 49%;
  }
}
@media (max-width: 56.25em) {
  .main {
    padding-bottom: 30px;
    border-bottom: 5px solid #152224;
    border-radius: 48%;
  }
}
@media (max-width: 43.75em) {
  .main {
    padding-bottom: 20px;
    border-bottom: 5px solid #152224;
    border-radius: 47%;
  }
}

.main__grid {
  width: 500px;
  height: 500px;
  font-size: 0px;
  background-color: #152224;
  border-top: 0px solid #ebd48a;
  border: 3.5px solid #ebd48a;
  margin: 10px;
  box-shadow: 1px -1px 17px #ebd48a;
  margin-bottom: 50px;
  display: grid;
}
@media (max-width: 90em) {
  .main__grid {
    width: 400px;
    height: 400px;
  }
}
@media (max-width: 56.25em) {
  .main__grid {
    width: 300px;
    height: 300px;
  }
}
@media (max-width: 43.75em) {
  .main__grid {
    width: 250px;
    height: 180px;
  }
}
.main__grid__row {
  background-color: #152224;
}

.main__button__rgbColor {
  margin-top: 20px;
}
.main__button__colorPicker__button__size {
  background-color: #f8f1db;
  border: none;
  padding: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
@media (max-width: 90em) {
  .main__button__colorPicker__button__size {
    width: 60px;
    height: 60px;
  }
}
@media (max-width: 56.25em) {
  .main__button__colorPicker__button__size {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 43.75em) {
  .main__button__colorPicker__button__size {
    width: 35px;
    height: 35px;
  }
}

.defaultHoverColor {
  background-color: #f0f8ff;
}

button {
  height: 150px;
  width: 150px;
  background-color: #f8f1db;
  color: #152224;
  font-size: medium;
  font-style: italic;
  text-align: center;
  border-radius: 50%;
  border: none;
  border: 1px solid #1c7c54;
  transition: background-color 0.25s;
  font-size: 1.3rem;
}
button:hover {
  background-color: #152224;
  color: #f8f1db;
  opacity: 70%;
  cursor: pointer;
}
button:active {
  box-shadow: 1px 1px 10px #00ffd5;
  font-size: larger;
  opacity: 1;
}
@media (max-width: 90em) {
  button {
    width: 140px;
    height: 140px;
    font-size: 1.2rem;
  }
}
@media (max-width: 56.25em) {
  button {
    width: 130px;
    height: 130px;
    font-size: 1.2rem;
  }
}
@media (max-width: 43.75em) {
  button {
    width: 65px;
    height: 65px;
    font-size: 1rem;
  }
}

input[type=range]::-webkit-slider-thumb {
  appearance: none;
  height: 11px;
  width: 9px;
  border: 1px solid #ebd48a;
  border-radius: 30%;
  background: rgb(255, 255, 255);
}`, "",{"version":3,"sources":["webpack://./src/sass/global/_boilerPlates.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/game__header.scss","webpack://./src/sass/util/breakpoint.scss","webpack://./src/sass/components/game__grid.scss","webpack://./src/sass/components/game__main.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  background-color: #d6e2cf;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nh1 {\r\n  color: #354f52;\r\n  text-align: center;\r\n  font-size: 4rem;\r\n  margin-left: 65px;\r\n}\r\n","@forward \"global\";\r\n@forward \"components\";\r\n@forward \"util\";\r\n\r\n@use \"./util/\" as ut;\r\n\r\nbutton {\r\n  height: 150px;\r\n  width: 150px;\r\n  background-color: #f8f1db;\r\n  color: #152224;\r\n  font-size: medium;\r\n  font-style: italic;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  border: none;\r\n  border: 1px solid #1c7c54;\r\n  transition: background-color 0.25s;\r\n  font-size: 1.3rem;\r\n\r\n  &:hover {\r\n    background-color: #152224;\r\n    color: #f8f1db;\r\n    opacity: 70%;\r\n    cursor: pointer;\r\n  }\r\n  &:active {\r\n    box-shadow: 1px 1px 10px #00ffd5;\r\n    font-size: larger;\r\n    opacity: 1;\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 140px;\r\n    height: 140px;\r\n    font-size: 1.2rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 130px;\r\n    height: 130px;\r\n    font-size: 1.2rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 65px;\r\n    height: 65px;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n  appearance: none;\r\n  height: 11px;\r\n  width: 9px;\r\n  border: 1px solid #ebd48a;\r\n  border-radius: 30%;\r\n  background: rgb(255, 255, 255);\r\n}\r\n","@use \"../util/\" as ut;\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin-bottom: 30px;\r\n  &__icon {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-shadow: 10px 1px 17px #000000;\r\n    border-radius: 50%;\r\n    transition: 0.6s all;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n      border-radius: 50%;\r\n      box-shadow: 10px 1px 17px #000000;\r\n    }\r\n    @include ut.breakpoint(xLarge) {\r\n      width: 80px;\r\n      height: 80px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      width: 60px;\r\n      height: 60px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      width: 40px;\r\n      height: 40px;\r\n    }\r\n  }\r\n  &__title {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 5rem;\r\n    position: relative;\r\n    &__two {\r\n      color: #354f52;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 38%;\r\n      transform: scale(1, -1);\r\n    }\r\n    @include ut.breakpoint(xLarge) {\r\n      font-size: 4rem;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      font-size: 3rem;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      font-size: 2rem;\r\n    }\r\n  }\r\n}\r\n","$breakpoints: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../util/\" as ut;\r\n\r\n.grid {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-right: 20px;\r\n  &__custom {\r\n    padding-right: 20px;\r\n    &__button {\r\n      &:active {\r\n        font-size: medium !important;\r\n      }\r\n      @include ut.breakpoint(medium) {\r\n        font-size: 0.9rem !important;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.grid__custom__button__range {\r\n  appearance: none;\r\n  width: 90px;\r\n  height: 12px;\r\n  cursor: pointer;\r\n  border: 3px solid #ebd48a;\r\n  background-color: #152224;\r\n  border-radius: 10px;\r\n  margin-top: 4.5px;\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 85px;\r\n    height: 12px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 83px;\r\n    height: 12px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 30px;\r\n    height: 10px;\r\n  }\r\n}\r\n.gridToggleColor {\r\n  border: 1px solid rgb(24, 105, 28);\r\n}\r\n","@use \"../util/\" as ut;\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  padding-bottom: 50px;\r\n  border-bottom: 5px solid #152224;\r\n  border-radius: 50%;\r\n\r\n  &__allButton {\r\n    &__erase {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    padding-bottom: 40px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 49%;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    padding-bottom: 30px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 48%;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    padding-bottom: 20px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 47%;\r\n  }\r\n}\r\n\r\n.main__grid {\r\n  width: 500px;\r\n  height: 500px;\r\n  font-size: 0px;\r\n  background-color: #152224;\r\n  border-top: 0px solid #ebd48a;\r\n  border: 3.5px solid #ebd48a;\r\n  margin: 10px;\r\n  box-shadow: 1px -1px 17px #ebd48a;\r\n  margin-bottom: 50px;\r\n  display: grid;\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 400px;\r\n    height: 400px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 250px;\r\n    height: 180px;\r\n  }\r\n  &__row {\r\n    background-color: #152224;\r\n  }\r\n}\r\n\r\n.main__button {\r\n  &__rgbColor {\r\n    margin-top: 20px;\r\n  }\r\n  &__colorPicker__button__size {\r\n    background-color: #f8f1db;\r\n    border: none;\r\n    padding: 0;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n    @include ut.breakpoint(xLarge) {\r\n      width: 60px;\r\n      height: 60px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      width: 50px;\r\n      height: 50px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      width: 35px;\r\n      height: 35px;\r\n    }\r\n  }\r\n}\r\n\r\n.defaultHoverColor {\r\n  background-color: #f0f8ff;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywyVUFBMlUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvQ2xlYXJDb2xvci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0VyYXNlQ29sb3IuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0hvdmVyRWZmZWN0LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy9SR0JDb2xvci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz80ZDM3Iiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuXHJcbmltcG9ydCBDcmVhdGVHcmlkIGZyb20gXCIuL0NyZWF0ZUdyaWRcIjtcclxuaW1wb3J0IEhvdmVyRWZmZWN0IGZyb20gXCIuL0hvdmVyRWZmZWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGVhckNvbG9yKCkge1xyXG4gIGNvbnN0IGNsZWFyQ29sb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2FsbEJ1dHRvbl9fY2xlYXJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyQ29sb3JGbmMoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcbiAgICAvLyBjb25zdCBiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJiclwiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNsZWFyR3JpZCBvZiBncmlkKSB7XHJcbiAgICAgIGNsZWFyR3JpZC5yZW1vdmUoKTtcclxuICAgICAgLy8gZm9yIChjb25zdCByZW1vdmVCciBvZiBicikge1xyXG4gICAgICAvLyAgIHJlbW92ZUJyLnJlbW92ZSgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBDcmVhdGVHcmlkKCk7XHJcbiAgICBIb3ZlckVmZmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJDb2xvcigpIHtcclxuICAgIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNsZWFyQnRuLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xyXG4gICAgY2xlYXJCdG4uY2xhc3NMaXN0LmFkZChcIm1haW5fX2FsbEJ1dHRvbl9fY2xlYXJfX2J1dHRvblwiKTtcclxuICAgIGNsZWFyQ29sb3JEaXYuYXBwZW5kKGNsZWFyQnRuKTtcclxuXHJcbiAgICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJDb2xvckZuYyk7XHJcbiAgfVxyXG5cclxuICBjbGVhckNvbG9yKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sb3JQaWNrZXIoKSB7XHJcbiAgY29uc3QgY29sb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGNvbG9yUGlja2VyRm5jKCkge1xyXG4gICAgY29uc3QgdGVtcENvbG9yUGlja2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIubWFpbl9fYnV0dG9uX19jb2xvclBpY2tlcl9fYnV0dG9uX19zaXplXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcblxyXG4gICAgZm9yIChjb25zdCBlYWNoR3JpZCBvZiBncmlkKSB7XHJcbiAgICAgIGVhY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGVtcENvbG9yUGlja2VyQnRuLnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbG9yUGlja2VyKCkge1xyXG4gICAgY29uc3QgY29sb3JQaWNrZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29sb3JQaWNrZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIi5tYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25cIik7XHJcbiAgICBjb2xvckRpdi5hcHBlbmQoY29sb3JQaWNrZXJCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGNvbG9yUGlja2VySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb2xvclBpY2tlcklucHV0LmNsYXNzTGlzdC5hZGQoXCJtYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25fX3NpemVcIik7XHJcbiAgICBjb2xvclBpY2tlcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTsgLy8gdG8gZGlzcGxheSBjb2xvciBwcmV2aWV3XHJcbiAgICBjb2xvclBpY2tlcklucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiI2YwZjhmZlwiKTsgLy8gdG8gY2hhbmdlIHRoZSBzZWxlY3RlZCBjb2xvclxyXG4gICAgY29sb3JQaWNrZXJCdXR0b24uYXBwZW5kKGNvbG9yUGlja2VySW5wdXQpO1xyXG5cclxuICAgIGNvbG9yUGlja2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb2xvclBpY2tlckZuYyk7XHJcbiAgfVxyXG4gIGNvbG9yUGlja2VyKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCB7IGNvbHVtblNpemUsIHJvd1NpemUgfSBmcm9tIFwiLi9DdXN0b21HcmlkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVHcmlkKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2dyaWRcIik7XHJcblxyXG4gIC8vIGNyZWF0ZSB0aGUgZmlyc3Qgcm93IFtyb3dTaXplXVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVJvd3MoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd1NpemU7IGkrKykge1xyXG4gICAgICBjb25zdCBzaW5nbGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uU2l6ZX0sIDFmcilgO1xyXG4gICAgICBjb250ZW50LnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBgcmVwZWF0KCR7cm93U2l6ZX0sIDFmcilgO1xyXG4gICAgICBzaW5nbGVSb3cuY2xhc3NMaXN0LmFkZChcIm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuICAgICAgY29udGVudC5hcHBlbmQoc2luZ2xlUm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNyZWF0ZSBhIGN1c3RvbSBhbW91bnQgb2YgY29sdW1uIFtyb3dTaXplXSB3aXRoIHJvdyBbcm93U2l6ZV1cclxuICBmdW5jdGlvbiBjcmVhdGVDb2x1bW5zKCkge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5TaXplOyBqKyspIHtcclxuICAgICAgY3JlYXRlUm93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjcmVhdGVDb2x1bW5zKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuXHJcbmltcG9ydCBIb3ZlckVmZmVjdCBmcm9tIFwiLi9Ib3ZlckVmZmVjdFwiO1xyXG5pbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi9DcmVhdGVHcmlkXCI7XHJcblxyXG5jb25zdCBncmlkUmFuZ2VTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZ3JpZF9fY3VzdG9tX19idXR0b25fX3JhbmdlXCJcclxuKTtcclxubGV0IHJvd1NpemUgPSBncmlkUmFuZ2VTZWxlY3Rvci52YWx1ZTtcclxubGV0IGNvbHVtblNpemUgPSBncmlkUmFuZ2VTZWxlY3Rvci52YWx1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUdyaWQoKSB7XHJcbiAgY29uc3QgY3VzdG9tR3JpZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fY3VzdG9tXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjdXN0b21HcmlkUmVzZXQoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcbiAgICAvLyBjb25zdCBiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJiclwiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHJlbW92ZUdyaWQgb2YgZ3JpZCkge1xyXG4gICAgICByZW1vdmVHcmlkLnJlbW92ZSgpO1xyXG4gICAgICAvLyBmb3IgKGNvbnN0IHJlbW92ZUJyIG9mIGJyKSB7XHJcbiAgICAgIC8vIHJlbW92ZUJyLnJlbW92ZSgpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcm93U2l6ZSA9IDA7XHJcbiAgICBjb2x1bW5TaXplID0gMDtcclxuICAgIHJvd1NpemUgPSBncmlkUmFuZ2VTZWxlY3Rvci52YWx1ZTtcclxuICAgIGNvbHVtblNpemUgPSBncmlkUmFuZ2VTZWxlY3Rvci52YWx1ZTtcclxuICAgIENyZWF0ZUdyaWQoKTtcclxuICAgIEhvdmVyRWZmZWN0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYFRoaXMgaXMgdGhlIFJvdyBTaXplOiAke3Jvd1NpemV9IGApO1xyXG4gICAgY29uc29sZS5sb2coYFRoaXMgaXMgdGhlIGNvbHVtbiBTaXplOiAke2NvbHVtblNpemV9IGApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3VzdG9tR3JpZFVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG5ld1Njb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jdXN0b21fX2J1dHRvblwiKTtcclxuICAgIG5ld1Njb3JlLnRleHRDb250ZW50ID0gYCR7cm93U2l6ZX0geCAke2NvbHVtblNpemV9YDtcclxuICAgIG5ld1Njb3JlLmFwcGVuZChncmlkUmFuZ2VTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjdXN0b21HcmlkKCkge1xyXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBgJHtyb3dTaXplfSB4ICR7Y29sdW1uU2l6ZX1gO1xyXG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcImdyaWRfX2N1c3RvbV9fYnV0dG9uXCIpO1xyXG4gICAgY3VzdG9tR3JpZERpdi5hcHBlbmQocmVzZXRCdG4pO1xyXG4gICAgcmVzZXRCdG4uYXBwZW5kKGdyaWRSYW5nZVNlbGVjdG9yKTtcclxuXHJcbiAgICBncmlkUmFuZ2VTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY3VzdG9tR3JpZFJlc2V0KCk7XHJcbiAgICAgIGN1c3RvbUdyaWRVcGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tR3JpZCgpOyAvLyBuZXcgY3VzdG9tIGdyaWQgdmFsdWVcclxuICBDcmVhdGVHcmlkKCk7IC8vIGNyZWF0ZSB0aGUgZ3JpZCBmcm9tIHRoZSBhYm92ZSB2YWx1ZVxyXG59XHJcblxyXG5leHBvcnQgeyBncmlkUmFuZ2VTZWxlY3RvciBhcyByYW5nZSwgcm93U2l6ZSwgY29sdW1uU2l6ZSB9O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJhc2VDb2xvcigpIHtcclxuICBjb25zdCBlcmFzZUNvbG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19hbGxCdXR0b25fX2VyYXNlXCIpO1xyXG5cclxuICBmdW5jdGlvbiBlcmFzZUNvbG9yRm5jKCkge1xyXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fZ3JpZF9fcm93XCIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgZWFjaEdyaWQgb2YgZ3JpZCkge1xyXG4gICAgICBlYWNoR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE1MjIyNFwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVyYXNlQ29sb3IoKSB7XHJcbiAgICBjb25zdCBlcmFzZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZXJhc2VyQnRuLnRleHRDb250ZW50ID0gXCJFcmFzZXJcIjtcclxuICAgIGVyYXNlckJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYWxsQnV0dG9uX19lcmFzZV9fYnV0dG9uXCIpO1xyXG4gICAgZXJhc2VDb2xvckRpdi5hcHBlbmQoZXJhc2VyQnRuKTtcclxuICAgIGVyYXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXJhc2VDb2xvckZuYyk7XHJcbiAgfVxyXG4gIGVyYXNlQ29sb3IoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG92ZXJFZmZlY3QoKSB7XHJcbiAgZnVuY3Rpb24gaG92ZXJFZmZlY3QoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcbiAgICBmb3IgKGNvbnN0IGVhY2hHcmlkIG9mIGdyaWQpIHtcclxuICAgICAgZWFjaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZGVmYXVsdEhvdmVyQ29sb3JcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RlZFwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhvdmVyRWZmZWN0KCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJHQkNvbG9yKCkge1xyXG4gIGNvbnN0IHJnYkNvbG9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX19idXR0b25fX3JnYkNvbG9yXCIpO1xyXG5cclxuICBmdW5jdGlvbiByYW5kb21Db2xvcigpIHtcclxuICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIHJhbmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByYW5kb21SR0JGbmMoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcbiAgICBmb3IgKGNvbnN0IGdyaWRzIG9mIGdyaWQpIHtcclxuICAgICAgZ3JpZHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7cmFuZG9tQ29sb3IoKX1gO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbVJHQigpIHtcclxuICAgIGNvbnN0IHJnYkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByZ2JCdXR0b24udGV4dENvbnRlbnQgPSBcIlJHQiBNb2RlXCI7XHJcbiAgICByZ2JCdXR0b24uY2xhc3NMaXN0LmFkZChcIi5tYWluX19idXR0b25fX3JnYkNvbG9yX2J1dHRvblwiKTtcclxuICAgIHJnYkNvbG9yRGl2LmFwcGVuZChyZ2JCdXR0b24pO1xyXG5cclxuICAgIHJnYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZG9tUkdCRm5jKTtcclxuICB9XHJcblxyXG4gIHJhbmRvbVJHQigpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2dnbGVHcmlkKCkge1xyXG4gIGNvbnN0IGdyaWRUb2dnbGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX3RvZ2dsZVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gZ3JpZFRvZ2dsZUZuYygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicnVuXCIpO1xyXG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fZ3JpZF9fcm93XCIpO1xyXG4gICAgZm9yIChjb25zdCBncmlkcyBvZiBncmlkKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWRzKTtcclxuICAgICAgZ3JpZHMuY2xhc3NMaXN0LnRvZ2dsZShcImdyaWRUb2dnbGVDb2xvclwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdyaWRUb2dnbGUoKSB7XHJcbiAgICBjb25zdCBncmlkVG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGdyaWRUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImdyaWRfX3RvZ2dsZV9fYnV0dG9uXCIpO1xyXG4gICAgZ3JpZFRvZ2dsZURpdi5hcHBlbmQoZ3JpZFRvZ2dsZUJ1dHRvbik7XHJcbiAgICBncmlkVG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gXCJUb2dnbGVcIjtcclxuICAgIGdyaWRUb2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdyaWRUb2dnbGVGbmMpO1xyXG4gIH1cclxuICBncmlkVG9nZ2xlKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuXHJcbmltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBDdXN0b21HcmlkIGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tR3JpZFwiO1xyXG5pbXBvcnQgQ2xlYXJDb2xvciBmcm9tIFwiLi9jb21wb25lbnRzL0NsZWFyQ29sb3JcIjtcclxuaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuL2NvbXBvbmVudHMvQ29sb3JQaWNrZXJcIjtcclxuaW1wb3J0IEhvdmVyRWZmZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvSG92ZXJFZmZlY3RcIjtcclxuaW1wb3J0IFRvZ2dsZUdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9Ub2dnbGVHcmlkXCI7XHJcbmltcG9ydCBFcmFzZUNvbG9yIGZyb20gXCIuL2NvbXBvbmVudHMvRXJhc2VDb2xvclwiO1xyXG5pbXBvcnQgUkdCQ29sb3IgZnJvbSBcIi4vY29tcG9uZW50cy9SR0JDb2xvclwiO1xyXG5cclxuZnVuY3Rpb24gcnVuRXRjaEFTa2V0Y2goKSB7XHJcbiAgQ3VzdG9tR3JpZCgpO1xyXG4gIENsZWFyQ29sb3IoKTtcclxuICBIb3ZlckVmZmVjdCgpO1xyXG4gIFRvZ2dsZUdyaWQoKTtcclxuICBFcmFzZUNvbG9yKCk7XHJcbiAgUkdCQ29sb3IoKTtcclxuICBDb2xvclBpY2tlcigpO1xyXG59XHJcblxyXG5ydW5FdGNoQVNrZXRjaCgpO1xyXG5cclxuLy8gZnVuY3Rpb24gY2hlY2tVc2VySW5wdXQoKSB7XHJcbi8vICAgICBpZiAocm93U2l6ZSAhPT0gNzAgJiYgY29sdW1uU2l6ZSAhPT0gNzApIHtcclxuLy8gICAgICAgICByb3dTaXplID0gcHJvbXB0KGAgRW50ZXIgdGhlIEdyaWQgUk9XIHZhbHVlIEJlbG93IFwiMTAwXCIgYCk7XHJcbi8vICAgICAgICAgd2hpbGUgKHJvd1NpemUgPT09IFwiXCIpIHtcclxuLy8gICAgICAgICAgICAgcm93U2l6ZSA9IHByb21wdChcIkVudGVyIFJvdyBHcmlkIEFnYWluIChCZWxvdyAxMDApXCIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjb2x1bW5TaXplID0gcHJvbXB0KGAgRW50ZXIgdGhlIEdyaWQgQ09MVU1OIHZhbHVlIEJlbG93IFwiMTAwXCIgYCk7XHJcblxyXG4vLyAgICAgICAgIHdoaWxlIChjb2x1bW5TaXplID09PSBcIlwiKSB7XHJcbi8vICAgICAgICAgICAgIGNvbHVtblNpemUgPSBwcm9tcHQoXCJFbnRlciBDb2x1bW4gR3JpZCBBZ2FpbiAoQmVsb3cgMTAwKVwiKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY29sdW1uKCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgICBjb2x1bW4oKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBncmlkLm1vZHVsZS5leHBvcnQoKTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlMmNmO1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjMzU0ZjUyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5oZWFkZXJfX2ljb24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDEwcHggMXB4IDE3cHggIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjZzIGFsbDtcbn1cbi5oZWFkZXJfX2ljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMTBweCAxcHggMTdweCAjMDAwMDAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmhlYWRlcl9faWNvbiB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuaGVhZGVyX19pY29uIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5oZWFkZXJfX2ljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxufVxuLmhlYWRlcl9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX190aXRsZV9fdHdvIHtcbiAgY29sb3I6ICMzNTRmNTI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDM4JTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuaGVhZGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZ3JpZF9fY3VzdG9tIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5ncmlkX19jdXN0b21fX2J1dHRvbjphY3RpdmUge1xuICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmdyaWRfX2N1c3RvbV9fYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5ncmlkX19jdXN0b21fX2J1dHRvbl9fcmFuZ2Uge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlYmQ0OGE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDQuNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmdyaWRfX2N1c3RvbV9fYnV0dG9uX19yYW5nZSB7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAuZ3JpZF9fY3VzdG9tX19idXR0b25fX3JhbmdlIHtcbiAgICB3aWR0aDogODNweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5ncmlkX19jdXN0b21fX2J1dHRvbl9fcmFuZ2Uge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxufVxuXG4uZ3JpZFRvZ2dsZUNvbG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0LCAxMDUsIDI4KTtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9fYWxsQnV0dG9uX19lcmFzZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDklO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNDclO1xuICB9XG59XG5cbi5tYWluX19ncmlkIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNlYmQ0OGE7XG4gIGJvcmRlcjogMy41cHggc29saWQgI2ViZDQ4YTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggLTFweCAxN3B4ICNlYmQ0OGE7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAubWFpbl9fZ3JpZCB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5tYWluX19ncmlkIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLm1haW5fX2dyaWQge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59XG4ubWFpbl9fZ3JpZF9fcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcbn1cblxuLm1haW5fX2J1dHRvbl9fcmdiQ29sb3Ige1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJfX2J1dHRvbl9fc2l6ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGYxZGI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJfX2J1dHRvbl9fc2l6ZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAubWFpbl9fYnV0dG9uX19jb2xvclBpY2tlcl9fYnV0dG9uX19zaXplIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5tYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25fX3NpemUge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxufVxuXG4uZGVmYXVsdEhvdmVyQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGYxZGI7XG4gIGNvbG9yOiAjMTUyMjI0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWM3YzU0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XG4gIGNvbG9yOiAjZjhmMWRiO1xuICBvcGFjaXR5OiA3MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzAwZmZkNTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAxMXB4O1xuICB3aWR0aDogOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkNDhhO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbC9fYm9pbGVyUGxhdGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvZ2FtZV9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3V0aWwvYnJlYWtwb2ludC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL2dhbWVfX2dyaWQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9nYW1lX19tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7O0VBR0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EscUdBQUE7QUNDRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBQ3BCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUR1QkY7QUN0QkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRHdCSjtBQ3ZCSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBRHlCTjtBRWpDRTtFRERBO0lBWUksV0FBQTtJQUNBLFlBQUE7RUQwQko7QUFDRjtBRXZDRTtFRERBO0lBZ0JJLFdBQUE7SUFDQSxZQUFBO0VENEJKO0FBQ0Y7QUU3Q0U7RUREQTtJQW9CSSxXQUFBO0lBQ0EsWUFBQTtFRDhCSjtBQUNGO0FDNUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRDhCSjtBQzdCSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUQrQk47QUVsRUU7RUR1QkE7SUFlSSxlQUFBO0VEZ0NKO0FBQ0Y7QUV2RUU7RUR1QkE7SUFrQkksZUFBQTtFRGtDSjtBQUNGO0FFNUVFO0VEdUJBO0lBcUJJLGVBQUE7RURvQ0o7QUFDRjs7QUd0RkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSHlGRjtBR3hGRTtFQUNFLG1CQUFBO0FIMEZKO0FHeEZNO0VBQ0UsNEJBQUE7QUgwRlI7QUU3RkU7RUNDRTtJQUtJLDRCQUFBO0VIMkZOO0FBQ0Y7O0FHdEZBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBSHlGRjtBRTdHRTtFQ1lGO0lBV0ksV0FBQTtJQUNBLFlBQUE7RUgwRkY7QUFDRjtBRW5IRTtFQ1lGO0lBZUksV0FBQTtJQUNBLFlBQUE7RUg0RkY7QUFDRjtBRXpIRTtFQ1lGO0lBbUJJLFdBQUE7SUFDQSxZQUFBO0VIOEZGO0FBQ0Y7O0FHNUZBO0VBQ0Usa0NBQUE7QUgrRkY7O0FJeElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUowSUY7QUl2SUk7RUFDRSxnQkFBQTtBSnlJTjtBRS9JRTtFRUxGO0lBZ0JJLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxrQkFBQTtFSndJRjtBQUNGO0FFdEpFO0VFTEY7SUFxQkksb0JBQUE7SUFDQSxnQ0FBQTtJQUNBLGtCQUFBO0VKMElGO0FBQ0Y7QUU3SkU7RUVMRjtJQTBCSSxvQkFBQTtJQUNBLGdDQUFBO0lBQ0Esa0JBQUE7RUo0SUY7QUFDRjs7QUl6SUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUo0SUY7QUVqTEU7RUUyQkY7SUFhSSxZQUFBO0lBQ0EsYUFBQTtFSjZJRjtBQUNGO0FFdkxFO0VFMkJGO0lBaUJJLFlBQUE7SUFDQSxhQUFBO0VKK0lGO0FBQ0Y7QUU3TEU7RUUyQkY7SUFxQkksWUFBQTtJQUNBLGFBQUE7RUppSkY7QUFDRjtBSWhKRTtFQUNFLHlCQUFBO0FKa0pKOztBSTdJRTtFQUNFLGdCQUFBO0FKZ0pKO0FJOUlFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUpnSko7QUVsTkU7RUU0REE7SUFRSSxXQUFBO0lBQ0EsWUFBQTtFSmtKSjtBQUNGO0FFeE5FO0VFNERBO0lBWUksV0FBQTtJQUNBLFlBQUE7RUpvSko7QUFDRjtBRTlORTtFRTREQTtJQWdCSSxXQUFBO0lBQ0EsWUFBQTtFSnNKSjtBQUNGOztBSWxKQTtFQUNFLHlCQUFBO0FKcUpGOztBQXpPQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FBNE9GO0FBMU9FO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE0T0o7QUExT0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQTRPSjtBRWxRRTtFRkRGO0lBMkJJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUE0T0Y7QUFDRjtBRXpRRTtFRkRGO0lBZ0NJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUE4T0Y7QUFDRjtBRWhSRTtFRkRGO0lBcUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQWdQRjtBQUNGOztBQTdPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFnUEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmUyY2Y7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcclxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgY29sb3I6ICMzNTRmNTI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogNjVweDtcXHJcXG59XFxyXFxuXCIsXCJAZm9yd2FyZCBcXFwiZ2xvYmFsXFxcIjtcXHJcXG5AZm9yd2FyZCBcXFwiY29tcG9uZW50c1xcXCI7XFxyXFxuQGZvcndhcmQgXFxcInV0aWxcXFwiO1xcclxcblxcclxcbkB1c2UgXFxcIi4vdXRpbC9cXFwiIGFzIHV0O1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjFkYjtcXHJcXG4gIGNvbG9yOiAjMTUyMjI0O1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMWM3YzU0O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICAgIGNvbG9yOiAjZjhmMWRiO1xcclxcbiAgICBvcGFjaXR5OiA3MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gICY6YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMwMGZmZDU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgd2lkdGg6IDE0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGhlaWdodDogMTFweDtcXHJcXG4gIHdpZHRoOiA5cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJkNDhhO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1dDtcXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgJl9faWNvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxcHggMTdweCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNnMgYWxsO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDEwcHggMXB4IDE3cHggIzAwMDAwMDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJl9fdHdvIHtcXHJcXG4gICAgICBjb2xvcjogIzM1NGY1MjtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgbGVmdDogMzglO1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIkYnJlYWtwb2ludHM6IChcXHJcXG4gIFxcXCJtZWRpdW1cXFwiOiA0My43NWVtLFxcclxcbiAgXFxcImxhcmdlXFxcIjogNTYuMjVlbSxcXHJcXG4gIFxcXCJ4TGFyZ2VcXFwiOiA5MGVtLFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywkc2l6ZSkpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbC9cXFwiIGFzIHV0O1xcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAmX19jdXN0b20ge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbSAhaW1wb3J0YW50O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY3VzdG9tX19idXR0b25fX3JhbmdlIHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNlYmQ0OGE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQuNXB4O1xcclxcblxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgd2lkdGg6IDg1cHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgd2lkdGg6IDgzcHg7XFxyXFxuICAgIGhlaWdodDogMTJweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ncmlkVG9nZ2xlQ29sb3Ige1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0LCAxMDUsIDI4KTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsL1xcXCIgYXMgdXQ7XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICAmX19hbGxCdXR0b24ge1xcclxcbiAgICAmX19lcmFzZSB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0OSU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzE1MjIyNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNDglO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0NyU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluX19ncmlkIHtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBmb250LXNpemU6IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICBib3JkZXItdG9wOiAwcHggc29saWQgI2ViZDQ4YTtcXHJcXG4gIGJvcmRlcjogMy41cHggc29saWQgI2ViZDQ4YTtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAtMXB4IDE3cHggI2ViZDQ4YTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICB9XFxyXFxuICAmX19yb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWFpbl9fYnV0dG9uIHtcXHJcXG4gICZfX3JnYkNvbG9yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIH1cXHJcXG4gICZfX2NvbG9yUGlja2VyX19idXR0b25fX3NpemUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWRiO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdEhvdmVyQ29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiQ3JlYXRlR3JpZCIsIkhvdmVyRWZmZWN0IiwiQ2xlYXJDb2xvciIsImNsZWFyQ29sb3JEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckNvbG9yRm5jIiwiZ3JpZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGVhckdyaWQiLCJyZW1vdmUiLCJjbGVhckNvbG9yIiwiY2xlYXJCdG4iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiQ29sb3JQaWNrZXIiLCJjb2xvckRpdiIsImNvbG9yUGlja2VyRm5jIiwidGVtcENvbG9yUGlja2VyQnRuIiwiZWFjaEdyaWQiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWx1ZSIsImNvbG9yUGlja2VyIiwiY29sb3JQaWNrZXJCdXR0b24iLCJjb2xvclBpY2tlcklucHV0Iiwic2V0QXR0cmlidXRlIiwiY29sdW1uU2l6ZSIsInJvd1NpemUiLCJjb250ZW50IiwiY3JlYXRlUm93cyIsImkiLCJzaW5nbGVSb3ciLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImNyZWF0ZUNvbHVtbnMiLCJqIiwiZ3JpZFJhbmdlU2VsZWN0b3IiLCJDdXN0b21HcmlkIiwiY3VzdG9tR3JpZERpdiIsImN1c3RvbUdyaWRSZXNldCIsInJlbW92ZUdyaWQiLCJjb25zb2xlIiwibG9nIiwiY3VzdG9tR3JpZFVwZGF0ZSIsIm5ld1Njb3JlIiwiY3VzdG9tR3JpZCIsInJlc2V0QnRuIiwicmFuZ2UiLCJFcmFzZUNvbG9yIiwiZXJhc2VDb2xvckRpdiIsImVyYXNlQ29sb3JGbmMiLCJlcmFzZUNvbG9yIiwiZXJhc2VyQnRuIiwiaG92ZXJFZmZlY3QiLCJSR0JDb2xvciIsInJnYkNvbG9yRGl2IiwicmFuZG9tQ29sb3IiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJyYW5kb21SR0JGbmMiLCJncmlkcyIsInJhbmRvbVJHQiIsInJnYkJ1dHRvbiIsIlRvZ2dsZUdyaWQiLCJncmlkVG9nZ2xlRGl2IiwiZ3JpZFRvZ2dsZUZuYyIsInRvZ2dsZSIsImdyaWRUb2dnbGUiLCJncmlkVG9nZ2xlQnV0dG9uIiwicnVuRXRjaEFTa2V0Y2giXSwic291cmNlUm9vdCI6IiJ9