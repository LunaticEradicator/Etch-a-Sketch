"use strict";
(self["webpackChunketch_a_sketch"] = self["webpackChunketch_a_sketch"] || []).push([["main"],{

/***/ "./src/components/ClearButton.js":
/*!***************************************!*\
  !*** ./src/components/ClearButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClearButton)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateGrid */ "./src/components/CreateGrid.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */



function ClearButton() {
  const clearDiv = document.querySelector(".button1");
  function createClear() {
    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");
    for (const clearGrid of grid) {
      clearGrid.remove();
      for (const removeBr of br) {
        removeBr.remove();
      }
    }
    (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.hoverEffect)();
    // ColorSelectButton();
  }

  function clearButtonFnc() {
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.classList.add("clearBtn");
    clearDiv.append(clearButton);
    clearButton.addEventListener("click", e => {
      createClear();
    });
  }
  clearButtonFnc();
}

/***/ }),

/***/ "./src/components/ColorButton.js":
/*!***************************************!*\
  !*** ./src/components/ColorButton.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColorSelectButton)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
function ColorSelectButton() {
  const colorDiv = document.querySelector(".button3");
  function createColor() {
    const colorPicker = document.querySelector(".colorPickerBtn");
    const grid = document.querySelectorAll(".classOfEachRow");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", e => {
        e.target.style.backgroundColor = colorPicker.value;
      });
    }
  }
  function colorButtonFnc() {
    const colorButton = document.createElement("button");
    colorButton.classList.add("colorBtn");
    colorDiv.append(colorButton);
    const colorPickerBtn = document.createElement("input");
    colorPickerBtn.classList.add("colorPickerBtn");
    colorPickerBtn.setAttribute("type", "color");
    colorPickerBtn.setAttribute("value", "#f0f8ff");
    colorButton.append(colorPickerBtn);
    colorButton.addEventListener("click", e => {
      createColor();
    });
  }
  colorButtonFnc();
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
/* eslint-disable import/no-cycle */

function CreateGrid() {
  const content = document.querySelector(".content");
  function row() {
    for (let i = 0; i < _CustomGrid__WEBPACK_IMPORTED_MODULE_0__.rowSize; i++) {
      const singleRow = document.createElement("div");
      content.style.gridTemplateColumns = `repeat(${_CustomGrid__WEBPACK_IMPORTED_MODULE_0__.columnSize}, 1fr)`;
      content.style.gridTemplateRows = `repeat(${_CustomGrid__WEBPACK_IMPORTED_MODULE_0__.rowSize}, 1fr)`;
      singleRow.classList.add("classOfEachRow");
      content.append(singleRow);
    }
  }
  function column() {
    for (let j = 0; j < _CustomGrid__WEBPACK_IMPORTED_MODULE_0__.columnSize; j++) {
      row();
    }
  }
  column();
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
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   rowSize: () => (/* binding */ rowSize)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _CreateGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateGrid */ "./src/components/CreateGrid.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */


const range = document.querySelector(".range");
let rowSize = range.value;
let columnSize = range.value;
function CustomGrid() {
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
    rowSize = range.value;
    columnSize = range.value;
    (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.hoverEffect)();
    console.log(`This is the Row Size: ${rowSize} `);
    console.log(`This is the column Size: ${columnSize} `);
  }
  function customGridUpdate() {
    const newScore = document.querySelector(".resetBtn");
    newScore.textContent = `Grid: ${rowSize} x ${columnSize}`;
    newScore.append(range);
  }
  function customGrid() {
    // const range = document.querySelector(".range");
    range.addEventListener("click", e => {
      customGridReset();
      customGridUpdate();
    });
  }
  function CustomGridButtonFnc() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = `Grid: ${rowSize} x ${columnSize}`;
    resetBtn.classList.add("resetBtn");
    customGridDiv.append(resetBtn);
    resetBtn.append(range);
    customGrid();
  }
  (0,_CreateGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  CustomGridButtonFnc();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hoverEffect: () => (/* binding */ hoverEffect)
/* harmony export */ });
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _components_CustomGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CustomGrid */ "./src/components/CustomGrid.js");
/* harmony import */ var _components_ClearButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ClearButton */ "./src/components/ClearButton.js");
/* harmony import */ var _components_ColorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ColorButton */ "./src/components/ColorButton.js");




const button2 = document.querySelector(".button2");
const button4 = document.querySelector(".button4");
const button6 = document.querySelector(".button6");
function hoverEffect() {
  const grid = document.querySelectorAll(".classOfEachRow");
  for (const eachGrid of grid) {
    eachGrid.addEventListener("mouseenter", e => {
      e.target.classList.add("clicked");
      console.log("Click");
    });
  }
}

