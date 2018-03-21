const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let minute = Math.floor(seconds/60);
  let second = seconds%60;
  
  if(minute <= 9 && second <= 9){
    console.log(chalk.blue(figlet.textSync(`0${minute}:0${second}`)))
  } else if(minute <= 9){
    console.log(chalk.blue(figlet.textSync(`0${minute}:${second}`)))
  } else if(second <= 9){
    console.log(chalk.blue(figlet.textSync(`${minute}:0${second}`)))
  } else {
    console.log(chalk.blue(figlet.textSync(`${minute}:${second}`)))
  }
};

module.exports = { displayCountdown };
