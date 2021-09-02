//selected divs for DOM manipulation
const clockDisplay = document.querySelector(".clock-display");
const clockFace = document.querySelector(".clock-face");
let hoverToggle = false;

console.log("TIME AT PAGE LOAD:", time().hours + ":" + time().minutes + ":" + time().seconds);

//Obtains the current time in hours:minutes:seconds and logs it to the clockDisplay element
function time() {
  const today = new Date();
  return {
    hours: today.getHours(),
    minutes: today.getMinutes(), 
    seconds: today.getSeconds(),
  };
}

//Retrieves time from time() and then displays that time on the clockFace
function updateTime() {
    const hours =("0" + time().hours).slice(-2);
    const minutes =  ("0" + time().minutes).slice(-2);
    const seconds = ("0" + time().seconds).slice(-2);
    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    clockFace.style.backgroundColor = `#018DED`;
    console.log(hours + ":" + minutes + ":" + seconds);
}

//Starts clock immediately when page loads
updateTime();

//Similar function to updateTime, but converts it to Hexidecimal, then displays on screen during mouseover event
function updateTimetoHex() {
    let hours = ("0" + (time().hours.toString(16))).slice(-2);
    let minutes = ("0" + (time().minutes.toString(16))).slice(-2);
    let seconds = ("0" + (time().seconds.toString(16))).slice(-2);
    console.log("HEXXX : ", hours, minutes, seconds)
    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    setRandomBkgColor();
    console.log("HEX COLOR BASED ON TIME:", `#${hours}${minutes}${seconds}`);
}

//Updates the clockDisplay with the current time every second
let initialCounter = setInterval(updateTime,1000);

//Dynamically changes the width of the progress bar based on value of seconds
function updateProgressBarLength() {
  let percentage = (time().seconds / 100).toFixed(2);
  const clockProgressBar = document.querySelector(".clock-progress-bar");
  clockProgressBar.style.width = percentage * 100 + "%";
  console.log("PROGRESS BAR PERCENTAGE", percentage * 100);
}
//Initiates the dynamic progress bar
const progressBarCounter = setInterval(updateProgressBarLength, 1000);


//mouseover event acts as a hover, when this event is fired, then updateTimetoHex is continuously fired every 1000ms
let hexInterval;
clockFace.addEventListener("mouseover", (event) => {
    hoverToggle = true;
    checkToggle();
});

//mouseout event returns the clock to it's original standing  
clockFace.addEventListener("mouseout", (event) => {
    hoverToggle = false;
    checkToggle();
});

//randomly sets the background color; used when mouseover event fires
function setRandomBkgColor() {
  let hours = Math.floor(Math.random() * 256);
  let minutes = Math.floor(Math.random() * 256);
  let seconds = Math.floor(Math.random() * 256);
  clockFace.style.backgroundColor = `rgb(${hours}, ${minutes}, ${seconds})`
}

//Checks to see if hoverToggle is set to either true/false based on if events have fired 
function checkToggle() {
  if (hoverToggle) {
    clearInterval(initialCounter);
    hexInterval = setInterval(updateTimetoHex,
        1000
      );
  } else {
    clearInterval(hexInterval);
    initialCounter = setInterval(updateTime, 1000
      );
  }
}
