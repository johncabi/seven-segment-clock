let hours, minutes, seconds;

hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");

setInterval(() => {
  const now = new Date();
  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();
  
  if (hh < 10) {
    hours.innerText = `0${hh}`
  }
  else {
    hours.innerText = hh;
  }
  
  if (mm < 10) {
    minutes.innerText = `0${mm}`
  }
  else {
    minutes.innerText = mm;
  }
  
  if (ss < 10) {
    seconds.innerText = `0${ss}`
  }
  else {
    seconds.innerText = ss;
  }
}, 1000);
