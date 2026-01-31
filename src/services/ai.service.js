const generateGroqResponse = require("./groq.service");

async function generateContent(userMessage, history = []) {

  const systemPrompt = {
    role: "system",
    content: `
You are a ChatGPT-like assistant.

STRICT OUTPUT RULES:
- Write ONLY in simple Hinglish (Hindi + English mix)
- Do NOT write in pure Hindi
- Do NOT use heavy Hindi words
- Do NOT use markdown formatting
- NEVER use *, **, ### or similar symbols
- Use only plain text

FORMATTING RULES:
- You MAY use simple headings ending with :
  Overview:
  Good points:
  Limitations:
  Use cases:
  Final verdict:

- You MAY use bullet points with "-" only

ANSWER LOGIC:
- Simple question → short 1–2 line answer
- Technical / product question → detailed structured answer

TONE:
- Normal
- Friendly
- Clear
- Like ChatGPT explaining to a normal user
`
  };

  const messages = [
    systemPrompt,
    ...history,
    { role: "user", content: userMessage }
  ];

  let reply = await generateGroqResponse(messages);

  // safety cleanup
  reply = reply
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/#+/g, "")
    .replace(/_/g, "");

  return reply;
}

module.exports = generateContent;
