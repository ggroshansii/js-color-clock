

const clockDisplay = document.querySelector(".clock-display");




//Obtains the current time in hours:minutes:seconds and logs it to the clockDisplay element
function getCurrentTime() {
  const today = new Date();
  let seconds;
  today.getSeconds() < 10 ? seconds = "0" + today.getSeconds() : seconds = today.getSeconds();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + seconds;
  clockDisplay.textContent = time;
}

//Updates the clockDisplay with the current time every second
setInterval(getCurrentTime, 1000);


function updateProgressBarLength() {
    const today = new Date();
    let percentage = (today.getSeconds() / 60).toFixed(2);
    const clockProgressBar = document.querySelector(".clock-progress-bar");
    console.log(clockProgressBar);
    clockProgressBar.style.width = (percentage * 100) + "%";
}

setInterval(updateProgressBarLength, 1000);


function convertToHex(hours, minutes, seconds) {
    time = hours.toString(16) + ":" + minutes.toString(16) + ":" + seconds.toString(16)
}

