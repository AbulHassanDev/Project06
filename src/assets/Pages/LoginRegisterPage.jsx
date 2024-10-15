import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginRegisterPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simulated users for demonstration
    const simulatedUsers = [
      { email: 'admin@gamil.com', password: '123456', role: 'sender' },
      { email: 'deliverer@example.com', password: 'password', role: 'deliverer' }
    ];

    const loggedInUser = simulatedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      // Store user data in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      
      // Redirect to UserDashboard
      navigate('/dashboard'); // Redirecting to UserDashboard
    } else {
      setErrorMessage('Unauthorized user');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
        )}

        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember Me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Link to Signup Page */}
        <div className="mt-6 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline transition duration-300">
            Create an Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginRegisterPage;
