const title = document.querySelector(".hello h1"); //like css form

function handleTitleClick() {
  if (title.style.color !== "blue") {
    title.style.color = "blue";
  } else {
    title.style.color = "black";
  }
  console.log(title.style.color);
}

title.addEventListener("click", handleTitleClick);
