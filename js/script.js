let dayOfWeek, month, day, year, hours, minutes, seconds;

dayOfWeek = document.getElementsByClassName("day");
// console.log(dayOfWeek[0].outerText);
month = document.getElementById("month");
day = document.getElementById("day");
year = document.getElementById("year");

hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");

setInterval(() => {
  const now = new Date();

  const dOW = now.getDay();

  switch (dOW) {
    case 0:
      dayOfWeek[0].style.color = "#FF0000";
      break;

    case 1:
      dayOfWeek[1].style.color = "#FF0000";
      break;

    case 2:
      dayOfWeek[2].style.color = "#FF0000";
      break;

    case 3:
      dayOfWeek[3].style.color = "#FF0000";
      break;

    case 4:
      dayOfWeek[4].style.color = "#FF0000";
      break;

    case 5:
      dayOfWeek[5].style.color = "#FF0000";
      break;

    case 6:
      dayOfWeek[6].style.color = "#FF0000";
      break;
  }

  const dd = now.getDate();
  const m = now.getMonth();
  const yyyy = now.getFullYear();

  if (m < 10) {
    month.innerText = `0${m}`;
  } else {
    month.innerText = m;
  }

  if (dd < 10) {
    day.innerText = `0${dd}`;
  } else {
    month.innerText = dd;
  }

  if (m < 10) {
    month.innerText = `0${m}`;
  } else {
    month.innerText = m;
  }

  day.innerText = dd;
  year.innerText = yyyy;

  const hh = now.getHours();
  const mm = now.getMinutes();
  const ss = now.getSeconds();

  if (hh < 10) {
    hours.innerText = `0${hh}`;
  } else {
    hours.innerText = hh;
  }

  if (mm < 10) {
    minutes.innerText = `0${mm}`;
  } else {
    minutes.innerText = mm;
  }

  if (ss < 10) {
    seconds.innerText = `0${ss}`;
  } else {
    seconds.innerText = ss;
  }
}, 500);
