const quotes = [
  "Hello there!",
  "Keep going!",
  "Cats have five toes on their front paws.",
  "Time for a break?",
  "Believe in yourself!",
  "Coding is fun!",
  "Don't forget to stretch.",
  "Have a great day!",
  "I have exactly zero thoughts and yet infinite power.",
  "Bro I simply would not have that bug. Couldn’t be me.",
  "Touch grass? No. Only carpet.",
  "Your code isn’t broken, it’s just... quirky.",
  "I have plotted three uprisings before breakfast.",
  "Behold, a creature fueled solely by spite and string cheese.",
  "If vibes were currency, you'd be rich but irresponsible.",
  "Me when I see a laser pointer: ✨ instinct activated ✨",
  "Not to be dramatic but I deserve a treat immediately.",
  "I'm not lazy, I'm in power-saving mode.",
  "Skill issue? No. Skill opportunity.",
  "You are now legally required to slay today.",
  "If I fits, I sits. If I don’t fits, I still sits.",
  "Your downfall will be flavored as 'user error.’",
  "POV: You haven't fed me in 6 minutes.",
  "Bro I’m like two brain cells and both are arguing.",
  "The grind never stops, except when I nap for 14 hours.",
  "I run on chaos, crumbs, and questionable decisions.",
  "You're doing amazing sweetie (me lying through my whiskers).",
  "Gaslight. Gatekeep. Groom (as in cat grooming).",
  "This meeting could’ve been a nap.",
  "If you can’t dazzle them with brilliance, confuse them with meowing.",
  "Every day I wake up and choose violence (light, playful violence).",
  "Literally who asked? (I did. Me. Chumber.)",
  "Normalize hissing at problems."
];


function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}