
async function loadData() {
  const response = await fetch('weirdcool_data.json');
  return await response.json();
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("generateBtn").addEventListener("click", async () => {
  const data = await loadData();
  const subject = getRandomItem(data.subjects);
  const action = getRandomItem(data.actions);
  const location = getRandomItem(data.locations);
  const prompt = `${subject} ${action} ${location}, cinematic lighting, film grain, analog photo, slightly overexposed, soft contrast, rich color tones.`;
  document.getElementById("prompt-text").innerText = prompt;
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("prompt-text").innerText;
  navigator.clipboard.writeText(text);
  alert("Prompt copiado al portapapeles!");
});
