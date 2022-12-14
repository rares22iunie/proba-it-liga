const mongoose = require("mongoose");

const MemesSchema = new mongoose.Schema({
  description: {
    type: String,
  },
});

const Memes = mongoose.model("Memes", MemesSchema);

module.exports = Memes;
