const affirmationChallenge = {
  confidence: [
    "I am confident and capable.",
    "I believe in my abilities.",
    "I embrace challenges with courage.",
    "I trust in my decisions and embrace uncertainty.",
    "I am fearless in the face of challenges and setbacks."
  ],
  gratitude: [
    "I am grateful for the abundance in my life.",
    "I appreciate the small joys that surround me.",
    "I acknowledge the kindness of others.",
    "I am thankful for the love and support of my friends and family.",
    "I appreciate the beauty of nature that surrounds me."
  ],
  positivity: [
    "I radiate positivity and attract positive energy.",
    "I choose to focus on the bright side of life.",
    "I am a magnet for happiness.",
    "I approach each day with a positive mindset and an open heart.",
    "I am a source of inspiration and positivity for those around me."
  ]
};

// Function to select a random index from an array
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

console.log(`Today's Affirmations`)

for (const key in affirmationChallenge) {
  const category = affirmationChallenge[key];
  const randomIndex = getRandomIndex(category);
  console.log(`Selected Theme: ${key}`);
  console.log(`Affirmation: ${category[randomIndex]}`);
  console.log('---');
}
