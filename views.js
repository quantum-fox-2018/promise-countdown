const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var minutes = 0
  var detik = 0
  if(seconds>59){
    detik = seconds%60
    minutes = Math.floor(seconds/60)
    if(detik<10){
      detik=0+''+detik
    }
    if(minutes<10){
      minutes=0+''+minutes
    }

  }
  else{
    minutes = '00'
    detik = seconds
  }
  console.log(chalk.cyan(figlet.textSync(minutes+':'+detik)));
};

module.exports = { displayCountdown };
