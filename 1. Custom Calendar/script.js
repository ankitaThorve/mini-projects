const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // console.log({ year }, { month }, { firstDay }, { lastDate });

  calendarDays.innerHTML = "";
  monthYear.innerText = `${date.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += '<div class="empty"></div>';
  }

  for (let d = 1; d <= lastDate; d++) {
    const today = new Date();
    const isToday =
      d === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth();

    calendarDays.innerHTML += `<div class="${isToday ? "today" : ""}">${d}</div>`;
  }
}
renderCalendar();
