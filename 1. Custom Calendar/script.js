const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  console.log({ year }, { month }, { firstDay }, { lastDate });

  calendarDays.innerHTML = "";
  monthYear.innerText = `${date.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  
}
renderCalendar();
