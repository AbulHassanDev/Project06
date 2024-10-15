import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SenderDashboard from './SenderDashboard';
import DelivererDashboard from './DelivererDashboard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [shipmentsCount, setShipmentsCount] = useState(0);
  const [pendingDeliveriesCount, setPendingDeliveriesCount] = useState(0);
  const chartRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (!loggedInUser) throw new Error('User not found');
      setUser(loggedInUser);

      // Example: Fetch dynamic data (this would typically come from an API)
      // Here you would call your API to get the shipment and delivery data
      setShipmentsCount(5); // Replace with API call
      setPendingDeliveriesCount(2); // Replace with API call
    } catch (err) {
      setError(err.message);
    }
  }, []);

  // Chart configuration
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'Septembar', 'Octubar', 'November', 'December'],
          datasets: [
            {
              label: 'Shipments Over Time',
              data: [12, 19, 3, 5, 2],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [chartRef]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!user) {
    return <p className="text-gray-500">Loading user data...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-1/4 h-screen p-4 bg-gray-200">
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="text-blue-600 font-bold  transition duration-200">Dashboard</Link>
            </li>
          
            <li className='hover:bg-slate-100 p-4 rounded-sm transition duration-200'>
              <Link to="/submit-item" className="text-gray-700 hover:bg-slate-100 transition  duration-200">Submit New Item</Link>
            </li>
            
            <li className='hover:bg-slate-100 p-4 rounded-sm transition duration-200'>
              <Link to="/tracking" className="text-gray-700  transition duration-200">Track Shipments</Link>
            </li>
            <li className='hover:bg-slate-100 p-4 rounded-sm transition duration-200'>
              <Link to="/myprofile" className="text-gray-700  transition duration-200">Manage Profile</Link>
            </li>
          
              <li className='hover:bg-slate-100 p-4 rounded-sm transition duration-200'>
                <Link to="/admin" className="text-gray-700  transition duration-200">Admin Panel</Link>
              </li>
            
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-50" role="main" aria-label="User Dashboard">
          <div className="flex items-center mb-4">
            {/* Back Arrow */}
            <button 
              onClick={() => navigate(-1)} 
              className="text-blue-600 hover:text-blue-800 flex items-center"
              aria-label="Go back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>

          {/* E-commerce Style Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-lg rounded-lg p-4 transition duration-200  hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Recent Shipments</h2>
              <p className="text-gray-500">{shipmentsCount} shipments in progress.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 transition duration-200 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Pending Deliveries</h2>
              <p className="text-gray-500">{pendingDeliveriesCount} deliveries awaiting confirmation.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 transition duration-200 hover:shadow-xl">
              <h2 className="text-xl font-semibold mb-2">Account Balance</h2>
              <p className="text-gray-500">$450.00</p>
            </div>
          </div>

          {/* Shipment Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipment Overview</h2>
            <canvas ref={chartRef} aria-label="Shipment chart"></canvas>
          </div>

          {/* User Role-Specific Dashboard */}
          {user.role === 'sender' ? (
            <SenderDashboard />
          ) : user.role === 'deliverer' ? (
            <DelivererDashboard />
          ) : (
            <p className="text-red-500">Unauthorized access!</p>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
