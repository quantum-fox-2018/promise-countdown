const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {

        let TempSeconds = secondsLeft;
        let menit = 0;
        let timeFormat = '00:00';

        while(TempSeconds >= 60){
          menit += 1;
          TempSeconds-= 60;
        }

        if(menit < 60){
          menit = `0${menit}`;
        }

        if(TempSeconds < 10){
          TempSeconds = `0${TempSeconds}`
        }

        timeFormat = `${menit}:${TempSeconds}`;

        displayCountdown(timeFormat);
      }
    }, 1000);
  });

module.exports = {
  timer
};
