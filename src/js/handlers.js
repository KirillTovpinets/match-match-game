import { gameTime, startBtn } from "./constants";

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

export const cardItemHandler = function (event) {
  let current = document.querySelector(".selected-shirt");
  if (current !== null) {
    current.classList.remove("selected-shirt");
  }
  const selectedShirt = this.getAttribute("src");
  localStorage.setItem("shirt", selectedShirt);
  this.classList.add("selected-shirt");
  const dificulty = document.querySelector(".dificulty input:checked");
  if (dificulty !== null) {
    startBtn.removeAttribute("disabled");
  }
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

export const sidebarHandler = (event) => {
  let list = document.querySelector(".top10");
  event.target.classList.toggle("open");
  list.classList.toggle("show");
  list.classList.toggle("hide");
};

export const pauseBtnHandler = (event) => {
  let icon = document.querySelector("#pause .fa");
  let cards = document.querySelectorAll("article");
  if (icon.classList.contains("fa-pause")) {
    cards.forEach((element) => {
      element.classList.add("disabled");
    });
  } else {
    cards.forEach((element) => {
      element.classList.remove("disabled");
    });
    gameTime = setInterval(() => {
      let current = timer.innerHTML.split(":");
      let minutes = Number(current[0]);
      let seconds = Number(current[1]);

      let nextSecond = String(seconds + 1);
      if (seconds == 59) {
        nextSecond = 0;
        minutes = String(minutes + 1);
      }

      if (nextSecond < 10) {
        nextSecond = "0" + nextSecond;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      timer.innerHTML = minutes + ":" + nextSecond;
    }, 1000);
  }
  icon.classList.toggle("fa-pause");
  icon.classList.toggle("fa-play");
};
