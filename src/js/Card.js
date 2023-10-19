export class Card {
  card = null;
  preloader = null;

  imageElement = null;

  constructor(width, height, margin, imageElement) {
    this.imageElement = imageElement;
    this.preloader = document.querySelector("#preloader");

    this.card = document.createElement("article");
    this.card.classList.add("card");
    this.card.style.marginRight = margin + "px";
    this.card.style.marginBottom = margin + "px";
    this.card.addEventListener("click", this.#openCardAction);

    let back = document.createElement("div");
    back.style.height = `100%`;
    back.classList.add("back");
    const image = localStorage.getItem("shirt");
    back.style.backgroundImage = `url('${image}')`;
    back.style.backgroundPosition = "center";
    let front = document.createElement("div");
    front.classList.add("front");
    front.style.height = `100%`;

    this.imageElement.style.height = "100%";
    front.appendChild(this.imageElement);

    this.card.appendChild(back);
    this.card.appendChild(front);

    this.card.style.width = width + "px";
    this.card.style.height = height + "px";
  }

  #openCardAction() {
    if (this.classList.contains("disabled")) {
      return;
    }
    this.classList.toggle("open");
    let alreadyOpen = document.querySelectorAll(".open:not(.correct)");
    if (alreadyOpen.length === 2) {
      if (
        alreadyOpen[0].children[1].children[0].getAttribute("src") ==
        alreadyOpen[1].children[1].children[0].getAttribute("src")
      ) {
        setTimeout(function () {
          alreadyOpen.forEach(function (value, index, arr) {
            value.classList.add("correct");
          });
          let remainClosed = document.querySelectorAll(".card:not(.open)");

          if (remainClosed.length === 0) {
            clearInterval(window.game.finish());
          }
        }, 700);
      } else {
        setTimeout(function () {
          alreadyOpen.forEach(function (value, index, arr) {
            alreadyOpen[0].classList.add("shake");
            alreadyOpen[1].classList.add("shake");
          });
        }, 500);
        setTimeout(function () {
          alreadyOpen.forEach(function (value, index, arr) {
            value.classList.remove(...["open", "shake"]);
          });
        }, 1000);
      }
    }
  }

  valueOf() {
    return this.card;
  }
}
