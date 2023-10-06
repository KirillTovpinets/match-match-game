import {
  difficultiesMenuItems,
  dificultyBtn,
  newGameBtn,
  pauseBtn,
  shirtList,
  shirtsBtn,
} from "./constants";
import { buildGameField } from "./functions";
import {
  difficultyItemHandler,
  dificultyBtnHanlder,
  pauseBtnHandler,
  shirtItemHandler,
} from "./handlers";

export const applyHanlders = () => {
  difficultiesMenuItems.forEach((element) => {
    element.addEventListener("click", difficultyItemHandler);
  });

  newGameBtn.addEventListener("click", () => buildGameField());

  shirtsBtn.addEventListener("click", () => {
    let subMenu = document.querySelector("#shirts");
    subMenu.classList.toggle("open");
  });
  pauseBtn.addEventListener("click", pauseBtnHandler);
  shirtList.forEach((element) => {
    element.addEventListener("click", shirtItemHandler);
  });
  dificultyBtn.addEventListener("click", dificultyBtnHanlder);
};
