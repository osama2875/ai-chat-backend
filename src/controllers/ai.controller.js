const aiService = require("../services/ai.service");

module.exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({ reply: "Kuch likho to sahi 🙂" });
    }

    const aiReply = await aiService(message);
    res.json({ reply: aiReply });
  } catch (error) {
    console.error(error);
    res.json({
      reply: "AI thoda busy hai, baad me try karo 🙂",
    });
  }
};
