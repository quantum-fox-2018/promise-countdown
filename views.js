const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));

  let min = Math.floor(seconds / 60)
      if(min < 10) {
        min = '0' + min
      }
      
      let sec = seconds % 60
      if(sec < 10) {
        sec = '0' + sec
      }
  console.log(chalk.cyan(figlet.textSync(`${min} : ${sec}`)));
};

module.exports = { displayCountdown };
