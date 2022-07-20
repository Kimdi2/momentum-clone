const title = document.querySelector(".hello h1"); //like css form

function handleTitleClick() {
  if (title.style.color !== "blue") {
    title.style.color = "blue";
  } else {
    title.style.color = "black";
  }
  console.log(title.style.color);
}

function handleMouseEnter() {
  title.innerText = "mouse is here";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
