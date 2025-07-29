const express = require("express");
const router = express.Router();
const ChatMessage = require("../models/ChatMessage");

// GET messages for a specific screen
router.get("/:screenType/:screenId", async (req, res) => {
  const { screenType, screenId } = req.params;
  console.log(
    `[CHAT] GET mensagens para: screenType=${screenType}, screenId=${screenId}`
  );
  try {
    const messages = await ChatMessage.find({ screenType, screenId }).sort({
      timestamp: 1,
    });
    console.log(`[CHAT] Mensagens encontradas:`, messages.length);
    res.json(messages);
  } catch (err) {
    console.error("[CHAT] Erro ao buscar mensagens:", err);
    res.status(500).json({ error: "Erro ao buscar mensagens." });
  }
});

// POST a new message
router.post("/", async (req, res) => {
  const { screenType, screenId, username, message } = req.body;
  if (!screenType || !screenId || !username || !message) {
    return res.status(400).json({ error: "Dados incompletos." });
  }
  try {
    const newMsg = new ChatMessage({ screenType, screenId, username, message });
    await newMsg.save();
    res.status(201).json(newMsg);
  } catch (err) {
    res.status(500).json({ error: "Erro ao salvar mensagem." });
  }
});

module.exports = router;
