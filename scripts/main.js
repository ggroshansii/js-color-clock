const clockDisplay = document.querySelector(".clock-display");
const clockFace = document.querySelector(".clock-face");

console.log("TIME AT PAGE LOAD:", getCurrentTime().hours + ":" + getCurrentTime().minutes + ":" + getCurrentTime().seconds);

//Obtains the current time in hours:minutes:seconds and logs it to the clockDisplay element
function getCurrentTime() {
  const today = new Date();
  let seconds, hours;
  today.getSeconds() < 10 ? (seconds = "0" + today.getSeconds()) : (seconds = today.getSeconds());
  today.getMinutes() < 10 ? (minutes = "0" + today.getMinutes()) : (minutes= today.getMinutes());
  today.getHours() > 12 ? (hours = today.getHours() - 12) : hours = today.getHours();

  return {
    hours,
    minutes: minutes,
    seconds,
  };
}

function updateTime() {
    const hours = getCurrentTime().hours;
    const minutes = getCurrentTime().minutes;
    const seconds = getCurrentTime().seconds;
    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    clockFace.style.backgroundColor = `#018DED`;
    console.log(hours + ":" + minutes + ":" + seconds);
}

function updateTimetoHex() {
    let hours = getCurrentTime().hours.toString(16);
    let minutes = getCurrentTime().minutes.toString(16);
    let seconds = getCurrentTime().seconds.toString(16);
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;

    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    clockFace.style.backgroundColor = `#${hours}${minutes}${seconds}`;
    console.log("HEX COLOR BASED ON TIME:", `#${hours}${minutes}${seconds}`);
}

//Updates the clockDisplay with the current time every second
let initialCounter = setInterval(updateTime,1000);

function updateProgressBarLength() {
  let percentage = (getCurrentTime().seconds / 60).toFixed(2);
  const clockProgressBar = document.querySelector(".clock-progress-bar");
  clockProgressBar.style.width = percentage * 100 + "%";
  console.log("PROGRESS BAR PERCENTAGE", percentage * 100);
}

const progressBarCounter = setInterval(updateProgressBarLength, 1000);

let hexInterval;
clockFace.addEventListener("mouseover", (event) => {
    clearInterval(initialCounter);
    hexInterval = setInterval(updateTimetoHex,
        1000
      );
});

clockFace.addEventListener("mouseout", (event) => {
    clearInterval(hexInterval);
    initialCounter = setInterval(updateTime, 1000
      );
});