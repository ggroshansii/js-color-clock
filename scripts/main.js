const clockDisplay = document.querySelector(".clock-display");
const clockFace = document.querySelector(".clock-face");

//Obtains the current time in hours:minutes:seconds and logs it to the clockDisplay element
function getCurrentTime() {
  const today = new Date();
  let seconds, hours;
  today.getSeconds() < 10 ? (seconds = "0" + today.getSeconds()) : (seconds = today.getSeconds());
  today.getHours() > 12 ? (hours = today.getHours() - 12) : hours = today.getHours();
  return {
    hours,
    minutes: today.getMinutes(),
    seconds,
  };
}

function updateTime() {
    const hours = getCurrentTime().hours;
    const minutes = getCurrentTime().minutes;
    const seconds = getCurrentTime().seconds;
    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}

function updateTimetoHex() {
    const hours = getCurrentTime().hours.toString(16);
    const minutes = getCurrentTime().minutes.toString(16);
    const seconds = getCurrentTime().seconds.toString(16);
    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}

//Updates the clockDisplay with the current time every second
let initialCounter = setInterval(updateTime,1000);

function updateProgressBarLength() {
  let percentage = (getCurrentTime().seconds / 60).toFixed(2);
  const clockProgressBar = document.querySelector(".clock-progress-bar");
  clockProgressBar.style.width = percentage * 100 + "%";
}

const progressBarCounter = setInterval(updateProgressBarLength, 1000);

let hexInterval;
clockFace.addEventListener("mouseover", () => {
    clearInterval(initialCounter);
    hexInterval = setInterval(updateTimetoHex,
        1000
      );
    
});

clockFace.addEventListener("mouseout", () => {
    clearInterval(hexInterval);
    initialCounter = setInterval(updateTime, 1000
      );
});