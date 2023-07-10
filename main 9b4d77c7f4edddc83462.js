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
}`, "",{"version":3,"sources":["webpack://./src/sass/global/_boilerPlates.scss","webpack://./src/sass/style.scss","webpack://./src/sass/components/game__header.scss","webpack://./src/sass/util/breakpoint.scss","webpack://./src/sass/components/game__grid.scss","webpack://./src/sass/components/game__main.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  background-color: #d6e2cf;\r\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\r\n    \"Lucida Sans\", Arial, sans-serif;\r\n}\r\n\r\nh1 {\r\n  color: #354f52;\r\n  text-align: center;\r\n  font-size: 4rem;\r\n  margin-left: 65px;\r\n}\r\n","@forward \"global\";\r\n@forward \"components\";\r\n@forward \"util\";\r\n\r\n@use \"./util/\" as ut;\r\n\r\nbutton {\r\n  height: 150px;\r\n  width: 150px;\r\n  background-color: #f8f1db;\r\n  color: #152224;\r\n  font-size: medium;\r\n  font-style: italic;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  border: none;\r\n  border: 1px solid #1c7c54;\r\n  transition: background-color 0.25s;\r\n  font-size: 1.3rem;\r\n\r\n  &:hover {\r\n    background-color: #152224;\r\n    color: #f8f1db;\r\n    opacity: 70%;\r\n    cursor: pointer;\r\n  }\r\n  &:active {\r\n    box-shadow: 1px 1px 10px #00ffd5;\r\n    font-size: larger;\r\n    opacity: 1;\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 140px;\r\n    height: 140px;\r\n    font-size: 1.2rem;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 130px;\r\n    height: 130px;\r\n    font-size: 1.2rem;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 65px;\r\n    height: 65px;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n  appearance: none;\r\n  height: 11px;\r\n  width: 9px;\r\n  border: 1px solid #ebd48a;\r\n  border-radius: 30%;\r\n  background: rgb(255, 255, 255);\r\n}\r\n","@use \"../util/\" as ut;\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  margin-bottom: 30px;\r\n  &__icon {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-shadow: 10px 1px 17px #000000;\r\n    border-radius: 50%;\r\n    transition: 0.6s all;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n      border-radius: 50%;\r\n      box-shadow: 10px 1px 17px #000000;\r\n    }\r\n    @include ut.breakpoint(xLarge) {\r\n      width: 80px;\r\n      height: 80px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      width: 60px;\r\n      height: 60px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      width: 40px;\r\n      height: 40px;\r\n    }\r\n  }\r\n  &__title {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 5rem;\r\n    position: relative;\r\n    &__two {\r\n      color: #354f52;\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 38%;\r\n      // transform: scale(1, -1);\r\n    }\r\n    @include ut.breakpoint(xLarge) {\r\n      font-size: 4rem;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      font-size: 3rem;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      font-size: 2rem;\r\n    }\r\n  }\r\n}\r\n","$breakpoints: (\r\n  \"medium\": 43.75em,\r\n  \"large\": 56.25em,\r\n  \"xLarge\": 90em,\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n  @media (max-width: map-get($breakpoints,$size)) {\r\n    @content;\r\n  }\r\n}\r\n","@use \"../util/\" as ut;\r\n\r\n.grid {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-right: 20px;\r\n  &__custom {\r\n    padding-right: 20px;\r\n    &__button {\r\n      &:active {\r\n        font-size: medium !important;\r\n      }\r\n      @include ut.breakpoint(medium) {\r\n        font-size: 0.9rem !important;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.grid__custom__button__range {\r\n  appearance: none;\r\n  width: 90px;\r\n  height: 12px;\r\n  cursor: pointer;\r\n  border: 3px solid #ebd48a;\r\n  background-color: #152224;\r\n  border-radius: 10px;\r\n  margin-top: 4.5px;\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 85px;\r\n    height: 12px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 83px;\r\n    height: 12px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 30px;\r\n    height: 10px;\r\n  }\r\n}\r\n.gridToggleColor {\r\n  border: 1px solid rgb(24, 105, 28);\r\n}\r\n","@use \"../util/\" as ut;\r\n\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  padding-bottom: 50px;\r\n  border-bottom: 5px solid #152224;\r\n  border-radius: 50%;\r\n\r\n  &__allButton {\r\n    &__erase {\r\n      margin-top: 20px;\r\n    }\r\n  }\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    padding-bottom: 40px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 49%;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    padding-bottom: 30px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 48%;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    padding-bottom: 20px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 47%;\r\n  }\r\n}\r\n\r\n.main__grid {\r\n  width: 500px;\r\n  height: 500px;\r\n  font-size: 0px;\r\n  background-color: #152224;\r\n  border-top: 0px solid #ebd48a;\r\n  border: 3.5px solid #ebd48a;\r\n  margin: 10px;\r\n  box-shadow: 1px -1px 17px #ebd48a;\r\n  margin-bottom: 50px;\r\n  display: grid;\r\n\r\n  @include ut.breakpoint(xLarge) {\r\n    width: 400px;\r\n    height: 400px;\r\n  }\r\n  @include ut.breakpoint(large) {\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n  @include ut.breakpoint(medium) {\r\n    width: 250px;\r\n    height: 180px;\r\n  }\r\n  &__row {\r\n    background-color: #152224;\r\n  }\r\n}\r\n\r\n.main__button {\r\n  &__rgbColor {\r\n    margin-top: 20px;\r\n  }\r\n  &__colorPicker__button__size {\r\n    background-color: #f8f1db;\r\n    border: none;\r\n    padding: 0;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n    @include ut.breakpoint(xLarge) {\r\n      width: 60px;\r\n      height: 60px;\r\n    }\r\n    @include ut.breakpoint(large) {\r\n      width: 50px;\r\n      height: 50px;\r\n    }\r\n    @include ut.breakpoint(medium) {\r\n      width: 35px;\r\n      height: 35px;\r\n    }\r\n  }\r\n}\r\n\r\n.defaultHoverColor {\r\n  background-color: #f0f8ff;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMlVBQTJVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxnQ0FBZ0MsNkJBQTZCLHNCQUFzQixLQUFLLHNDQUFzQywwQkFBMEIsS0FBSyxjQUFjLGdDQUFnQywySEFBMkgsS0FBSyxZQUFZLHFCQUFxQix5QkFBeUIsc0JBQXNCLHdCQUF3QixLQUFLLDJCQUEyQiw0QkFBNEIsc0JBQXNCLCtCQUErQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixnQ0FBZ0MscUJBQXFCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5QixtQkFBbUIsZ0NBQWdDLHlDQUF5Qyx3QkFBd0IsbUJBQW1CLGtDQUFrQyx1QkFBdUIscUJBQXFCLHdCQUF3QixPQUFPLGdCQUFnQix5Q0FBeUMsMEJBQTBCLG1CQUFtQixPQUFPLDBDQUEwQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixPQUFPLHFDQUFxQyxxQkFBcUIsc0JBQXNCLDBCQUEwQixPQUFPLHNDQUFzQyxvQkFBb0IscUJBQXFCLHdCQUF3QixPQUFPLEtBQUsscURBQXFELHVCQUF1QixtQkFBbUIsaUJBQWlCLGdDQUFnQyx5QkFBeUIscUNBQXFDLEtBQUssK0JBQStCLGFBQWEsb0JBQW9CLDBCQUEwQixvQ0FBb0MsMEJBQTBCLGVBQWUscUJBQXFCLHNCQUFzQiwwQ0FBMEMsMkJBQTJCLDZCQUE2QixpQkFBaUIsZ0NBQWdDLDZCQUE2Qiw0Q0FBNEMsU0FBUyx3Q0FBd0Msc0JBQXNCLHVCQUF1QixTQUFTLHVDQUF1QyxzQkFBc0IsdUJBQXVCLFNBQVMsd0NBQXdDLHNCQUFzQix1QkFBdUIsU0FBUyxPQUFPLGdCQUFnQixzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLDJCQUEyQixnQkFBZ0IseUJBQXlCLDZCQUE2QixtQkFBbUIsb0JBQW9CLHFDQUFxQyxTQUFTLHdDQUF3QywwQkFBMEIsU0FBUyx1Q0FBdUMsMEJBQTBCLFNBQVMsd0NBQXdDLDBCQUEwQixTQUFTLE9BQU8sS0FBSyxzR0FBc0csa0NBQWtDLHVEQUF1RCxpQkFBaUIsT0FBTyxLQUFLLCtCQUErQixlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGlCQUFpQiw0QkFBNEIsbUJBQW1CLG9CQUFvQix5Q0FBeUMsV0FBVywwQ0FBMEMseUNBQXlDLFdBQVcsU0FBUyxPQUFPLEtBQUssc0NBQXNDLHVCQUF1QixrQkFBa0IsbUJBQW1CLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLDBCQUEwQix3QkFBd0IsMENBQTBDLG9CQUFvQixxQkFBcUIsT0FBTyxxQ0FBcUMsb0JBQW9CLHFCQUFxQixPQUFPLHNDQUFzQyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxzQkFBc0IseUNBQXlDLEtBQUssK0JBQStCLGVBQWUsb0JBQW9CLDhCQUE4QiwwQkFBMEIsK0JBQStCLHVDQUF1Qyx5QkFBeUIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsU0FBUyxPQUFPLDBDQUEwQyw2QkFBNkIseUNBQXlDLDJCQUEyQixPQUFPLHFDQUFxQyw2QkFBNkIseUNBQXlDLDJCQUEyQixPQUFPLHNDQUFzQyw2QkFBNkIseUNBQXlDLDJCQUEyQixPQUFPLEtBQUsscUJBQXFCLG1CQUFtQixvQkFBb0IscUJBQXFCLGdDQUFnQyxvQ0FBb0Msa0NBQWtDLG1CQUFtQix3Q0FBd0MsMEJBQTBCLG9CQUFvQiwwQ0FBMEMscUJBQXFCLHNCQUFzQixPQUFPLHFDQUFxQyxxQkFBcUIsc0JBQXNCLE9BQU8sc0NBQXNDLHFCQUFxQixzQkFBc0IsT0FBTyxjQUFjLGtDQUFrQyxPQUFPLEtBQUssdUJBQXVCLG1CQUFtQix5QkFBeUIsT0FBTyxvQ0FBb0Msa0NBQWtDLHFCQUFxQixtQkFBbUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0NBQXdDLHNCQUFzQix1QkFBdUIsU0FBUyx1Q0FBdUMsc0JBQXNCLHVCQUF1QixTQUFTLHdDQUF3QyxzQkFBc0IsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLDRCQUE0QixnQ0FBZ0MsS0FBSyx1QkFBdUI7QUFDdmlSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDN1MxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy9DbGVhckNvbG9yLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy9Db2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tR3JpZC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvRXJhc2VDb2xvci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvSG92ZXJFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL1JHQkNvbG9yLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy9Ub2dnbGVHcmlkLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG5cclxuaW1wb3J0IENyZWF0ZUdyaWQgZnJvbSBcIi4vQ3JlYXRlR3JpZFwiO1xyXG5pbXBvcnQgSG92ZXJFZmZlY3QgZnJvbSBcIi4vSG92ZXJFZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsZWFyQ29sb3IoKSB7XHJcbiAgY29uc3QgY2xlYXJDb2xvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fYWxsQnV0dG9uX19jbGVhclwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJDb2xvckZuYygpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuICAgIC8vIGNvbnN0IGJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJyXCIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2xlYXJHcmlkIG9mIGdyaWQpIHtcclxuICAgICAgY2xlYXJHcmlkLnJlbW92ZSgpO1xyXG4gICAgICAvLyBmb3IgKGNvbnN0IHJlbW92ZUJyIG9mIGJyKSB7XHJcbiAgICAgIC8vICAgcmVtb3ZlQnIucmVtb3ZlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIENyZWF0ZUdyaWQoKTtcclxuICAgIEhvdmVyRWZmZWN0KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckNvbG9yKCkge1xyXG4gICAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xlYXJCdG4udGV4dENvbnRlbnQgPSBcIkNsZWFyXCI7XHJcbiAgICBjbGVhckJ0bi5jbGFzc0xpc3QuYWRkKFwibWFpbl9fYWxsQnV0dG9uX19jbGVhcl9fYnV0dG9uXCIpO1xyXG4gICAgY2xlYXJDb2xvckRpdi5hcHBlbmQoY2xlYXJCdG4pO1xyXG5cclxuICAgIGNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckNvbG9yRm5jKTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ29sb3IoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvclBpY2tlcigpIHtcclxuICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fYnV0dG9uX19jb2xvclBpY2tlclwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY29sb3JQaWNrZXJGbmMoKSB7XHJcbiAgICBjb25zdCB0ZW1wQ29sb3JQaWNrZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5tYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25fX3NpemVcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGVhY2hHcmlkIG9mIGdyaWQpIHtcclxuICAgICAgZWFjaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0ZW1wQ29sb3JQaWNrZXJCdG4udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29sb3JQaWNrZXIoKSB7XHJcbiAgICBjb25zdCBjb2xvclBpY2tlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb2xvclBpY2tlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiLm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJfX2J1dHRvblwiKTtcclxuICAgIGNvbG9yRGl2LmFwcGVuZChjb2xvclBpY2tlckJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgY29sb3JQaWNrZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbG9yUGlja2VySW5wdXQuY2xhc3NMaXN0LmFkZChcIm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJfX2J1dHRvbl9fc2l6ZVwiKTtcclxuICAgIGNvbG9yUGlja2VySW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNvbG9yXCIpOyAvLyB0byBkaXNwbGF5IGNvbG9yIHByZXZpZXdcclxuICAgIGNvbG9yUGlja2VySW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIjZjBmOGZmXCIpOyAvLyB0byBjaGFuZ2UgdGhlIHNlbGVjdGVkIGNvbG9yXHJcbiAgICBjb2xvclBpY2tlckJ1dHRvbi5hcHBlbmQoY29sb3JQaWNrZXJJbnB1dCk7XHJcblxyXG4gICAgY29sb3JQaWNrZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbG9yUGlja2VyRm5jKTtcclxuICB9XHJcbiAgY29sb3JQaWNrZXIoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgY29sdW1uU2l6ZSwgcm93U2l6ZSB9IGZyb20gXCIuL0N1c3RvbUdyaWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUdyaWQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fZ3JpZFwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIHRoZSBmaXJzdCByb3cgW3Jvd1NpemVdXHJcbiAgZnVuY3Rpb24gY3JlYXRlUm93cygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93U2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNpbmdsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2x1bW5TaXplfSwgMWZyKWA7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtyb3dTaXplfSwgMWZyKWA7XHJcbiAgICAgIHNpbmdsZVJvdy5jbGFzc0xpc3QuYWRkKFwibWFpbl9fZ3JpZF9fcm93XCIpO1xyXG4gICAgICBjb250ZW50LmFwcGVuZChzaW5nbGVSb3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY3JlYXRlIGEgY3VzdG9tIGFtb3VudCBvZiBjb2x1bW4gW3Jvd1NpemVdIHdpdGggcm93IFtyb3dTaXplXVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbHVtbnMoKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtblNpemU7IGorKykge1xyXG4gICAgICBjcmVhdGVSb3dzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZUNvbHVtbnMoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG5cclxuaW1wb3J0IEhvdmVyRWZmZWN0IGZyb20gXCIuL0hvdmVyRWZmZWN0XCI7XHJcbmltcG9ydCBDcmVhdGVHcmlkIGZyb20gXCIuL0NyZWF0ZUdyaWRcIjtcclxuXHJcbmNvbnN0IGdyaWRSYW5nZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5ncmlkX19jdXN0b21fX2J1dHRvbl9fcmFuZ2VcIlxyXG4pO1xyXG5sZXQgcm93U2l6ZSA9IGdyaWRSYW5nZVNlbGVjdG9yLnZhbHVlO1xyXG5sZXQgY29sdW1uU2l6ZSA9IGdyaWRSYW5nZVNlbGVjdG9yLnZhbHVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tR3JpZCgpIHtcclxuICBjb25zdCBjdXN0b21HcmlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jdXN0b21cIik7XHJcblxyXG4gIGZ1bmN0aW9uIGN1c3RvbUdyaWRSZXNldCgpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuICAgIC8vIGNvbnN0IGJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJyXCIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcmVtb3ZlR3JpZCBvZiBncmlkKSB7XHJcbiAgICAgIHJlbW92ZUdyaWQucmVtb3ZlKCk7XHJcbiAgICAgIC8vIGZvciAoY29uc3QgcmVtb3ZlQnIgb2YgYnIpIHtcclxuICAgICAgLy8gcmVtb3ZlQnIucmVtb3ZlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICByb3dTaXplID0gMDtcclxuICAgIGNvbHVtblNpemUgPSAwO1xyXG4gICAgcm93U2l6ZSA9IGdyaWRSYW5nZVNlbGVjdG9yLnZhbHVlO1xyXG4gICAgY29sdW1uU2l6ZSA9IGdyaWRSYW5nZVNlbGVjdG9yLnZhbHVlO1xyXG4gICAgQ3JlYXRlR3JpZCgpO1xyXG4gICAgSG92ZXJFZmZlY3QoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyB0aGUgUm93IFNpemU6ICR7cm93U2l6ZX0gYCk7XHJcbiAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyB0aGUgY29sdW1uIFNpemU6ICR7Y29sdW1uU2l6ZX0gYCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjdXN0b21HcmlkVXBkYXRlKCkge1xyXG4gICAgY29uc3QgbmV3U2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2N1c3RvbV9fYnV0dG9uXCIpO1xyXG4gICAgbmV3U2NvcmUudGV4dENvbnRlbnQgPSBgJHtyb3dTaXplfSB4ICR7Y29sdW1uU2l6ZX1gO1xyXG4gICAgbmV3U2NvcmUuYXBwZW5kKGdyaWRSYW5nZVNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGN1c3RvbUdyaWQoKSB7XHJcbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICByZXNldEJ0bi50ZXh0Q29udGVudCA9IGAke3Jvd1NpemV9IHggJHtjb2x1bW5TaXplfWA7XHJcbiAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiZ3JpZF9fY3VzdG9tX19idXR0b25cIik7XHJcbiAgICBjdXN0b21HcmlkRGl2LmFwcGVuZChyZXNldEJ0bik7XHJcbiAgICByZXNldEJ0bi5hcHBlbmQoZ3JpZFJhbmdlU2VsZWN0b3IpO1xyXG5cclxuICAgIGdyaWRSYW5nZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjdXN0b21HcmlkUmVzZXQoKTtcclxuICAgICAgY3VzdG9tR3JpZFVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjdXN0b21HcmlkKCk7IC8vIG5ldyBjdXN0b20gZ3JpZCB2YWx1ZVxyXG4gIENyZWF0ZUdyaWQoKTsgLy8gY3JlYXRlIHRoZSBncmlkIGZyb20gdGhlIGFib3ZlIHZhbHVlXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdyaWRSYW5nZVNlbGVjdG9yIGFzIHJhbmdlLCByb3dTaXplLCBjb2x1bW5TaXplIH07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcmFzZUNvbG9yKCkge1xyXG4gIGNvbnN0IGVyYXNlQ29sb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2FsbEJ1dHRvbl9fZXJhc2VcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGVyYXNlQ29sb3JGbmMoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcblxyXG4gICAgZm9yIChjb25zdCBlYWNoR3JpZCBvZiBncmlkKSB7XHJcbiAgICAgIGVhY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMTUyMjI0XCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXJhc2VDb2xvcigpIHtcclxuICAgIGNvbnN0IGVyYXNlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBlcmFzZXJCdG4udGV4dENvbnRlbnQgPSBcIkVyYXNlclwiO1xyXG4gICAgZXJhc2VyQnRuLmNsYXNzTGlzdC5hZGQoXCJtYWluX19hbGxCdXR0b25fX2VyYXNlX19idXR0b25cIik7XHJcbiAgICBlcmFzZUNvbG9yRGl2LmFwcGVuZChlcmFzZXJCdG4pO1xyXG4gICAgZXJhc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlcmFzZUNvbG9yRm5jKTtcclxuICB9XHJcbiAgZXJhc2VDb2xvcigpO1xyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb3ZlckVmZmVjdCgpIHtcclxuICBmdW5jdGlvbiBob3ZlckVmZmVjdCgpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuICAgIGZvciAoY29uc3QgZWFjaEdyaWQgb2YgZ3JpZCkge1xyXG4gICAgICBlYWNoR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0SG92ZXJDb2xvclwiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdGVkXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgaG92ZXJFZmZlY3QoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUkdCQ29sb3IoKSB7XHJcbiAgY29uc3QgcmdiQ29sb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5fX2J1dHRvbl9fcmdiQ29sb3JcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xyXG4gICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNik7XHJcbiAgICByZXR1cm4gcmFuZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJhbmRvbVJHQkZuYygpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2dyaWRfX3Jvd1wiKTtcclxuICAgIGZvciAoY29uc3QgZ3JpZHMgb2YgZ3JpZCkge1xyXG4gICAgICBncmlkcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAjJHtyYW5kb21Db2xvcigpfWA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmFuZG9tUkdCKCkge1xyXG4gICAgY29uc3QgcmdiQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHJnYkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUkdCIE1vZGVcIjtcclxuICAgIHJnYkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiLm1haW5fX2J1dHRvbl9fcmdiQ29sb3JfYnV0dG9uXCIpO1xyXG4gICAgcmdiQ29sb3JEaXYuYXBwZW5kKHJnYkJ1dHRvbik7XHJcblxyXG4gICAgcmdiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByYW5kb21SR0JGbmMpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tUkdCKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZUdyaWQoKSB7XHJcbiAgY29uc3QgZ3JpZFRvZ2dsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fdG9nZ2xlXCIpO1xyXG5cclxuICBmdW5jdGlvbiBncmlkVG9nZ2xlRm5jKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJydW5cIik7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19ncmlkX19yb3dcIik7XHJcbiAgICBmb3IgKGNvbnN0IGdyaWRzIG9mIGdyaWQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JpZHMpO1xyXG4gICAgICBncmlkcy5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JpZFRvZ2dsZUNvbG9yXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ3JpZFRvZ2dsZSgpIHtcclxuICAgIGNvbnN0IGdyaWRUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZ3JpZFRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ3JpZF9fdG9nZ2xlX19idXR0b25cIik7XHJcbiAgICBncmlkVG9nZ2xlRGl2LmFwcGVuZChncmlkVG9nZ2xlQnV0dG9uKTtcclxuICAgIGdyaWRUb2dnbGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlRvZ2dsZVwiO1xyXG4gICAgZ3JpZFRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ3JpZFRvZ2dsZUZuYyk7XHJcbiAgfVxyXG4gIGdyaWRUb2dnbGUoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xyXG5cclxuaW1wb3J0IFwiLi9zYXNzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0IEN1c3RvbUdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9DdXN0b21HcmlkXCI7XHJcbmltcG9ydCBDbGVhckNvbG9yIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xlYXJDb2xvclwiO1xyXG5pbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvclBpY2tlclwiO1xyXG5pbXBvcnQgSG92ZXJFZmZlY3QgZnJvbSBcIi4vY29tcG9uZW50cy9Ib3ZlckVmZmVjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlR3JpZCBmcm9tIFwiLi9jb21wb25lbnRzL1RvZ2dsZUdyaWRcIjtcclxuaW1wb3J0IEVyYXNlQ29sb3IgZnJvbSBcIi4vY29tcG9uZW50cy9FcmFzZUNvbG9yXCI7XHJcbmltcG9ydCBSR0JDb2xvciBmcm9tIFwiLi9jb21wb25lbnRzL1JHQkNvbG9yXCI7XHJcblxyXG5mdW5jdGlvbiBydW5FdGNoQVNrZXRjaCgpIHtcclxuICBDdXN0b21HcmlkKCk7XHJcbiAgQ2xlYXJDb2xvcigpO1xyXG4gIEhvdmVyRWZmZWN0KCk7XHJcbiAgVG9nZ2xlR3JpZCgpO1xyXG4gIEVyYXNlQ29sb3IoKTtcclxuICBSR0JDb2xvcigpO1xyXG4gIENvbG9yUGlja2VyKCk7XHJcbn1cclxuXHJcbnJ1bkV0Y2hBU2tldGNoKCk7XHJcblxyXG4vLyBmdW5jdGlvbiBjaGVja1VzZXJJbnB1dCgpIHtcclxuLy8gICAgIGlmIChyb3dTaXplICE9PSA3MCAmJiBjb2x1bW5TaXplICE9PSA3MCkge1xyXG4vLyAgICAgICAgIHJvd1NpemUgPSBwcm9tcHQoYCBFbnRlciB0aGUgR3JpZCBST1cgdmFsdWUgQmVsb3cgXCIxMDBcIiBgKTtcclxuLy8gICAgICAgICB3aGlsZSAocm93U2l6ZSA9PT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICByb3dTaXplID0gcHJvbXB0KFwiRW50ZXIgUm93IEdyaWQgQWdhaW4gKEJlbG93IDEwMClcIik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbHVtblNpemUgPSBwcm9tcHQoYCBFbnRlciB0aGUgR3JpZCBDT0xVTU4gdmFsdWUgQmVsb3cgXCIxMDBcIiBgKTtcclxuXHJcbi8vICAgICAgICAgd2hpbGUgKGNvbHVtblNpemUgPT09IFwiXCIpIHtcclxuLy8gICAgICAgICAgICAgY29sdW1uU2l6ZSA9IHByb21wdChcIkVudGVyIENvbHVtbiBHcmlkIEFnYWluIChCZWxvdyAxMDApXCIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjb2x1bW4oKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGVsc2Uge1xyXG4vLyAgICAgICAgIGNvbHVtbigpO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGdyaWQubW9kdWxlLmV4cG9ydCgpO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmUyY2Y7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgY29sb3I6ICMzNTRmNTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmhlYWRlcl9faWNvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxcHggMTdweCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IDAuNnMgYWxsO1xufVxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAxMHB4IDFweCAxN3B4ICMwMDAwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTBlbSkge1xuICAuaGVhZGVyX19pY29uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gIC5oZWFkZXJfX2ljb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmhlYWRlcl9faWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG4uaGVhZGVyX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfX3RpdGxlX190d28ge1xuICBjb2xvcjogIzM1NGY1MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMzglO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLmhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLmhlYWRlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmdyaWRfX2N1c3RvbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZ3JpZF9fY3VzdG9tX19idXR0b246YWN0aXZlIHtcbiAgZm9udC1zaXplOiBtZWRpdW0gIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5ncmlkX19jdXN0b21fX2J1dHRvbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZ3JpZF9fY3VzdG9tX19idXR0b25fX3JhbmdlIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZWJkNDhhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA0LjVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5ncmlkX19jdXN0b21fX2J1dHRvbl9fcmFuZ2Uge1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLmdyaWRfX2N1c3RvbV9fYnV0dG9uX19yYW5nZSB7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAuZ3JpZF9fY3VzdG9tX19idXR0b25fX3JhbmdlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuLmdyaWRUb2dnbGVDb2xvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNCwgMTA1LCAyOCk7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzE1MjIyNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fX2FsbEJ1dHRvbl9fZXJhc2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ5JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ4JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgLm1haW4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQ3JTtcbiAgfVxufVxuXG4ubWFpbl9fZ3JpZCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZm9udC1zaXplOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZWJkNDhhO1xuICBib3JkZXI6IDMuNXB4IHNvbGlkICNlYmQ0OGE7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IC0xcHggMTdweCAjZWJkNDhhO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgLm1haW5fX2dyaWQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAubWFpbl9fZ3JpZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gIC5tYWluX19ncmlkIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuLm1haW5fX2dyaWRfX3JvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XG59XG5cbi5tYWluX19idXR0b25fX3JnYkNvbG9yIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25fX3NpemUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWRiO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7XG4gIC5tYWluX19idXR0b25fX2NvbG9yUGlja2VyX19idXR0b25fX3NpemUge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgLm1haW5fX2J1dHRvbl9fY29sb3JQaWNrZXJfX2J1dHRvbl9fc2l6ZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAubWFpbl9fYnV0dG9uX19jb2xvclBpY2tlcl9fYnV0dG9uX19zaXplIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cblxuLmRlZmF1bHRIb3ZlckNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWRiO1xuICBjb2xvcjogIzE1MjIyNDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFjN2M1NDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xuICBjb2xvcjogI2Y4ZjFkYjtcbiAgb3BhY2l0eTogNzAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMwMGZmZDU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZDQ4YTtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9nbG9iYWwvX2JvaWxlclBsYXRlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL2dhbWVfX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlsL2JyZWFrcG9pbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvY29tcG9uZW50cy9nYW1lX19ncmlkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBv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WUFBQTtFSm1KSjtBQUNGO0FFN05FO0VFNERBO0lBZ0JJLFdBQUE7SUFDQSxZQUFBO0VKcUpKO0FBQ0Y7O0FJakpBO0VBQ0UseUJBQUE7QUpvSkY7O0FBeE9BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUEyT0Y7QUF6T0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTJPSjtBQXpPRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBMk9KO0FFalFFO0VGREY7SUEyQkksWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtFQTJPRjtBQUNGO0FFeFFFO0VGREY7SUFnQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtFQTZPRjtBQUNGO0FFL1FFO0VGREY7SUFxQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBK09GO0FBQ0Y7O0FBNU9BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQStPRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZTJjZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxyXFxuICAgIFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBjb2xvcjogIzM1NGY1MjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xcclxcbn1cXHJcXG5cIixcIkBmb3J3YXJkIFxcXCJnbG9iYWxcXFwiO1xcclxcbkBmb3J3YXJkIFxcXCJjb21wb25lbnRzXFxcIjtcXHJcXG5AZm9yd2FyZCBcXFwidXRpbFxcXCI7XFxyXFxuXFxyXFxuQHVzZSBcXFwiLi91dGlsL1xcXCIgYXMgdXQ7XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWRiO1xcclxcbiAgY29sb3I6ICMxNTIyMjQ7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYzdjNTQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcXHJcXG4gICAgY29sb3I6ICNmOGYxZGI7XFxyXFxuICAgIG9wYWNpdHk6IDcwJTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgJjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzAwZmZkNTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMXB4O1xcclxcbiAgd2lkdGg6IDlweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmQ0OGE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbC9cXFwiIGFzIHV0O1xcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAmX19pY29uIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDFweCAxN3B4ICMwMDAwMDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC42cyBhbGw7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMTBweCAxcHggMTdweCAjMDAwMDAwO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQoeExhcmdlKSB7XFxyXFxuICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmX190d28ge1xcclxcbiAgICAgIGNvbG9yOiAjMzU0ZjUyO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICBsZWZ0OiAzOCU7XFxyXFxuICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludCh4TGFyZ2UpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRicmVha3BvaW50czogKFxcclxcbiAgXFxcIm1lZGl1bVxcXCI6IDQzLjc1ZW0sXFxyXFxuICBcXFwibGFyZ2VcXFwiOiA1Ni4yNWVtLFxcclxcbiAgXFxcInhMYXJnZVxcXCI6IDkwZW0sXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCRzaXplKSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsL1xcXCIgYXMgdXQ7XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICZfX2N1c3RvbSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW0gIWltcG9ydGFudDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jdXN0b21fX2J1dHRvbl9fcmFuZ2Uge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgI2ViZDQ4YTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNC41cHg7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICB3aWR0aDogODVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChsYXJnZSkge1xcclxcbiAgICB3aWR0aDogODNweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgdXQuYnJlYWtwb2ludChtZWRpdW0pIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmdyaWRUb2dnbGVDb2xvciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQsIDEwNSwgMjgpO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWwvXFxcIiBhcyB1dDtcXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzE1MjIyNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICZfX2FsbEJ1dHRvbiB7XFxyXFxuICAgICZfX2VyYXNlIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQ5JTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0OCU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KG1lZGl1bSkge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMxNTIyMjQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDQ3JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1haW5fX2dyaWQge1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcXHJcXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZWJkNDhhO1xcclxcbiAgYm9yZGVyOiAzLjVweCBzb2xpZCAjZWJkNDhhO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IC0xcHggMTdweCAjZWJkNDhhO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIH1cXHJcXG4gICZfX3JvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tYWluX19idXR0b24ge1xcclxcbiAgJl9fcmdiQ29sb3Ige1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgJl9fY29sb3JQaWNrZXJfX2J1dHRvbl9fc2l6ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGYxZGI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KHhMYXJnZSkge1xcclxcbiAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSB1dC5icmVha3BvaW50KGxhcmdlKSB7XFxyXFxuICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIHV0LmJyZWFrcG9pbnQobWVkaXVtKSB7XFxyXFxuICAgICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0SG92ZXJDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOGZmO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJDcmVhdGVHcmlkIiwiSG92ZXJFZmZlY3QiLCJDbGVhckNvbG9yIiwiY2xlYXJDb2xvckRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQ29sb3JGbmMiLCJncmlkIiwicXVlcnlTZWxlY3RvckFsbCIsImNsZWFyR3JpZCIsInJlbW92ZSIsImNsZWFyQ29sb3IiLCJjbGVhckJ0biIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJDb2xvclBpY2tlciIsImNvbG9yRGl2IiwiY29sb3JQaWNrZXJGbmMiLCJ0ZW1wQ29sb3JQaWNrZXJCdG4iLCJlYWNoR3JpZCIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInZhbHVlIiwiY29sb3JQaWNrZXIiLCJjb2xvclBpY2tlckJ1dHRvbiIsImNvbG9yUGlja2VySW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJjb2x1bW5TaXplIiwicm93U2l6ZSIsImNvbnRlbnQiLCJjcmVhdGVSb3dzIiwiaSIsInNpbmdsZVJvdyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkVGVtcGxhdGVSb3dzIiwiY3JlYXRlQ29sdW1ucyIsImoiLCJncmlkUmFuZ2VTZWxlY3RvciIsIkN1c3RvbUdyaWQiLCJjdXN0b21HcmlkRGl2IiwiY3VzdG9tR3JpZFJlc2V0IiwicmVtb3ZlR3JpZCIsImNvbnNvbGUiLCJsb2ciLCJjdXN0b21HcmlkVXBkYXRlIiwibmV3U2NvcmUiLCJjdXN0b21HcmlkIiwicmVzZXRCdG4iLCJyYW5nZSIsIkVyYXNlQ29sb3IiLCJlcmFzZUNvbG9yRGl2IiwiZXJhc2VDb2xvckZuYyIsImVyYXNlQ29sb3IiLCJlcmFzZXJCdG4iLCJob3ZlckVmZmVjdCIsIlJHQkNvbG9yIiwicmdiQ29sb3JEaXYiLCJyYW5kb21Db2xvciIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJhbmRvbVJHQkZuYyIsImdyaWRzIiwicmFuZG9tUkdCIiwicmdiQnV0dG9uIiwiVG9nZ2xlR3JpZCIsImdyaWRUb2dnbGVEaXYiLCJncmlkVG9nZ2xlRm5jIiwidG9nZ2xlIiwiZ3JpZFRvZ2dsZSIsImdyaWRUb2dnbGVCdXR0b24iLCJydW5FdGNoQVNrZXRjaCJdLCJzb3VyY2VSb290IjoiIn0=