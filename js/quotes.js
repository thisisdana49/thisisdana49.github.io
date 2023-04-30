const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
    author: "J.K. Rowling,",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: " Oscar Wilde",
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "I CAN DO WHATEVER I WANT!",
    author: "Dana Cho",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor( Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;