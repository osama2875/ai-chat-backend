const aiService = require("../src/services/ai.service");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    if (!message) {
      return res.json({ reply: "Kuch likho to sahi 🙂" });
    }

    const reply = await aiService(message, history || []);
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply: "AI thoda busy hai, baad me try karo 🙂",
    });
  }
};
