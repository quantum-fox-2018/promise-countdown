const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayCountdown(konversiMenit(seconds - 1));
    setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval();
        resolve();
      } else {
        displayCountdown(konversiMenit(secondsLeft));
      }
    }, 1000);
  });

const konversiMenit = seconds => {
  var jam = ("0" + Math.floor(seconds/60)).slice(-2);
  var menit = ("0" + seconds%60).slice(-2);
  return jam + ":" + menit;
};

module.exports = {
  timer
};
