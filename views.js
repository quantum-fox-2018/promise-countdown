const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit = Math.floor(seconds/60) + '';
  let detik = seconds%60 + '';

  if(menit.length < 2) {
    var minute = `0${menit}`
  }

  if(detik.length < 2) {
    var sec = `0${detik}`
  }

  let countdown = `${minute}:${sec}`
  console.log(figlet.textSync(countdown));
};

module.exports = { displayCountdown };
