
const prompts = [
  "A jellyfish with a top hat juggling stars on a neon-lit bridge.",
  "A robot drinking tea in the middle of a mirror maze.",
  "A tiger made of clouds flying over a melted city.",
  "A ghost riding a bicycle through a moonlit forest.",
  "A phoenix covered in glitter baking cupcakes on Mars.",
  "A detective raccoon swimming in a pool of marshmallows.",
  "A violin made of soap floating down a foggy alleyway.",
  "A snail wearing a crown of moss sipping coffee in a cathedral."
];

document.getElementById("generateBtn").addEventListener("click", () => {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt-text").innerText = randomPrompt;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("prompt-text").innerText;
  navigator.clipboard.writeText(text);
  alert("Prompt copiado al portapapeles!");
});
