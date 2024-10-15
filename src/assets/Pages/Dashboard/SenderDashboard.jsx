const SenderDashboard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Sender Dashboard</h2>

      {/* Submitted Items Section */}
      <div className="mb-6">
        <h3 className="font-semibold">Submitted Items</h3>
        {/* Replace with actual submitted items from state or props */}
        <ul className="list-disc pl-5">
          <li>Item 1 - Status: In Transit</li>
          <li>Item 2 - Status: Delivered</li>
        </ul>
      </div>

      {/* Track Deliveries Section */}
      <div className="mb-6">
        <h3 className="font-semibold">Track Deliveries</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Track Your Shipments
        </button>
      </div>

      {/* Feedback Section */}
      <div>
        <h3 className="font-semibold">Feedback</h3>
        {/* Replace with actual feedback from user or state */}
        <p>Your feedback helps us improve!</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          View Feedback
        </button>
      </div>
    </div>
  );
};

export default SenderDashboard;
