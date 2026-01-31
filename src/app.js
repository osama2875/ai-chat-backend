console.log("ENV CHECK:", process.env.GOOGLE_GEMINI_KEY);

const express = require("express");
const cors = require("cors");

const aiRoutes = require("./routes/ai.routes");

const app = express();

// ===== MIDDLEWARE =====
app.use(cors()); // frontend allow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== HEALTH CHECK =====
app.get("/", (req, res) => {
  res.send("✅ Server is live!");
});

// ===== ROUTES =====
app.use("/ai", aiRoutes);

module.exports = app;
