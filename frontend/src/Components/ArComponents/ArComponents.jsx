
import { useState } from "react";
import axios from 'axios'

function ArComponents() {
  const [showAR, setShowAR] = useState(false);
  const [analytics, setAnalytics] = useState({
    totalScans: 0,
    avgTime: 0,
    uniqueUsers: 0,
  });

  const handleScan = async () => {
    setShowAR(true);

    // Simulate time spent
    const timeSpent = Math.floor(Math.random() * 10) + 5;

    // Record scan (call backend)
    await axios.post("http://localhost:8000/api/scan", {
      timeSpent,
    });

    // Fetch updated analytics
    const res = await axios.get("http://localhost:8000/api/getscan");
    setAnalytics(res.data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex flex-col items-center justify-start">
      <h1 className="text-4xl font-bold text-center text-gray-800 mt-10 mb-6">
        Experience Print Come to Life
      </h1>

      <button
        onClick={handleScan}
        className="bg-purple-600 text-white px-6 py-3 cursor-pointer rounded-xl hover:bg-purple-700 transition duration-300"
      >
        Scan QR Code
      </button>

      {showAR && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="w-[300px] h-[300px] bg-white shadow-lg rounded-lg flex items-center justify-center">

            <iframe
              src="https://threejs.org/examples/#webgl_geometry_cube"
              className="w-full h-full rounded-lg"
              title="AR Demo"
            ></iframe>
          </div>

          
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 cursor-pointer">
            Buy Now
          </button>
        </div>
      )}

      {/* Analytics Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Campaign Analytics</h2>
        <p className="text-gray-600"> Total Scans: {analytics.totalScans}</p>
        <p className="text-gray-600"> Avg Time Spent: {analytics.avgTime} sec</p>
        <p className="text-gray-600"> Unique Users: {analytics.uniqueUsers}</p>
      </div>
    </div>
  );
}

export default ArComponents;
