const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (minutes,seconds) => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(minutes,':',seconds)
  console.log(chalk.red(figlet.textSync(minutes+' : '+seconds)));
};

module.exports = { displayCountdown };
