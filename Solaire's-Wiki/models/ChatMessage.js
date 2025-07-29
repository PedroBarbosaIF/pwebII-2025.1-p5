const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  screenType: { type: String, enum: ["boss", "place"], required: true },
  screenId: { type: String, required: true }, // ex: 'nito', 'anorlondo'
  username: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
