/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */

export default function HoverEffect() {
  function hoverEffect() {
    const grid = document.querySelectorAll(".classOfEachRow");
    for (const eachGrid of grid) {
      eachGrid.addEventListener("mouseenter", (e) => {
        e.target.classList.add("clicked");
        console.log("Click");
      });
    }
  }
  hoverEffect();
}
