const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));

  var min = Math.floor(seconds/60) + '';
  var sec = Math.floor(seconds%60) + '';

  if (min.length < 2) {
    min = '0' + min;
  }

  if (sec.length < 2) {
    sec = '0' + sec;
  }

  console.log(chalk.white(figlet.textSync(`${min}:${sec}`)));
};

module.exports = { displayCountdown };
