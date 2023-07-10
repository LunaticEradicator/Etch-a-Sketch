/* eslint-disable no-restricted-syntax */

export default function EraseColor() {
  const eraseColorDiv = document.querySelector(".button2");

  function eraseColorFnc() {
    const grid = document.querySelectorAll(".classOfEachRow");

    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "#152224";
      });
    }
  }

  function eraseColor() {
    const eraserBtn = document.createElement("button");
    eraserBtn.textContent = "Eraser";
    eraserBtn.classList.add("eraserBtn");
    eraseColorDiv.append(eraserBtn);
    eraserBtn.addEventListener("click", eraseColorFnc);
  }
  eraseColor();
}
