export class Time {
  timerId = null;

  timer = null;

  init() {
    this.timer = document.querySelector("#timer");
    this.timer.innerText = "00:00";
    this.timerId = setInterval(() => {
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

  pause() {
    clearInterval(this.timerId);
  }
}
