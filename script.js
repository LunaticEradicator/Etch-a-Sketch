const content = document.querySelector(".content");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

let rowSize = 100;
let columnSize = 100;


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

function checkUserInput() {
    if (rowSize !== 100 && columnSize !== 100) {
        rowSize = prompt(` Enter the Grid ROW value Below "100" `);
        while (rowSize === "") {
            rowSize = prompt("Enter Row Grid Again (Below 100)");
        }
        columnSize = prompt(` Enter the Grid COLUMN value Below "100" `);

        while (columnSize === "") {
            columnSize = prompt("Enter Column Grid Again (Below 100)");
        }
        column();
    }
    else {
        column();
    }
}


function hover() {
    let grid = document.querySelectorAll(".classOfEachRow");
    for (let eachGrid of grid) {
        eachGrid.addEventListener("mouseenter", e => {
            e.target.classList.add("clicked");
        })
    }
}

function retryButton() {
    const retryBtn = document.createElement("button");
    retryBtn.textContent = "Custom Grid";
    retryBtn.classList.add("retryBtn");
    button4.append(retryBtn);

    retryBtn.addEventListener("click", e => {
        restart();
    })
}

function clearButton() {
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
}

function colorBtn() {
    const colorBtn = document.createElement("button");
    colorBtn.textContent = "Color";
    colorBtn.classList.add("colorBtn");
    button3.append(colorBtn);
}

checkUserInput();
hover();
clearButton();
retryButton();
eraserBtn();
colorBtn()

function restart() {
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
    checkUserInput();
    hover();
}

function clear() {

    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");

    for (let removeGrid of grid) {
        removeGrid.remove();
        for (let removeBr of br) {
            removeBr.remove();
        }
    }
    column();
    hover();
}




