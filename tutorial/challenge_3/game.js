const maxNumber = document.querySelector(".maxNumber");
const inputNumber = document.querySelector(".inputNumber");
const playGame = document.querySelector("form");
const match = document.querySelector(".match");
const result = document.querySelector(".result");

function gameStart(event) {
  event.preventDefault();
  const machineNumber = String(Math.round(Math.random() * maxNumber.value));
  match.innerText = `You chose ${inputNumber.value}, the machine chose ${machineNumber}`;
  if (machineNumber === inputNumber.value) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

playGame.addEventListener("submit", gameStart);
