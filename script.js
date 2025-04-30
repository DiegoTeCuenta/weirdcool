
const subjects = [
  "A jellyfish", "A robot", "A tiger", "A ghost", "A phoenix", "A raccoon", "A violin", "A snail",
  "A frog prince", "A glowing astronaut", "A llama in a suit", "A ballerina skeleton", "A plant with eyes",
  "A cat with 3 tails", "A cake-shaped UFO"
];

const actions = [
  "juggling stars", "drinking tea", "flying upside down", "riding a bicycle", "baking cupcakes",
  "swimming in a pool of marshmallows", "floating in a soap bubble", "sipping coffee", "dancing with shadows",
  "reading invisible books", "painting the sky", "whistling symphonies", "arguing with mirrors",
  "collecting dreams", "skipping through portals", "balancing planets", "melting clocks", "sewing clouds",
  "spinning reality", "translating moonlight", "building thoughts", "brushing fog", "kissing comets",
  "combing thunder", "murmuring prophecies"
];

const locations = [
  "on a neon-lit bridge", "in the middle of a mirror maze", "in a melted city", "through a moonlit forest",
  "on Mars", "inside a ticking clock", "on a foggy alleyway", "in a cathedral", "at the bottom of a lava lake",
  "inside a snow globe", "in a room where gravity breaks", "under a rain of candy", "in a floating library",
  "beneath an aurora", "on a deserted carnival", "on top of a cloud pyramid", "in a surreal metro station",
  "in a looped dimension", "on a holographic highway", "inside a dreaming whale"
];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const subject = getRandomItem(subjects);
  const action = getRandomItem(actions);
  const location = getRandomItem(locations);
  const prompt = `${subject} ${action} ${location}, cinematic lighting, film grain, analog photo, slightly overexposed, soft contrast, rich color tones.`;
  document.getElementById("prompt-text").innerText = prompt;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("prompt-text").innerText;
  navigator.clipboard.writeText(text);
  alert("Prompt copiado al portapapeles!");
});
