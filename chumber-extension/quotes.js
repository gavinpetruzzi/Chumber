// quotes.js

// Array of quotes
const quotes = [
  "Hello there!",
  "Keep going!",
  "Cats have five toes on their front paws.",
  "Time for a break?",
  "Believe in yourself!",
  "Coding is fun!",
  "Don't forget to stretch.",
  "Have a great day!"
];

// Function to get a random quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}