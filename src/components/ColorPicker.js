/* eslint-disable no-restricted-syntax */
export default function ColorPicker() {
  const colorDiv = document.querySelector(".main__button__colorPicker");

  function colorPickerFnc() {
    const tempColorPickerBtn = document.querySelector(
      ".main__button__colorPicker__button__size"
    );
    const grid = document.querySelectorAll(".main__grid__row");

    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
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
