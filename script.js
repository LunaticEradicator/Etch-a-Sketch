const content = document.querySelector(".content");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const range = document.querySelector(".range");

let rowSize = range.value;
let columnSize = range.value;

function row() {
    for (let j = 0; j < rowSize; j++) {
        singleRow = document.createElement("div");
        singleRow.classList.add("classOfEachRow");
        content.append(singleRow);
    }
}

function column() {
    for (let j = 0; j < columnSize; j++) {
        const br = document.createElement("br");
        row();
        content.append(br);
    }
}

function hoverEffect() {
    let grid = document.querySelectorAll(".classOfEachRow");
    for (let eachGrid of grid) {
        eachGrid.addEventListener("mouseenter", e => {
            e.target.classList.add("clicked");
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
    newScore.textContent = `Grid:${rowSize}X${columnSize}`;
    newScore.append(range);
}

function CustomGridBtn() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = `Grid:${rowSize}X${columnSize}`;
    resetBtn.classList.add("resetBtn");
    button5.append(resetBtn);
    resetBtn.append(range);
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

    colorBtn.addEventListener("mouseleave", e => {
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
CustomGridBtn();
hoverEffect();
clearBtn();
eraserBtn();
colorBtn();
randomRgbBtn();
CustomGrid();

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

    console.log(`This is the Row Size   : ${rowSize}`);
    console.log(`This is the column Size: ${columnSize}`);
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
