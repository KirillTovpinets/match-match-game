import { startBtn } from "./constants";

export const shirtItemHandler = (event) => {
  let newShirt = event.target.getAttribute("src");
  let selected = document.querySelector(".selected-shirt");
  if (selected !== null) {
    selected.classList.remove("selected-shirt");
  }
  event.target.classList.add("selected-shirt");
  localStorage.setItem("shirt", newShirt);
  let backAll = document.querySelectorAll(".back");
  backAll.forEach((element) => {
    element.style.backgroundImage = `url('${newShirt}')`;
  });
};

export const dificultyBtnHanlder = function () {
  let subMenu = document.querySelector("#difficulty");
  subMenu.classList.toggle("open");
};

export const difficultyMenuItemHandler = () => {
  const difficulty = element.innerText;
  localStorage.setItem("difficulty", difficulty);
  buildGameField();
};

export const difficultyItemHandler = function (event) {
  localStorage.setItem("difficulty", this.getAttribute("id"));
  const card = document.querySelector(".images .selected-shirt");
  if (card !== null) {
    startBtn.removeAttribute("disabled");
  }
};
