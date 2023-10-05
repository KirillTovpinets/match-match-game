import {
  blocks,
  cards,
  difficulties,
  difficultiesMenuItems,
  dificultyBtn,
  newGameBtn,
  pauseBtn,
  shirtList,
  shirtsBtn,
  sidebar,
} from "./constants";
import { buildGameField, onAnimationEndAction } from "./functions";
import {
  cardItemHandler,
  difficultyItemHandler,
  dificultyBtnHanlder,
  pauseBtnHandler,
  shirtItemHandler,
  sidebarHandler,
} from "./handlers";

export const applyHanlders = () => {
  difficultiesMenuItems.forEach((element) => {
    element.addEventListener("click", difficultyItemHandler);
  });

  newGameBtn.addEventListener("click", () => buildGameField());

  sidebar.addEventListener("click", sidebarHandler);
  shirtsBtn.addEventListener("click", () => {
    let subMenu = document.querySelector("#shirts");
    subMenu.classList.toggle("open");
  });
  pauseBtn.addEventListener("click", pauseBtnHandler);
  shirtList.forEach((element) => {
    element.addEventListener("click", shirtItemHandler);
  });
  dificultyBtn.addEventListener("click", dificultyBtnHanlder);

  blocks.forEach(function (value, index, list) {
    value.addEventListener("webkitAnimationEnd", onAnimationEndAction);
    value.addEventListener("animationend", onAnimationEndAction);
  });

  cards.forEach(function (item, index, arr) {
    item.addEventListener("click", cardItemHandler);
  });

  difficulties.forEach(function (item, index, arr) {
    item.addEventListener("click", difficultyItemHandler);
  });
};
