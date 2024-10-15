const DelivererDashboard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Deliverer Dashboard</h2>

      {/* Available Delivery Requests Section */}
      <div className="mb-6">
        <h3 className="font-semibold">Available Delivery Requests</h3>
        {/* Replace with actual delivery requests from state or props */}
        <ul className="list-disc pl-5">
          <li>
            Delivery Request 1
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ml-2">
              Accept
            </button>
          </li>
          <li>
            Delivery Request 2
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition duration-300 ml-2">
              Accept
            </button>
          </li>
        </ul>
      </div>

      {/* Submit Confirmation Files Section */}
      <div>
        <h3 className="font-semibold">Submit Confirmation Files</h3>
        <input type="file" className="border border-gray-300 rounded-md p-2" />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 mt-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default DelivererDashboard;
