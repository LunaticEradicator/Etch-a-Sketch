const content = document.querySelector(".content");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const range = document.querySelector(".range");

let rowSize = range.value;
let columnSize = range.value;

function row() {
    for (let i = 0; i < rowSize; i++) {
        singleRow = document.createElement("div");
        content.style.gridTemplateColumns = `repeat(${columnSize}, 1fr)`;
        content.style.gridTemplateRows = `repeat(${rowSize}, 1fr)`;
        singleRow.classList.add("classOfEachRow");
        content.append(singleRow);
    }
}

function column() {
    for (let j = 0; j < columnSize; j++) {
        row();
    }
}

function hoverEffect() {
    let grid = document.querySelectorAll(".classOfEachRow");
    for (let eachGrid of grid) {
        eachGrid.addEventListener("mouseenter", e => {
            e.target.classList.add("clicked");
            console.log("Click");
        })
    }
}

function CustomGrid() {
    const range = document.querySelector(".range");
    range.addEventListener("click", e => {
        reset();
        updateScore();
    })
}

function updateScore() {
    const newScore = document.querySelector(".resetBtn");
    newScore.textContent = `Grid: ${rowSize} x ${columnSize}`;
    newScore.append(range);
}

// -------------------------------------------------Button Function-------------------------------------------------


function CustomGridBtn() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = `Grid: ${rowSize} x ${columnSize}`;
    resetBtn.classList.add("resetBtn");
    button5.append(resetBtn);
    resetBtn.append(range);
}

function gridToggleBtn() {
    const gridToggleBtn = document.createElement("button");
    gridToggleBtn.classList.add("gridToggleBtn");
    button6.append(gridToggleBtn);
    gridToggleBtn.textContent = "Grid:Toggle";

    gridToggleBtn.addEventListener("click", e => {
        console.log("Pressed");
        gridToggle();
    })
}

function clearBtn() {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    clearBtn.classList.add("clearBtn");
    button1.append(clearBtn);

    clearBtn.addEventListener("click", e => {
        clear();
    })
}

function eraserBtn() {
    const eraserBtn = document.createElement("button");
    eraserBtn.textContent = "Eraser";
    eraserBtn.classList.add("eraserBtn");
    button2.append(eraserBtn);
    eraserBtn.addEventListener("click", e => {
        erase();
    })
}

function colorBtn() {
    const colorBtn = document.createElement("button");
    colorBtn.classList.add("colorBtn");
    button3.append(colorBtn);

    const colorPickerBtn = document.createElement("input");
    colorPickerBtn.classList.add("colorPickerBtn");
    colorPickerBtn.setAttribute("type", "color");
    colorPickerBtn.setAttribute("value", "#f0f8ff");
    colorBtn.append(colorPickerBtn);

    colorBtn.addEventListener("click", e => {
        color();
    })
}

function randomRgbBtn() {
    const rgbButton = document.createElement("button");
    rgbButton.textContent = "RGB Mode";
    rgbButton.classList.add("rgbButton");
    button4.append(rgbButton);

    rgbButton.addEventListener("click", e => {
        console.log("pressed");
        randomRgb();
    })

}


column();
gridToggleBtn()
CustomGridBtn();
hoverEffect();
clearBtn();
eraserBtn();
colorBtn();
randomRgbBtn();
CustomGrid();

// -------------------------------------------------DOM Function -------------------------------------------------
function reset() {
    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");

    for (let removeGrid of grid) {
        removeGrid.remove();
        for (let removeBr of br) {
            removeBr.remove();
        }
    }
    rowSize = 0;
    columnSize = 0;
    rowSize = range.value;
    columnSize = range.value;
    column();
    hoverEffect();

    console.log(`This is the Row Size: ${rowSize} `);
    console.log(`This is the column Size: ${columnSize} `);
}

function clear() {

    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");

    for (let clearGrid of grid) {
        clearGrid.remove();
        for (let removeBr of br) {
            removeBr.remove();
        }
    }
    column();
    hoverEffect();
    color();
}

function erase() {
    let grid = document.querySelectorAll(".classOfEachRow");

    for (let eachGrid of grid) {
        eachGrid.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "#152224";
            // e.target.classList.remove("clicked");
        })
    }

}

function color() {
    const colorPicker = document.querySelector(".colorPickerBtn");
    let grid = document.querySelectorAll(".classOfEachRow");

    for (let eachGrid of grid) {
        eachGrid.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = colorPicker.value;
        })
    }
}

function randomRgb() {
    let grid = document.querySelectorAll(".classOfEachRow");
    for (let grids of grid) {
        grids.addEventListener("mouseenter", e => {
            e.target.style.backgroundColor = "#" + randomColor();
        })
    }
}

function randomColor() {
    const rand = Math.floor(Math.random() * 16777215).toString(16);
    return rand;
}


function gridToggle() {
    console.log("run");
    let grid = document.querySelectorAll(".classOfEachRow");
    for (let grids of grid) {
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