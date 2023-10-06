export class UserForm {
  lastName = null;
  firstName = null;
  formInputs = [];
  email = null;
  nextButton = null;

  constructor() {
    this.formInputs = document.querySelectorAll(".user-info input");
  }

  init(nextButton) {
    this.nextButton = nextButton;
    this.#getFormInput("first-name").value = localStorage.getItem("first-name");
    this.#getFormInput("last-name").value = localStorage.getItem("last-name");
    this.#getFormInput("email").value = localStorage.getItem("email");

    this.formInputs.forEach((element) => {
      element.addEventListener("keydown", this.#formInputHanlder.bind(this));
      element.addEventListener("blur", this.#formInputHanlder.bind(this));
    });
    this.nextButton.setAttribute("disabled", "");
  }
  #getFormInput(name) {
    for (let i = 0; i < this.formInputs.length; i++) {
      if (this.formInputs[i].id === name) {
        return this.formInputs[i];
      }
    }
  }
  #formInputHanlder = (event) => {
    let allAreNotEmpty = true;
    this.formInputs.forEach((element) => {
      if (element.value == "") {
        allAreNotEmpty = false;
        return;
      }
    });
    if (allAreNotEmpty) {
      localStorage.setItem(
        "first-name",
        this.#getFormInput("first-name")?.value
      );
      localStorage.setItem("last-name", this.#getFormInput("last-name")?.value);
      localStorage.setItem("email", this.#getFormInput("email").value);
      this.nextButton.removeAttribute("disabled");
    }
  };
}
