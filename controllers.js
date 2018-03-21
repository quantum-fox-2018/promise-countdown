const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    setInterval(() => {
      let minute = Math.floor(seconds/60)
      let secondsLeft = seconds - minute * 60
      
      if (seconds < 0) {
        clearInterval();
        resolve();
        process.exit()
      } else {
        if(minute < 10){
          minute = '0' + minute
        }
        if(secondsLeft < 10){
          secondsLeft = '0' + secondsLeft
        }
        displayCountdown(minute, secondsLeft)
        seconds--
      }
    }, 1000);
  });

module.exports = {
  timer
};
