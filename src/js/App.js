import { Settings } from "./Settings";
import { UserForm } from "./UserForm";
export class App {
  timer;
  userForm;
  settings;
  gotItBtn = null;
  sideBar = null;
  pannels = [];
  activeBlock = null;
  static SLIDE_TO_START = "slide-to-start";
  static SLIDE_TO_RIGHT = "slide-right";
  static ACTIVE_CLASS = "active";
  constructor() {
    this.gotItBtn = document.querySelector("#got-it");
    this.pannels = document.querySelectorAll(".data-item");
  }
  init() {
    this.gotItBtn.addEventListener("click", this.#gotItBtnHandler);
    this.pannels[0].classList.add("active");
    this.activeBlock = this.pannels[0];

    this.pannels.forEach((pannel) => {
      pannel.addEventListener(
        "webkitAnimationEnd",
        this.#onAnimationEndAction.bind(this)
      );
      pannel.addEventListener(
        "animationend",
        this.#onAnimationEndAction.bind(this)
      );
    });
  }

  #gotItBtnHandler = () => {
    this.activeBlock.classList.remove(App.SLIDE_TO_START);
    this.activeBlock.classList.add(App.SLIDE_TO_RIGHT);
  };

  #onAnimationEndAction() {
    if (this.activeBlock.classList.contains("slide-to-start")) {
      return;
    }
    this.activeBlock.style.display = "none";
    let nextItem = this.activeBlock.nextElementSibling;
    this.activeBlock.classList.remove(App.ACTIVE_CLASS);
    nextItem.classList.add(App.SLIDE_TO_START);
    nextItem.classList.add(App.ACTIVE_CLASS);
    this.activeBlock = nextItem;
    if (nextItem.classList.contains("game-details")) {
      this.settings = new Settings();
      this.gotItBtn.style.display = "none";
      this.settings.init();
    }
    if (nextItem.classList.contains("user-info")) {
      this.userForm = new UserForm();
      this.userForm.init(this.gotItBtn);
    }
  }
}
