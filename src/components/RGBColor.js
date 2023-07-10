/* eslint-disable no-restricted-syntax */

export default function RGBColor() {
  const rgbColorDiv = document.querySelector(".button4");

  function randomColor() {
    const rand = Math.floor(Math.random() * 16777215).toString(16);
    return rand;
  }

  function randomRGBFnc() {
    const grid = document.querySelectorAll(".classOfEachRow");
    for (const grids of grid) {
      grids.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = `#${randomColor()}`;
      });
    }
  }

  function randomRGB() {
    const rgbButton = document.createElement("button");
    rgbButton.textContent = "RGB Mode";
    rgbButton.classList.add("rgbButton");
    rgbColorDiv.append(rgbButton);

    rgbButton.addEventListener("click", randomRGBFnc());
  }

  randomRGB();
}
