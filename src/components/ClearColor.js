/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

import CreateGrid from "./CreateGrid";
import HoverEffect from "./HoverEffect";

export default function ClearColor() {
  const clearColorDiv = document.querySelector(".main__allButton__clear");

  function clearColorFnc() {
    const grid = document.querySelectorAll(".main__grid__row");
    // const br = document.querySelectorAll("br");

    for (const clearGrid of grid) {
      clearGrid.remove();
      // for (const removeBr of br) {
      //   removeBr.remove();
      // }
    }
    CreateGrid();
    HoverEffect();
  }

  function clearColor() {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear";
    clearBtn.classList.add("main__allButton__clear__button");
    clearColorDiv.append(clearBtn);

    clearBtn.addEventListener("click", clearColorFnc);
  }

  clearColor();
}
