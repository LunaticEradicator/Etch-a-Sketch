/* eslint-disable no-restricted-syntax */

export default function RGBColor() {
  const rgbColorDiv = document.querySelector(".main__button__rgbColor");

  function randomColor() {
    const rand = Math.floor(Math.random() * 16777215).toString(16);
    return rand;
  }

  function randomRGBFnc() {
    const grid = document.querySelectorAll(".main__grid__row");
    for (const grids of grid) {
      grids.addEventListener("mouseenter", (e) => {
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
