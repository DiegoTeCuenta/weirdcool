
const subjects = [
  "a phoenix covered in glitter", "a two-headed ballerina", "a ghost wearing scuba gear",
  "a robot with butterfly wings", "a jellyfish in a trench coat", "a skeleton painting flowers",
  "a dragon made of origami", "a detective raccoon with a briefcase", "a cloud shaped like a crocodile",
  "a mime floating upside down", "a giant eye with legs", "a cactus riding a bicycle",
  "a scarecrow with neon lights", "a moon-shaped jellybaby", "a cube of gelatin singing opera",
  "a violin made of soap", "a floating toaster with sunglasses", "a wolf in a spacesuit sipping tea",
  "a flying goldfish with LED fins", "a snail wearing a crown of moss", "a puppet made of clouds",
  "a disco ball with legs", "a magician frog with no shadow", "a mirror reflecting a face that isn't yours",
  "a toaster ghost with burnt offerings", "a paper tiger that blinks", "a cat made of clock gears",
  "a librarian octopus with glasses", "a skeleton holding balloons underwater", "a candle with eyes that follow you"
];

const actions = [
  "swimming in a pool of marshmallows", "dancing inside a glass cube", "drifting through space",
  "laughing in a room full of mirrors", "reading a book made of smoke", "eating stars from the sky",
  "melting under neon lights", "hiding in a bathtub of glitter", "levitating above a city",
  "sleeping inside a ticking clock", "teleporting through puddles", "playing chess with shadows",
  "painting invisible murals", "howling at television static", "floating inside a soap bubble",
  "trading memories with a pigeon", "dancing in slow motion rain", "transmitting thoughts via spoons",
  "bouncing on invisible trampolines", "speaking backwards to reflections", "collecting echoes in a jar",
  "baking dreams into pies", "singing lullabies to electricity", "translating silence into colors",
  "juggling planets while asleep", "typing with feathers in the wind", "camouflaging as wallpaper",
  "spinning without touching the ground", "rearranging the stars with tweezers", "boiling time in a teacup"
];

const locations = [
  "in a town where everything is miniature", "on a flying subway", "in a candy-colored desert",
  "in the ruins of a digital temple", "on the roof of a haunted aquarium", "inside an infinite library",
  "in a laundromat that echoes dreams", "on a bridge made of bones", "in the middle of a festival of shadows",
  "on a street where time flows backward", "inside a phone booth filled with fog",
  "on a balcony overlooking forgotten worlds", "in a museum of extinct colors",
  "inside a vending machine that sells whispers", "beneath a bridge made of piano keys",
  "in the eye of a sleeping whale", "on a chessboard suspended in midair",
  "at the base of a staircase to nowhere", "in a room wallpapered with stars",
  "on a carousel that only spins at midnight", "inside an abandoned planetarium",
  "at a bus stop for ghosts", "in a forest that breathes fog", "on the roof of a silent opera house",
  "in a city where shadows don't match", "inside a glass cube floating in ink",
  "in a garden where clocks grow", "under a lamppost that whispers",
  "inside a mirror with no reflection", "on a lake made of shattered glass"
];

function generatePrompt() {
  const s = subjects[Math.floor(Math.random() * subjects.length)];
  const a = actions[Math.floor(Math.random() * actions.length)];
  const l = locations[Math.floor(Math.random() * locations.length)];
  const full = `A ${s} ${a} ${l}, cinematic lighting, film grain, analog photo, slightly overexposed, soft contrast, rich color tones.`;
  document.getElementById("prompt-text").innerText = full;
}

function copyPrompt() {
  const text = document.getElementById("prompt-text").innerText;
  navigator.clipboard.writeText(text);
  alert("Prompt copied to clipboard!");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
