export class Navbar {
  pauseBtn = null;
  sideBar = null;

  constructor() {
    this.pauseBtn = document.querySelector("#pause");
    this.sideBar = document.querySelector("#sidebar");
  }

  init() {
    this.pauseBtn.addEventListener("click", this.#pauseBtnHandler);
    this.sideBar.addEventListener("click", this.#sidebarHandler);
  }

  #sidebarHandler(event) {
    let list = document.querySelector(".top10");
    event.target.classList.toggle("open");
    list.classList.toggle("show");
    list.classList.toggle("hide");
  }

  #pauseBtnHandler(event) {
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
  }
}
