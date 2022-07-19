function greetings(name, age = 1) {
  console.log("hello my name is " + name);
  console.log(`I'm ${age} years old.`);
}

greetings("bigPerson");
greetings("kimdi");
// ----------------------------------------------
const player = {
  name: "bigperson",
  sayHello: function (othersName) {
    console.log("hello! " + othersName + ", Nice to meet you.");
  },
};
console.log(player.name);
player.sayHello("kimdi");
