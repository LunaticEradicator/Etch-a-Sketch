/* eslint-disable no-restricted-syntax */
export default function ColorPicker() {
  const colorDiv = document.querySelector(".button3");

  function colorPickerFnc() {
    const tempColorPickerBtn = document.querySelector(".colorPickerBtn");
    const grid = document.querySelectorAll(".classOfEachRow");

    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = tempColorPickerBtn.value;
      });
    }
  }

  function colorPicker() {
    const colorPickerButton = document.createElement("button");
    colorPickerButton.classList.add("colorBtn");
    colorDiv.append(colorPickerButton);

    const colorPickerInput = document.createElement("input");
    colorPickerInput.classList.add("colorPickerBtn");
    colorPickerInput.setAttribute("type", "color");
    colorPickerInput.setAttribute("value", "#f0f8ff");
    colorPickerButton.append(colorPickerInput);

    colorPickerButton.addEventListener("click", colorPickerFnc);
  }
  colorPicker();
}
