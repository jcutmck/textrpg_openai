const storyEl = document.getElementById("story");
const inputEl = document.getElementById("input");

let scene = "You are standing at the entrance of a dark cave. A cold wind blows.";

function appendToStory(text) {
  storyEl.innerText += `\n\n${text}`;
  storyEl.scrollTop = storyEl.scrollHeight;
}

async function submitAction() {
  const userInput = inputEl.value.trim();
  if (!userInput) return;
  appendToStory(`> ${userInput}`);
  inputEl.value = "";

  const prompt = `
You are an AI GM for narrative text-based rpg game. The player is in this scene: "${scene}"
They do: "${userInput}"

Respond with 4 possible short outcomes.
Format: 1) ..., 2) ..., 3) ..., 4) ...
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
      temperature: 0.8
    })
  });

  const data = await response.json();
  const output = data.choices[0].message.content;

  // Extract and pick random outcome
  // Split by numbered list format: "1)", "2)", "3)" etc.
const options = output
  .split(/\n?\s*\d\)\s+/)
  .map(s => s.trim())
  .filter(Boolean);

// Choose a random one
const picked = options.length > 0
  ? options[Math.floor(Math.random() * options.length)]
  : output;

  appendToStory(picked);
  scene = picked; // optionally use picked as the new scene context
}