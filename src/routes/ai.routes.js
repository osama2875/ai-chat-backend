const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

// simple chat endpoint
router.post("/chat", aiController.chat);

module.exports = router;
