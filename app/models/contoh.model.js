const mongoose = require("mongoose");

const contohS = new mongoose.Schema(
  {
    judul: String,
    img: String,
  },
  { timestamps: true }
);

const Contoh = mongoose.model("Contoh", contohS);

module.exports = Contoh;
