const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(function, 5000); // 두번째 인자(5000ms)마다 function 호출
// setTimeout(function, 5000); // 두번째 인자(5000ms) 후 function 한번 호출
getClock(); //setInterval 에서 1초 뒤에 실행되기 때문에 처음 실행을 보여주기 위한 함수 실행
setInterval(getClock, 1000);
//
