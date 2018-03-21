const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  //saya bikin prosses convert disini biar enggak otak atik parameter
  let min = 0;
  let secs = 0;
  if(seconds >= 60){
    min = Math.floor(seconds/60);
    sec = seconds % 60;
  }else{
    sec = seconds;
  }

  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.green(figlet.textSync(`${min} : ${sec} `)));

};

module.exports = { displayCountdown };
