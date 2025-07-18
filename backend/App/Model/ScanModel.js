const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  location: String,
  timeSpent: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ScanModel = mongoose.model("Scan", scanSchema);
module.exports = ScanModel;
