const { startBtn, gameTime, MAX_ID_NUMBER, preloader } = require("./constants");

function generateColors(chars) {
  let frontColor = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    frontColor.push(chars[randomNumber]);
  }
  return frontColor.join("");
}

function openCardAction() {
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
          const userFname = localStorage.getItem("user-fname");
          const userName = localStorage.getItem("user-name");
          const email = localStorage.getItem("user-email");
          debugger;
          clearInterval(gameTime);
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
          updateTopList();
          result.appendChild(time);
          let body = document.querySelector("body");
          body.prepend(result);

          setTimeout(function () {
            result.remove();
          }, 2000);
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
          value.classList.remove("open");
          value.classList.remove("shake");
        });
      }, 1000);
    }
  }
}

module.exports = {
  openCardAction,
  generateColors,
  onAnimationEndAction,
};
