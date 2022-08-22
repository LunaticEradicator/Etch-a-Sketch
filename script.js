const main = document.querySelector("div");
const body = document.querySelector("body");

let rowSize = 15;
let columnSize = 15;


function row() {
    for (let j = 0; j < rowSize; j++) {
        singleRow = document.createElement("div");
        singleRow.classList.add("classOfEachRow");
        main.append(singleRow);
    }
}

function column() {
    for (let j = 0; j < columnSize; j++) {
        const br = document.createElement("br");
        main.append(br);
        row();
    }
}

function checkUserInput() {
    if (rowSize === 15 || columnSize === 15) {
        column();
    }
    else {
        rowSize = prompt(` Enter the Grid ROW value Below "37" `);
        while (rowSize === "" || rowSize > 36) {
            rowSize = prompt("Enter Row Grid Again (Below 37)");
        }
        columnSize = prompt(` Enter the Grid COLUMN value Below "17" `);

        while (columnSize === "" || columnSize > 16) {
            columnSize = prompt("Enter Column Grid Again (Below 17)");
        }
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
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear");
    body.append(clearBtn);
    clearBtn.textContent = "Clear";

    clearBtn.addEventListener("click", e => {
        restart();
    })

}

retryButton();
checkUserInput();
hover();




function restart() {
    let grid = document.querySelectorAll(".classOfEachRow");
    let br = document.querySelectorAll("br");
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




