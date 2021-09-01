


function getCurrentTime() {
  const today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);
}

setInterval(getCurrentTime, 1000);
