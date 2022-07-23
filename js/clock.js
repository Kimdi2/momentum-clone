const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(function, 5000); // 두번째 인자(5000ms)마다 function 호출
// setTimeout(function, 5000); // 두번째 인자(5000ms) 후 function 한번 호출
getClock(); //setInterval 에서 1초 뒤에 실행되기 때문에 처음 실행을 보여주기 위한 함수 실행
setInterval(getClock, 1000);
