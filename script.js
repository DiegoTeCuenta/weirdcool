
const subjects = [
  "A black man dressed as a police officer wearing clown pants",
  "An old woman with a third eye and golden teeth",
  "A punk teenager with holographic tattoos",
  "A baby in a business suit floating midair",
  "A woman in a wedding dress made of smoke",
  "A bodybuilder with butterfly wings and high heels",
  "A goth girl holding a fishbowl full of stars",
  "A blind man playing a piano on fire",
  "A street vendor with a mechanical arm and balloons",
  "A boy with a TV for a head",
  "A tired office worker with a glowing spine",
  "An astronaut with dreadlocks in a tutu",
  "A soldier crying glitter",
  "A samurai made of mirrors",
  "A female cyborg wearing vintage 1940s fashion",
  "A drag queen with robotic limbs and angel wings",
  "A young Latino skater boy with four eyes",
  "An elder monk made of sand",
  "A girl with no face but glowing hands",
  "A smiling mortician in a pink tuxedo",
  "A man with a birdcage instead of a torso",
  "A child riding a cloud shaped like a dragon",
  "A hooded figure made entirely of butterflies",
  "A female firefighter covered in vines",
  "A mailman with octopus legs"
];

const actions = [
  "juggling memories", "dancing through time", "arguing with ghosts",
  "playing chess with shadows", "reading a book made of fog",
  "eating dreams with a spoon", "skating on clouds", "sewing invisible clothes",
  "painting emotions on walls", "screaming into jars", "watering plants made of fire",
  "floating backward", "taming lightning", "singing in Morse code",
  "teleporting between mirrors", "whistling storms", "combing the wind",
  "balancing soap bubbles", "whispering to statues", "knitting galaxies",
  "riding a bike made of bones", "drinking moonlight", "charging a smartphone with laughter",
  "yelling at floating clocks", "doing yoga with shadows"
];

const locations = [
  "on a floating highway", "in an abandoned shopping mall", "at the bottom of a lake of feathers",
  "on the roof of a moving train", "inside a never-ending hallway", "beneath a frozen waterfall",
  "on a deserted film set", "in a room that breathes", "inside a glass elevator going sideways",
  "on a balcony over a jungle of eyes", "in a supermarket during a snowstorm",
  "on a subway full of mannequins", "in a flooded church", "under a giant disco ball in the desert",
  "in a laundromat on Mars", "on a playground that defies gravity", "in a karaoke bar run by ghosts",
  "on a cloud shaped like a hand", "in a basement with shifting walls",
  "on a spiral staircase that never ends"
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
