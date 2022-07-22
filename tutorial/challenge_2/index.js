const body = document.body;
function windowColorChanger() {
  let width = window.innerWidth;
  body.classList.remove("yellow", "purple", "blue");
  if (width < 800) {
    // body.classList.remove("yellow", "purple");
    body.classList.add("blue");
  } else if (width < 1200) {
    // body.classList.remove("yellow", "blue");
    body.classList.add("purple");
  } else {
    // body.classList.remove("blue", "purple");
    body.classList.add("yellow");
  }
}

windowColorChanger(); // 처음 실행시 width에 따른 배경색상을 주기 위해.
window.addEventListener("resize", windowColorChanger);
