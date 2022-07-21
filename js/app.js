const h1 = document.querySelector(".hello h1"); //like css form

function handleH1Click() {
  if (h1.style.color !== "blue") {
    h1.style.color = "blue";
  } else {
    h1.style.color = "black";
  }
  console.log(h1.style.color);
}

function handleMouseEnter() {
  h1.innerText = "mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI!");
}

function handleWindowOnline() {
  alert("ALL GOOOOOOD");
}

h1.addEventListener("click", handleH1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
