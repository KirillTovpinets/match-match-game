export class UserForm {
  lastName = null;
  firstName = null;
  formInputs = [];
  email = null;

  constructor() {
    this.formInputs = document.querySelectorAll(".user-info input");
  }

  init() {
    this.#getFormInput('first-name')?.value = localStorage.getItem('first-name');
    this.#getFormInput('last-name')?.value = localStorage.getItem('last-name');
    this.#getFormInput('email')?.value = localStorage.getItem('email');

    this.formInputs.forEach((element) => {
      element.addEventListener("blur", this.#formInputHanlder);
    });
  }
  #getFormInput(name) {
    return this.formInputs.find(element => element.id === name);
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
      localStorage.setItem("first-name", this.#getFormInput('first-name')?.value);
      localStorage.setItem("last-name", this.#getFormInput('last-name')?.value);
      localStorage.setItem("email", this.#getFormInput('email').value);
      gotItBtn.removeAttribute("disabled");
    }
  };
}
