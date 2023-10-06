import { Game } from "./Game";

export class Settings {
  difficulty = null;
  cardShirt = null;

  dificultyOptions = [];
  shirts = [];

  startBtn = null;

  constructor() {
    this.dificultyOptions = document.querySelectorAll(".dificulty-setting");
    this.shirts = document.querySelectorAll(".image img");
    this.startBtn = document.querySelector(".start");
  }

  init() {
    this.startBtn.style.display = "inline-block";
    this.dificultyOptions.forEach((item) => {
      item.addEventListener("click", this.#difficultyItemHandler.bind(this));
    });

    this.shirts.forEach((item) => {
      item.addEventListener("click", this.#cardItemHandler.bind(this));
    });

    this.startBtn.addEventListener("click", this.#initGame);
  }

  #initGame() {
    const game = new Game();
    game.init();
  }

  #cardItemHandler(event) {
    if (this.cardShirt) {
      this.cardShirt.classList.remove("selected-shirt");
    }
    this.cardShirt = event.currentTarget;
    const selectedShirt = this.cardShirt.getAttribute("src");
    localStorage.setItem("shirt", selectedShirt);
    this.cardShirt.classList.add("selected-shirt");

    if (this.difficulty !== null) {
      this.startBtn.removeAttribute("disabled");
    }
  }

  #difficultyItemHandler(event) {
    this.difficulty = event.currentTarget;
    localStorage.setItem("difficulty", this.difficulty.getAttribute("id"));
    if (this.cardShirt !== null) {
      this.startBtn.removeAttribute("disabled");
    }
  }
}