// -------------------------------------------------Button Function-------------------------------------------------

function gridToggleBtn() {
  const gridToggleButton = document.createElement("button");
  gridToggleButton.classList.add("gridToggleBtn");
  button6.append(gridToggleButton);
  gridToggleButton.textContent = "Grid:Toggle";
  gridToggleButton.addEventListener("click", e => {
    console.log("Pressed");
    gridToggle();
  });
}

// function clear() {
//   const grid = document.querySelectorAll(".classOfEachRow");
//   const br = document.querySelectorAll("br");

//   for (const clearGrid of grid) {
//     clearGrid.remove();
//     for (const removeBr of br) {
//       removeBr.remove();
//     }
//   }
//   column();
//   hoverEffect();
//   color();
// }

// function clearBtn() {
//   const clearButton = document.createElement("button");
//   clearButton.textContent = "Clear";
//   clearButton.classList.add("clearBtn");
//   button1.append(clearButton);

//   clearButton.addEventListener("click", (e) => {
//     clear();
//   });
// }

function eraserBtn() {
  const eraserBtn = document.createElement("button");
  eraserBtn.textContent = "Eraser";
  eraserBtn.classList.add("eraserBtn");
  button2.append(eraserBtn);
  eraserBtn.addEventListener("click", e => {
    erase();
  });
}
function randomRgbBtn() {
  const rgbButton = document.createElement("button");
  rgbButton.textContent = "RGB Mode";
  rgbButton.classList.add("rgbButton");
  button4.append(rgbButton);
  rgbButton.addEventListener("click", e => {
    console.log("pressed");
    randomRgb();
  });
}

// column();
gridToggleBtn();
(0,_components_CustomGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
hoverEffect();
(0,_components_ClearButton__WEBPACK_IMPORTED_MODULE_2__["default"])();
eraserBtn();
(0,_components_ColorButton__WEBPACK_IMPORTED_MODULE_3__["default"])();
randomRgbBtn();

// -------------------------------------------------DOM Function -------------------------------------------------

function erase() {
  const grid = document.querySelectorAll(".classOfEachRow");
  for (const eachGrid of grid) {
    eachGrid.addEventListener("mouseenter", e => {
      e.target.style.backgroundColor = "#152224";
    });
  }
}
function randomRgb() {
  const grid = document.querySelectorAll(".classOfEachRow");
  for (const grids of grid) {
    grids.addEventListener("mouseenter", e => {
      e.target.style.backgroundColor = `#${randomColor()}`;
    });
  }
}
function randomColor() {
  const rand = Math.floor(Math.random() * 16777215).toString(16);
  return rand;
}
function gridToggle() {
  console.log("run");
  const grid = document.querySelectorAll(".classOfEachRow");
  for (const grids of grid) {
    console.log(grids);
    grids.classList.toggle("gridToggle");
  }
}


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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #d6e2cf;
  padding-bottom: 20px;
  border-bottom: 5px solid #152224;
  border-radius: 50%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}

.main {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
}

.outerStyle {
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-around;
  /* margin-bottom: 10px; */
}

.innerStyle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100px;
  height: 100px;
  box-shadow: 10px 1px 17px #000000;
  border-radius: 50%;
}

img:hover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 10px 1px 17px #000000;
}

.content {
  /*  to remove whitespace of child */
  width: 500px;
  height: 500px;
  font-size: 0px;
  background-color: #152224;
  /* border-radius: 20px; */
  border-top: 0px solid #ebd48a;
  border: 3.5px solid #ebd48a;
  margin: 10px;
  box-shadow: 1px -1px 17px #ebd48a;
  margin-bottom: 50px;
  display: grid;
}

h1 {
  color: #354f52;
  text-align: center;
  font-size: 4rem;
  margin-left: 65px;
}

.A {
  color: #354f52;
  transform: scale(1, -1);
  font-size: 5rem;
  margin-top: -70px;
  margin-left: 12px;
}

.classOfEachRow {
  /* border: 1px solid rgb(24, 105, 92); */
  background-color: #152224;
}

.clicked {
  background-color: #f0f8ff;
}

/* .button1 {
    display: flex;
    justify-content: center;
} */
.topStyle {
  display: flex;
  justify-content: center;
}

.button5 {
  padding-right: 20px;
}

