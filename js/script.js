let dayOfWeek, month, day, year, hours, minutes, seconds;

dayOfWeek = document.getElementsByClassName("day");
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
  const m = now.getMonth() + 1;
  const yyyy = now.getFullYear();
  const hh = now.getHours().toString().padStart(2, '0');
  const mm = now.getMinutes().toString().padStart(2, '0');
  const ss = now.getSeconds().toString().padStart(2, '0');


  month.innerText = m;
  day.innerText = dd;
  year.innerText = yyyy;


  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;
}, 500);
