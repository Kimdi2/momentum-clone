const quotes = [
  {
    quote: "No pain, No gain",
    author: "Benjamin Franklin",
  },
  {
    quote: "The die is cast",
    author: "Julius Caesar",
  },
  {
    quote: "I was never less alone than when by myself",
    author: "Edward Gibbon",
  },
  {
    quote: "Seeing is believing",
    author: "Thomas Fuller",
  },
  {
    quote: "Only I can change my life, no one can do it for me",
    author: "Carol Burnett",
  },
  {
    quote: "This too shall pass away",
    author: "Abrahan Lincoln",
  },
  {
    quote: "When in doubt, choose change",
    author: "Lily Leung",
  },
  {
    quote: "Life is unfair, get used to it",
    author: "Bill Gates",
  },
  {
    quote: "I find the harder I work, the more luck I have",
    author: "Thomas Jefferson",
  },
  {
    quote: "United we stand, divided we fail",
    author: "John Dickinson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
/*
  Math.floor() -> 내림
  Math.ceil() -> 올림
  Math.round() -> 반올림
  Math.random() -> 0 ~ 1 미만의 랜덤한 수 도출
  quotes.length -> qoutes Array의 배열 수
 */
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
