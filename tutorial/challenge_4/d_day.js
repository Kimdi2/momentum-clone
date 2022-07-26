const dDayWalker = document.querySelector("h2");

function getDDay() {
  const christmas = new Date(2022, 11, 25) / 1000; // ms -> s
  const date = Date.now() / 1000; // ms -> s
  const dDay = christmas - date;

  const days = String(Math.floor(dDay / 60 / 60 / 24)).padStart(2, "0");
  const hours = String(Math.floor((dDay / 60 / 60) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((dDay / 60) % 60)).padStart(2, "0");
  const seconds = String(Math.floor(dDay % 60)).padStart(2, "0");
  dDayWalker.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(getDDay, 1000);
