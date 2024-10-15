import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Keep error state

  // Fetch users and shipments from local storage (mock API)
  useEffect(() => {
    setLoading(true);

    try {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const storedShipments = JSON.parse(localStorage.getItem('shipments')) || [];

      setUsers(storedUsers);
      setShipments(storedShipments);
    } catch (err) {
      console.error('Error fetching data:', err); // Log the error for debugging
      setError('Failed to fetch data. Please try again later.'); // Set error message
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle deleting a user
  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(user => user.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
    }
  };

  // Handle shipment status update
  const handleShipmentUpdate = (shipmentId, status) => {
    const updatedShipments = shipments.map(shipment => 
      shipment.id === shipmentId ? { ...shipment, status } : shipment
    );
    setShipments(updatedShipments);
    localStorage.setItem('shipments', JSON.stringify(updatedShipments)); // Save updated shipments to local storage
  };

  if (loading) return <Loader />; // Display loading spinner

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* Display error message if any */}
      {error && (
        <div className="bg-red-200 text-red-800 p-4 rounded mb-6">
          {error}
        </div>
      )}

      {/* User Management Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <table className="w-full table-auto mb-4">
          <thead>
            <tr className="text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Shipment Management Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Shipments</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="p-2">Tracking ID</th>
              <th className="p-2">Status</th>
              <th className="p-2">Estimated Delivery</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map(shipment => (
              <tr key={shipment.id}>
                <td className="p-2">{shipment.trackingID}</td>
                <td className="p-2">{shipment.status}</td>
                <td className="p-2">{shipment.estimatedDelivery}</td>
                <td className="p-2">
                  <select
                    value={shipment.status}
                    onChange={(e) => handleShipmentUpdate(shipment.id, e.target.value)}
                    className="border rounded-md p-2"
                  >
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Delayed">Delayed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
