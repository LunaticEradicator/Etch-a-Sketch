/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

export default function HoverEffect() {
  function hoverEffect() {
    const grid = document.querySelectorAll(".main__grid__row");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
        e.target.classList.add("defaultHoverColor");
        // console.log("Selected");
      });
    }
  }
  hoverEffect();
}
