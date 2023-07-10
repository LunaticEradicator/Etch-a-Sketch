/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import CreateGrid from "./CreateGrid";
import HoverEffect from "./HoverEffect";

export default function ClearColor() {
  const clearColorDiv = document.querySelector(".button1");

  function clearColorFnc() {
    const grid = document.querySelectorAll(".classOfEachRow");
    const br = document.querySelectorAll("br");

    for (const clearGrid of grid) {
      clearGrid.remove();
      for (const removeBr of br) {
        removeBr.remove();
      }
    }
    CreateGrid();
    HoverEffect();
  }

  function clearColor() {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    clearBtn.classList.add("clearBtn");
    clearColorDiv.append(clearBtn);

    clearBtn.addEventListener("click", clearColorFnc);
  }

  clearColor();
}
