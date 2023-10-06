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
      item.addEventListener("click", this.#difficultyItemHandler);
    });

    this.shirts.forEach((item, index, arr) => {
      item.addEventListener("click", this.#cardItemHandler);
    });
  }

  #cardItemHandler(event) {
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
  }

  #difficultyItemHandler(event) {
    localStorage.setItem("difficulty", this.getAttribute("id"));
    const card = document.querySelector(".images .selected-shirt");
    if (card !== null) {
      startBtn.removeAttribute("disabled");
    }
  }
}
