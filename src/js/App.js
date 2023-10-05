import { Settings } from "./Settings";
import { Time } from "./Time";
import { UserForm } from "./UserForm";

export class App {
  timer;
  userForm;
  settings;
  game;
  gotItBtn = null;
  startBtn = null;
  constructor() {
    this.gotItBtn = document.querySelector("#got-it");
    this.startBtn = document.querySelector(".start");
    this.settings = new Settings();
  }
  init() {
    this.timer = new Time();
    this.gotItBtn.addEventListener("click", gotItBtnHandler);
    this.startBtn.addEventListener("click", buildGameField);
  }

  gotItBtnHandler = function (event) {
    const activeBlock = document.querySelector(".active");
    if (activeBlock.id === "how-to-play") {
      this.userForm = new UserForm();
      this.userForm.init();
    }
    activeBlock.classList.remove("slide-to-start");
    activeBlock.classList.add("slide-right");
  };
}
