const ScanModel = require('../Model/ScanModel');

const createScan = async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const { timeSpent } = req.body;

    const scan = new ScanModel({
      ip,
      userAgent,
      location: "India", 
      timeSpent,
    });

    await scan.save();
    res.status(201).json({ message: "Scan recorded successfully" });
  } catch (error) {
    console.error("POST /scan error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getScan = async (req, res) => {
  try {
    const scans = await ScanModel.find();
    const totalScans = scans.length;
    const avgTime =
      scans.reduce((sum, s) => sum + s.timeSpent, 0) / totalScans || 0;
    const uniqueUsers = new Set(scans.map((s) => s.ip)).size;

    res.status(200).json({
      totalScans,
      avgTime: Math.round(avgTime),
      uniqueUsers,
    });
  } catch (error) {
    console.error("GET /stats error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createScan,
  getScan,
};
