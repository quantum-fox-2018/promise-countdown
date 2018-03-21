const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minutes = 0;
  let secFormat = '';
  let minFormat = '';
  while(seconds>=60){
    minutes++;
    seconds-=60;
  }
  if(seconds<10){
    secFormat = secFormat + '0' + seconds
  }else{
    secFormat = secFormat + '' + seconds
  }
  if(minutes<10){
    minFormat = minFormat + '0' + minutes
  }else{
    minFormat = minFormat + '' + minutes
  }

  console.log(chalk.red(figlet.textSync(`${minFormat} : ${secFormat}`)));
};

module.exports = { displayCountdown };
