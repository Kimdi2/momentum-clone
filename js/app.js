//prompt is old function
const age = parseInt(prompt("How old are you?"));

// AND
// true && true === true
// true && false === false
// false && true === false
// false && false === false
// OR
// true || true === true
// true || false === true
// false || true === true
// false || false === false

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young to drink");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
