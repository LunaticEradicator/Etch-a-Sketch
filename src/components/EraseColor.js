/* eslint-disable no-restricted-syntax */

export default function EraseColor() {
  const eraseColorDiv = document.querySelector(".main__allButton__erase");

  function eraseColorFnc() {
    const grid = document.querySelectorAll(".main__grid__row");

    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
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
