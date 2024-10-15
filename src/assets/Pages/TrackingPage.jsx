// src/pages/TrackingPage.js

import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const TrackingPage = () => {
  const [trackingID, setTrackingID] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    // Basic validation for tracking ID
    if (trackingID.trim() === '' || trackingID.length < 5) {
      setError('Please enter a valid Tracking ID (at least 5 characters).');
      setLoading(false);
      return;
    }

    // Mock API request for tracking info
    setTimeout(() => {
      // Replace this with actual API call
      const mockData = {
        id: trackingID,
        status: 'In Transit',
        estimatedDelivery: 'October 15, 2024',
        lastLocation: 'New York, NY',
      };
      setTrackingInfo(mockData);
      setLoading(false);
    }, 2000);
  };

  const handleClear = () => {
    setTrackingID('');
    setTrackingInfo(null);
  };

  return (
    <>
    <Navbar/>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Track Your Delivery</h2>
        <form onSubmit={handleTrack} className="space-y-4">
          <div>
            <label className="block text-gray-700">Tracking ID</label>
            <input
              type="text"
              value={trackingID}
              onChange={(e) => setTrackingID(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your tracking ID"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded shadow"
            disabled={loading}
          >
            {loading ? 'Tracking...' : 'Track'}
          </button>
        </form>

        {error && (
          <div className="mt-4 text-red-500">{error}</div>
        )}

        {trackingInfo && (
          <div className="mt-6">
            <h3 className="text-lg font-bold">Tracking Information</h3>
            <p><strong>Status:</strong> {trackingInfo.status}</p>
            <p><strong>Estimated Delivery:</strong> {trackingInfo.estimatedDelivery}</p>
            <p><strong>Last Location:</strong> {trackingInfo.lastLocation}</p>
            <button
              className="mt-4 w-full bg-gray-300 text-black py-2 rounded shadow"
              onClick={handleClear}
            >
              Clear Tracking Info
            </button>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default TrackingPage;
