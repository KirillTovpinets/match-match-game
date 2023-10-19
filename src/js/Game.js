import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Time } from "./Time";
import { MAX_ID_NUMBER } from "./constants";
export class Game {
  preloader = null;
  timer = null;
  navbar = null;
  fieldHeight = 0;
  fieldHeight = 0;
  gameField = null;
  difficultyConfig = {
    easy: { height: 2, width: 5 },
    normal: { height: 3, width: 6 },
    expert: { height: 3, width: 8 },
  };

  get totalImageCount() {
    return this.fieldHeight * this.fieldWidth;
  }

  get containerWidth() {
    return this.gameField.clientWidth;
  }
  get cardWidth() {
    return Math.round(
      this.containerWidth / this.fieldWidth -
        (this.fieldWidth - 2) * this.cardMargin * 0.7
    );
  }

  get cardHeight() {
    return Math.round(this.cardWidth * 1.5);
  }

  get cardMargin() {
    return this.containerWidth / this.fieldWidth / 10;
  }
  constructor() {
    this.preloader = document.querySelector("#preloader");
    this.gameField = document.querySelector(".game-field");
    this.navbar = new Navbar();
  }
  init(difficulty) {
    const config = this.difficultyConfig[difficulty];

    this.fieldHeight = config.height;
    this.fieldWidth = config.width;

    this.updateTopList();
    this.buildGameField();
  }
  updateTopList() {
    const topListElement = document.querySelector(".top10 ol");
    let topListItems = document.querySelectorAll(".top10 ol li");
    let topListStorage = JSON.parse(localStorage.getItem("top10"));
    const currentUserEmail = localStorage.getItem("user-email");

    if (topListItems.length > 0) {
      topListItems.forEach((element) => {
        element.remove();
      });
    }
    if (topListStorage !== null) {
      topListStorage.sort((a, b) => {
        let timeA = a.time.split(":");
        let timeB = b.time.split(":");
        return (
          timeA[0] > timeB[0] || (timeA[0] == timeB[0] && timeA[1] > timeB[1])
        );
      });
      let topList10 = topListStorage.slice(0, 10);
      for (let item of topList10) {
        let listItem = document.createElement("li");
        if (item.email == currentUserEmail) {
          listItem.style.color = "#fda403";
        }
        listItem.innerText = `${item.userFname} ${item.userName} - ${item.time}`;
        topListElement.appendChild(listItem);
      }
    }
  }
  buildGameField() {
    preloader.classList.add("active");
    const statusBar = document.querySelector(".status-bar");

    let icon = document.querySelector(".fa-play");
    if (icon !== null) {
      icon.classList.add("fa-pause");
      icon.classList.remove("fa-play");
    }

    this.timer = new Time();
    this.timer.init();

    const cardsOnField = document.querySelectorAll(".card");
    if (cardsOnField.length !== 0) {
      cardsOnField.forEach(function (element, index, arr) {
        element.remove();
      });
    }
    const details = document.querySelector(".wrapper");
    details.classList.add("slide-top");

    statusBar.classList.add("slide-down");

    let row = document.createElement("div");
    row.classList.add("clearfix");
    row.style.textAlign = "center";

    const imageFactory = this.#getImageElement();
    for (let i = 0; i < this.totalImageCount; i++) {
      const imageElement = imageFactory();
      const card = new Card(
        this.cardWidth,
        this.cardHeight,
        this.cardMargin,
        imageElement
      );
      row.appendChild(card.valueOf());
      if ((i + 1) % this.fieldWidth === 0 && i !== 0) {
        this.gameField.appendChild(row);
        row = document.createElement("div");
        row.classList.add("clearfix");
        row.style.textAlign = "center";
      }
    }
    this.gameField.appendChild(row);
    row = document.createElement("div");
    this.gameField.style.opacity = "1";
  }

  finish() {
    this.timer.pause();
    this.#showResults();
  }

  #showResults() {
    const userFname = localStorage.getItem("user-fname");
    const userName = localStorage.getItem("user-name");
    const email = localStorage.getItem("user-email");
    let result = document.createElement("h4");
    let timer = document.querySelector("#timer");

    result.classList.add("result");
    result.innerHTML = "Your time is <br/>";
    let time = document.createElement("span");
    time.style.color = "#F44336";
    time.innerText = timer.innerText;

    let saveData = {
      userFname,
      userName,
      email,
      time: timer.innerText,
    };

    let topList = JSON.parse(localStorage.getItem("top10"));
    if (topList !== null) {
      topList.push(saveData);
    } else {
      topList = [saveData];
    }
    localStorage.setItem("top10", JSON.stringify(topList));
    this.updateTopList();
    result.appendChild(time);
    let body = document.querySelector("body");
    body.prepend(result);

    setTimeout(function () {
      result.remove();
    }, 2000);
  }

  #getImageElement() {
    const imageIds = [];
    const loadedImages = [];

    return () => {
      let randomId;

      if (imageIds.length < this.totalImageCount / 2) {
        randomId = Math.floor(Math.random() * (MAX_ID_NUMBER - 1) + 1);
        imageIds.push(randomId);
      } else {
        let randomIndex = 0;
        while (imageIds[randomIndex] === -1) {
          randomIndex = Math.floor(Math.random() * imageIds.length);
        }
        randomId = imageIds[randomIndex];
        imageIds[randomIndex] = -1;
      }

      const imageElement = document.createElement("img");
      imageElement.src = `https://i.pravatar.cc/300?img=${randomId}`;
      imageElement.onload = () => {
        loadedImages.push(randomId);

        if (loadedImages.length === imageIds.length) {
          this.preloader.classList.remove("active");
        }
      };

      return imageElement;
    };
  }
}
