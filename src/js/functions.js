const { startBtn, gameTime, MAX_ID_NUMBER, preloader } = require("./constants");

function generateColors(chars) {
  let frontColor = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    frontColor.push(chars[randomNumber]);
  }
  return frontColor.join("");
}

module.exports = {
  openCardAction,
  generateColors,
  onAnimationEndAction,
};
