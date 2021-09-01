

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


function getSecondsPercentage() {
    const today = new Date();
    console.log((today.getSeconds() / 60).toFixed(2));
}

setInterval(getSecondsPercentage, 1000);