button {
  /* background-color: rgb(210, 224, 223); */
  height: 120px;
  width: 120px;
  background-color: #f8f1db;
  color: #152224;
  font-size: medium;
  font-style: italic;
  text-align: center;
  border-radius: 50%;
  border: none;
  border: 1px solid #1c7c54;
  transition: background-color 0.25s;
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

.resetBtn:active {
  font-size: medium !important;
}

.innerButton {
  display: flex;
  flex-direction: column;
}

.button2,
.button4 {
  margin-top: 20px;
}

.colorPickerBtn {
  background-color: #f8f1db;
  border: none;
  padding: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.rgbButtonInput {
  border: none;
  padding: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.color {
  width: 34px;
  height: 33px;
  border-radius: 50%;
}

.nice {
  background-color: red;
}

/* 
.resetBtn {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
} */
.range {
  appearance: none;
  width: 90px;
  height: 12px;
  cursor: pointer;
  border: 3px solid #ebd48a;
  background-color: #152224;
  border-radius: 10px;
  margin-top: 4.5px;
}

input[type=range]::-webkit-slider-thumb {
  appearance: none;
  height: 11px;
  width: 9px;
  border: 1px solid #ebd48a;
  border-radius: 30%;
  background: rgb(255, 255, 255);
}

.gridToggle {
  border: 1px solid rgb(24, 105, 28);
}`, "",{"version":3,"sources":["webpack://./src/sass/style.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,oBAAA;EACA,gCAAA;EACA,kBAAA;EACA,qGAAA;AACJ;;AAEA;EACI,aAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,6BAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,iCAAA;EACA,kBAAA;AACJ;;AAEA;EACI,YAAA;EACA,aAAA;EACA,kBAAA;EACA,iCAAA;AACJ;;AAEA;EACI,mCAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,yBAAA;EACA,6BAAA;EACA,2BAAA;EACA,YAAA;EACA,iCAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,cAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;AACJ;;AAEA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;AACJ;;AAEA;EACI,wCAAA;EACA,yBAAA;AACJ;;AAEA;EACI,yBAAA;AACJ;;AAEA;;;GAAA;AAKA;EACI,aAAA;EACA,uBAAA;AAAJ;;AAGA;EACI,mBAAA;AAAJ;;AAGA;EACI,0CAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,kCAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,cAAA;EACA,YAAA;EACA,eAAA;AAAJ;;AAGA;EACI,gCAAA;EACA,iBAAA;EACA,UAAA;AAAJ;;AAGA;EACI,4BAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;AAAJ;;AAGA;;EAEI,gBAAA;AAAJ;;AAGA;EACI,yBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,qBAAA;AAAJ;;AAGA;;;;;;GAAA;AAQA;EACI,gBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;EACA,yBAAA;EACA,mBAAA;EACA,iBAAA;AADJ;;AAIA;EACI,gBAAA;EACA,YAAA;EACA,UAAA;EACA,yBAAA;EACA,kBAAA;EACA,8BAAA;AADJ;;AAIA;EACI,kCAAA;AADJ","sourcesContent":["body {\r\n    background-color: #d6e2cf;\r\n    padding-bottom: 20px;\r\n    border-bottom: 5px solid #152224;\r\n    border-radius: 50%;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n.main {\r\n    display: flex;\r\n    /* flex-direction: row; */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.outerStyle {\r\n    display: flex;\r\n    /* flex-direction: row; */\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    /* margin-bottom: 10px; */\r\n}\r\n\r\n.innerStyle {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-shadow: 10px 1px 17px #000000;\r\n    border-radius: 50%;\r\n}\r\n\r\nimg:hover {\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    box-shadow: 10px 1px 17px #000000;\r\n}\r\n\r\n.content {\r\n    /*  to remove whitespace of child */\r\n    width: 500px;\r\n    height: 500px;\r\n    font-size: 0px;\r\n    background-color: #152224;\r\n    /* border-radius: 20px; */\r\n    border-top: 0px solid #ebd48a;\r\n    border: 3.5px solid #ebd48a;\r\n    margin: 10px;\r\n    box-shadow: 1px -1px 17px #ebd48a;\r\n    margin-bottom: 50px;\r\n    display: grid;\r\n}\r\n\r\nh1 {\r\n    color: #354f52;\r\n    text-align: center;\r\n    font-size: 4rem;\r\n    margin-left: 65px;\r\n}\r\n\r\n.A {\r\n    color: #354f52;\r\n    transform: scale(1, -1);\r\n    font-size: 5rem;\r\n    margin-top: -70px;\r\n    margin-left: 12px;\r\n}\r\n\r\n.classOfEachRow {\r\n    /* border: 1px solid rgb(24, 105, 92); */\r\n    background-color: #152224;\r\n}\r\n\r\n.clicked {\r\n    background-color: #f0f8ff;\r\n}\r\n\r\n/* .button1 {\r\n    display: flex;\r\n    justify-content: center;\r\n} */\r\n\r\n.topStyle {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.button5 {\r\n    padding-right: 20px;\r\n}\r\n\r\nbutton {\r\n    /* background-color: rgb(210, 224, 223); */\r\n    height: 120px;\r\n    width: 120px;\r\n    background-color: #f8f1db;\r\n    color: #152224;\r\n    font-size: medium;\r\n    font-style: italic;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    border: none;\r\n    border: 1px solid #1c7c54;\r\n    transition: background-color .25s;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #152224;\r\n    color: #f8f1db;\r\n    opacity: 70%;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton:active {\r\n    box-shadow: 1px 1px 10px #00ffd5;\r\n    font-size: larger;\r\n    opacity: 1;\r\n}\r\n\r\n.resetBtn:active {\r\n    font-size: medium !important;\r\n}\r\n\r\n.innerButton {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.button2,\r\n.button4 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.colorPickerBtn {\r\n    background-color: #f8f1db;\r\n    border: none;\r\n    padding: 0;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.rgbButtonInput {\r\n    border: none;\r\n    padding: 0;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.color {\r\n    width: 34px;\r\n    height: 33px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.nice {\r\n    background-color: red;\r\n}\r\n\r\n/* \r\n.resetBtn {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n} */\r\n\r\n.range {\r\n    appearance: none;\r\n    width: 90px;\r\n    height: 12px;\r\n    cursor: pointer;\r\n    border: 3px solid #ebd48a;\r\n    background-color: #152224;\r\n    border-radius: 10px;\r\n    margin-top: 4.5px;\r\n}\r\n\r\ninput[type=\"range\"]::-webkit-slider-thumb {\r\n    appearance: none;\r\n    height: 11px;\r\n    width: 9px;\r\n    border: 1px solid #ebd48a;\r\n    border-radius: 30%;\r\n    background: rgb(255, 255, 255);\r\n}\r\n\r\n.gridToggle {\r\n    border: 1px solid rgb(24, 105, 28);\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFX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QzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9zcmMvY29tcG9uZW50cy9DbGVhckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL2NvbXBvbmVudHMvQ29sb3JCdXR0b24uanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9jb21wb25lbnRzL0N1c3RvbUdyaWQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vc3JjL3Nhc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/NGQzNyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V0Y2gtYS1za2V0Y2gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ldGNoLWEtc2tldGNoLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXRjaC1hLXNrZXRjaC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXHJcblxyXG5pbXBvcnQgeyBob3ZlckVmZmVjdCB9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQgQ3JlYXRlR3JpZCBmcm9tIFwiLi9DcmVhdGVHcmlkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGVhckJ1dHRvbigpIHtcclxuICBjb25zdCBjbGVhckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uMVwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2xlYXIoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbGFzc09mRWFjaFJvd1wiKTtcclxuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJyXCIpO1xyXG4gICAgZm9yIChjb25zdCBjbGVhckdyaWQgb2YgZ3JpZCkge1xyXG4gICAgICBjbGVhckdyaWQucmVtb3ZlKCk7XHJcbiAgICAgIGZvciAoY29uc3QgcmVtb3ZlQnIgb2YgYnIpIHtcclxuICAgICAgICByZW1vdmVCci5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUdyaWQoKTtcclxuICAgIGhvdmVyRWZmZWN0KCk7XHJcbiAgICAvLyBDb2xvclNlbGVjdEJ1dHRvbigpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbGVhckJ1dHRvbkZuYygpIHtcclxuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xyXG4gICAgY2xlYXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsZWFyQnRuXCIpO1xyXG4gICAgY2xlYXJEaXYuYXBwZW5kKGNsZWFyQnV0dG9uKTtcclxuXHJcbiAgICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY3JlYXRlQ2xlYXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJCdXR0b25GbmMoKTtcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvclNlbGVjdEJ1dHRvbigpIHtcclxuICBjb25zdCBjb2xvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uM1wiKTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ29sb3IoKSB7XHJcbiAgICBjb25zdCBjb2xvclBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29sb3JQaWNrZXJCdG5cIik7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbGFzc09mRWFjaFJvd1wiKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGVhY2hHcmlkIG9mIGdyaWQpIHtcclxuICAgICAgZWFjaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvclBpY2tlci52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb2xvckJ1dHRvbkZuYygpIHtcclxuICAgIGNvbnN0IGNvbG9yQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbG9yQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb2xvckJ0blwiKTtcclxuICAgIGNvbG9yRGl2LmFwcGVuZChjb2xvckJ1dHRvbik7XHJcblxyXG4gICAgY29uc3QgY29sb3JQaWNrZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb2xvclBpY2tlckJ0bi5jbGFzc0xpc3QuYWRkKFwiY29sb3JQaWNrZXJCdG5cIik7XHJcbiAgICBjb2xvclBpY2tlckJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY29sb3JcIik7XHJcbiAgICBjb2xvclBpY2tlckJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIiNmMGY4ZmZcIik7XHJcbiAgICBjb2xvckJ1dHRvbi5hcHBlbmQoY29sb3JQaWNrZXJCdG4pO1xyXG5cclxuICAgIGNvbG9yQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjcmVhdGVDb2xvcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbG9yQnV0dG9uRm5jKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbmltcG9ydCB7IGNvbHVtblNpemUsIHJvd1NpemUgfSBmcm9tIFwiLi9DdXN0b21HcmlkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVHcmlkKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHJvdygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93U2l6ZTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHNpbmdsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2x1bW5TaXplfSwgMWZyKWA7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtyb3dTaXplfSwgMWZyKWA7XHJcbiAgICAgIHNpbmdsZVJvdy5jbGFzc0xpc3QuYWRkKFwiY2xhc3NPZkVhY2hSb3dcIik7XHJcbiAgICAgIGNvbnRlbnQuYXBwZW5kKHNpbmdsZVJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb2x1bW4oKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtblNpemU7IGorKykge1xyXG4gICAgICByb3coKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29sdW1uKCk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cclxuaW1wb3J0IHsgaG92ZXJFZmZlY3QgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IENyZWF0ZUdyaWQgZnJvbSBcIi4vQ3JlYXRlR3JpZFwiO1xyXG5cclxuY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmdlXCIpO1xyXG5sZXQgcm93U2l6ZSA9IHJhbmdlLnZhbHVlO1xyXG5sZXQgY29sdW1uU2l6ZSA9IHJhbmdlLnZhbHVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tR3JpZCgpIHtcclxuICBjb25zdCBjdXN0b21HcmlkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b241XCIpO1xyXG5cclxuICBmdW5jdGlvbiBjdXN0b21HcmlkUmVzZXQoKSB7XHJcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbGFzc09mRWFjaFJvd1wiKTtcclxuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJyXCIpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcmVtb3ZlR3JpZCBvZiBncmlkKSB7XHJcbiAgICAgIHJlbW92ZUdyaWQucmVtb3ZlKCk7XHJcbiAgICAgIGZvciAoY29uc3QgcmVtb3ZlQnIgb2YgYnIpIHtcclxuICAgICAgICByZW1vdmVCci5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJvd1NpemUgPSAwO1xyXG4gICAgY29sdW1uU2l6ZSA9IDA7XHJcbiAgICByb3dTaXplID0gcmFuZ2UudmFsdWU7XHJcbiAgICBjb2x1bW5TaXplID0gcmFuZ2UudmFsdWU7XHJcbiAgICBDcmVhdGVHcmlkKCk7XHJcbiAgICBob3ZlckVmZmVjdCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIHRoZSBSb3cgU2l6ZTogJHtyb3dTaXplfSBgKTtcclxuICAgIGNvbnNvbGUubG9nKGBUaGlzIGlzIHRoZSBjb2x1bW4gU2l6ZTogJHtjb2x1bW5TaXplfSBgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGN1c3RvbUdyaWRVcGRhdGUoKSB7XHJcbiAgICBjb25zdCBuZXdTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXRCdG5cIik7XHJcbiAgICBuZXdTY29yZS50ZXh0Q29udGVudCA9IGBHcmlkOiAke3Jvd1NpemV9IHggJHtjb2x1bW5TaXplfWA7XHJcbiAgICBuZXdTY29yZS5hcHBlbmQocmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3VzdG9tR3JpZCgpIHtcclxuICAgIC8vIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5nZVwiKTtcclxuICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjdXN0b21HcmlkUmVzZXQoKTtcclxuICAgICAgY3VzdG9tR3JpZFVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBDdXN0b21HcmlkQnV0dG9uRm5jKCkge1xyXG4gICAgY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSBgR3JpZDogJHtyb3dTaXplfSB4ICR7Y29sdW1uU2l6ZX1gO1xyXG4gICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcInJlc2V0QnRuXCIpO1xyXG4gICAgY3VzdG9tR3JpZERpdi5hcHBlbmQocmVzZXRCdG4pO1xyXG4gICAgcmVzZXRCdG4uYXBwZW5kKHJhbmdlKTtcclxuICAgIGN1c3RvbUdyaWQoKTtcclxuICB9XHJcblxyXG4gIENyZWF0ZUdyaWQoKTtcclxuICBDdXN0b21HcmlkQnV0dG9uRm5jKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJhbmdlLCByb3dTaXplLCBjb2x1bW5TaXplIH07XHJcbiIsImltcG9ydCBcIi4vc2Fzcy9zdHlsZS5zY3NzXCI7XHJcbmltcG9ydCBDdXN0b21HcmlkIGZyb20gXCIuL2NvbXBvbmVudHMvQ3VzdG9tR3JpZFwiO1xyXG5pbXBvcnQgQ2xlYXJCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9DbGVhckJ1dHRvblwiO1xyXG5pbXBvcnQgQ29sb3JTZWxlY3RCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9Db2xvckJ1dHRvblwiO1xyXG5cclxuY29uc3QgYnV0dG9uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uMlwiKTtcclxuY29uc3QgYnV0dG9uNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uNFwiKTtcclxuY29uc3QgYnV0dG9uNiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uNlwiKTtcclxuXHJcbmZ1bmN0aW9uIGhvdmVyRWZmZWN0KCkge1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsYXNzT2ZFYWNoUm93XCIpO1xyXG4gIGZvciAoY29uc3QgZWFjaEdyaWQgb2YgZ3JpZCkge1xyXG4gICAgZWFjaEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1CdXR0b24gRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBncmlkVG9nZ2xlQnRuKCkge1xyXG4gIGNvbnN0IGdyaWRUb2dnbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGdyaWRUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImdyaWRUb2dnbGVCdG5cIik7XHJcbiAgYnV0dG9uNi5hcHBlbmQoZ3JpZFRvZ2dsZUJ1dHRvbik7XHJcbiAgZ3JpZFRvZ2dsZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiR3JpZDpUb2dnbGVcIjtcclxuXHJcbiAgZ3JpZFRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJlc3NlZFwiKTtcclxuICAgIGdyaWRUb2dnbGUoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2xlYXIoKSB7XHJcbi8vICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xhc3NPZkVhY2hSb3dcIik7XHJcbi8vICAgY29uc3QgYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnJcIik7XHJcblxyXG4vLyAgIGZvciAoY29uc3QgY2xlYXJHcmlkIG9mIGdyaWQpIHtcclxuLy8gICAgIGNsZWFyR3JpZC5yZW1vdmUoKTtcclxuLy8gICAgIGZvciAoY29uc3QgcmVtb3ZlQnIgb2YgYnIpIHtcclxuLy8gICAgICAgcmVtb3ZlQnIucmVtb3ZlKCk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGNvbHVtbigpO1xyXG4vLyAgIGhvdmVyRWZmZWN0KCk7XHJcbi8vICAgY29sb3IoKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY2xlYXJCdG4oKSB7XHJcbi8vICAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4vLyAgIGNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhclwiO1xyXG4vLyAgIGNsZWFyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbGVhckJ0blwiKTtcclxuLy8gICBidXR0b24xLmFwcGVuZChjbGVhckJ1dHRvbik7XHJcblxyXG4vLyAgIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgICAgY2xlYXIoKTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZXJhc2VyQnRuKCkge1xyXG4gIGNvbnN0IGVyYXNlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZXJhc2VyQnRuLnRleHRDb250ZW50ID0gXCJFcmFzZXJcIjtcclxuICBlcmFzZXJCdG4uY2xhc3NMaXN0LmFkZChcImVyYXNlckJ0blwiKTtcclxuICBidXR0b24yLmFwcGVuZChlcmFzZXJCdG4pO1xyXG4gIGVyYXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGVyYXNlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVJnYkJ0bigpIHtcclxuICBjb25zdCByZ2JCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHJnYkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUkdCIE1vZGVcIjtcclxuICByZ2JCdXR0b24uY2xhc3NMaXN0LmFkZChcInJnYkJ1dHRvblwiKTtcclxuICBidXR0b240LmFwcGVuZChyZ2JCdXR0b24pO1xyXG5cclxuICByZ2JCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByZXNzZWRcIik7XHJcbiAgICByYW5kb21SZ2IoKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gY29sdW1uKCk7XHJcbmdyaWRUb2dnbGVCdG4oKTtcclxuQ3VzdG9tR3JpZCgpO1xyXG5ob3ZlckVmZmVjdCgpO1xyXG5DbGVhckJ1dHRvbigpO1xyXG5lcmFzZXJCdG4oKTtcclxuQ29sb3JTZWxlY3RCdXR0b24oKTtcclxucmFuZG9tUmdiQnRuKCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRE9NIEZ1bmN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGVyYXNlKCkge1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsYXNzT2ZFYWNoUm93XCIpO1xyXG5cclxuICBmb3IgKGNvbnN0IGVhY2hHcmlkIG9mIGdyaWQpIHtcclxuICAgIGVhY2hHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE1MjIyNFwiO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21SZ2IoKSB7XHJcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2xhc3NPZkVhY2hSb3dcIik7XHJcbiAgZm9yIChjb25zdCBncmlkcyBvZiBncmlkKSB7XHJcbiAgICBncmlkcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgIyR7cmFuZG9tQ29sb3IoKX1gO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcclxuICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KTtcclxuICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ3JpZFRvZ2dsZSgpIHtcclxuICBjb25zb2xlLmxvZyhcInJ1blwiKTtcclxuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jbGFzc09mRWFjaFJvd1wiKTtcclxuICBmb3IgKGNvbnN0IGdyaWRzIG9mIGdyaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKGdyaWRzKTtcclxuICAgIGdyaWRzLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkVG9nZ2xlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgaG92ZXJFZmZlY3QgfTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNoZWNrVXNlcklucHV0KCkge1xyXG4vLyAgICAgaWYgKHJvd1NpemUgIT09IDcwICYmIGNvbHVtblNpemUgIT09IDcwKSB7XHJcbi8vICAgICAgICAgcm93U2l6ZSA9IHByb21wdChgIEVudGVyIHRoZSBHcmlkIFJPVyB2YWx1ZSBCZWxvdyBcIjEwMFwiIGApO1xyXG4vLyAgICAgICAgIHdoaWxlIChyb3dTaXplID09PSBcIlwiKSB7XHJcbi8vICAgICAgICAgICAgIHJvd1NpemUgPSBwcm9tcHQoXCJFbnRlciBSb3cgR3JpZCBBZ2FpbiAoQmVsb3cgMTAwKVwiKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY29sdW1uU2l6ZSA9IHByb21wdChgIEVudGVyIHRoZSBHcmlkIENPTFVNTiB2YWx1ZSBCZWxvdyBcIjEwMFwiIGApO1xyXG5cclxuLy8gICAgICAgICB3aGlsZSAoY29sdW1uU2l6ZSA9PT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICBjb2x1bW5TaXplID0gcHJvbXB0KFwiRW50ZXIgQ29sdW1uIEdyaWQgQWdhaW4gKEJlbG93IDEwMClcIik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNvbHVtbigpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgY29sdW1uKCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gZ3JpZC5tb2R1bGUuZXhwb3J0KCk7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZTJjZjtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMTUyMjI0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vdXRlclN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC1kaXJlY3Rpb246IHJvdzsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXG59XG5cbi5pbm5lclN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiAxMHB4IDFweCAxN3B4ICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuaW1nOmhvdmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDEwcHggMXB4IDE3cHggIzAwMDAwMDtcbn1cblxuLmNvbnRlbnQge1xuICAvKiAgdG8gcmVtb3ZlIHdoaXRlc3BhY2Ugb2YgY2hpbGQgKi9cbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBmb250LXNpemU6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcbiAgLyogYm9yZGVyLXJhZGl1czogMjBweDsgKi9cbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNlYmQ0OGE7XG4gIGJvcmRlcjogMy41cHggc29saWQgI2ViZDQ4YTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggLTFweCAxN3B4ICNlYmQ0OGE7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbmgxIHtcbiAgY29sb3I6ICMzNTRmNTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cblxuLkEge1xuICBjb2xvcjogIzM1NGY1MjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLXRvcDogLTcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uY2xhc3NPZkVhY2hSb3cge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQsIDEwNSwgOTIpOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xufVxuXG4uY2xpY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY4ZmY7XG59XG5cbi8qIC5idXR0b24xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSAqL1xuLnRvcFN0eWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b241IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuYnV0dG9uIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjI0LCAyMjMpOyAqL1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGYxZGI7XG4gIGNvbG9yOiAjMTUyMjI0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWM3YzU0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xuICBjb2xvcjogI2Y4ZjFkYjtcbiAgb3BhY2l0eTogNzAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzAwZmZkNTtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5yZXNldEJ0bjphY3RpdmUge1xuICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xufVxuXG4uaW5uZXJCdXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9uMixcbi5idXR0b240IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNvbG9yUGlja2VyQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjFkYjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZ2JCdXR0b25JbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29sb3Ige1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uaWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4vKiBcbi5yZXNldEJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0gKi9cbi5yYW5nZSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ViZDQ4YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MjIyNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNC41cHg7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZDQ4YTtcbiAgYm9yZGVyLXJhZGl1czogMzAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5ncmlkVG9nZ2xlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0LCAxMDUsIDI4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFHQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTs7O0dBQUE7QUFLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7QUFBSjs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTs7RUFFSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7QUFBSjs7QUFHQTs7Ozs7O0dBQUE7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFJQTtFQUNJLGtDQUFBO0FBREpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmUyY2Y7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzE1MjIyNDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm91dGVyU3R5bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogcm93OyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyU3R5bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMXB4IDE3cHggIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5pbWc6aG92ZXIge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxcHggMTdweCAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIC8qICB0byByZW1vdmUgd2hpdGVzcGFjZSBvZiBjaGlsZCAqL1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUyMjI0O1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMHB4OyAqL1xcclxcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2ViZDQ4YTtcXHJcXG4gICAgYm9yZGVyOiAzLjVweCBzb2xpZCAjZWJkNDhhO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAtMXB4IDE3cHggI2ViZDQ4YTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogIzM1NGY1MjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQSB7XFxyXFxuICAgIGNvbG9yOiAjMzU0ZjUyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXHJcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jbGFzc09mRWFjaFJvdyB7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNCwgMTA1LCA5Mik7ICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjhmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmJ1dHRvbjEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvcFN0eWxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b241IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjI0LCAyMjMpOyAqL1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGYxZGI7XFxyXFxuICAgIGNvbG9yOiAjMTUyMjI0O1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWM3YzU0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4yNXM7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICAgIGNvbG9yOiAjZjhmMWRiO1xcclxcbiAgICBvcGFjaXR5OiA3MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMDBmZmQ1O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0QnRuOmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbm5lckJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5idXR0b24yLFxcclxcbi5idXR0b240IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbG9yUGlja2VyQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjFkYjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5yZ2JCdXR0b25JbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sb3Ige1xcclxcbiAgICB3aWR0aDogMzRweDtcXHJcXG4gICAgaGVpZ2h0OiAzM3B4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5uaWNlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4ucmVzZXRCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4ucmFuZ2Uge1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogOTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlYmQ0OGE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTIyMjQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQuNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTFweDtcXHJcXG4gICAgd2lkdGg6IDlweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZDQ4YTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5ncmlkVG9nZ2xlIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0LCAxMDUsIDI4KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiaG92ZXJFZmZlY3QiLCJDcmVhdGVHcmlkIiwiQ2xlYXJCdXR0b24iLCJjbGVhckRpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUNsZWFyIiwiZ3JpZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJiciIsImNsZWFyR3JpZCIsInJlbW92ZSIsInJlbW92ZUJyIiwiY2xlYXJCdXR0b25GbmMiLCJjbGVhckJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiQ29sb3JTZWxlY3RCdXR0b24iLCJjb2xvckRpdiIsImNyZWF0ZUNvbG9yIiwiY29sb3JQaWNrZXIiLCJlYWNoR3JpZCIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJjb2xvckJ1dHRvbkZuYyIsImNvbG9yQnV0dG9uIiwiY29sb3JQaWNrZXJCdG4iLCJzZXRBdHRyaWJ1dGUiLCJjb2x1bW5TaXplIiwicm93U2l6ZSIsImNvbnRlbnQiLCJyb3ciLCJpIiwic2luZ2xlUm93IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJjb2x1bW4iLCJqIiwicmFuZ2UiLCJDdXN0b21HcmlkIiwiY3VzdG9tR3JpZERpdiIsImN1c3RvbUdyaWRSZXNldCIsInJlbW92ZUdyaWQiLCJjb25zb2xlIiwibG9nIiwiY3VzdG9tR3JpZFVwZGF0ZSIsIm5ld1Njb3JlIiwiY3VzdG9tR3JpZCIsIkN1c3RvbUdyaWRCdXR0b25GbmMiLCJyZXNldEJ0biIsImJ1dHRvbjIiLCJidXR0b240IiwiYnV0dG9uNiIsImdyaWRUb2dnbGVCdG4iLCJncmlkVG9nZ2xlQnV0dG9uIiwiZ3JpZFRvZ2dsZSIsImVyYXNlckJ0biIsImVyYXNlIiwicmFuZG9tUmdiQnRuIiwicmdiQnV0dG9uIiwicmFuZG9tUmdiIiwiZ3JpZHMiLCJyYW5kb21Db2xvciIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=