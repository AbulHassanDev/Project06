// src/pages/AccountPage.js

import { Link } from 'react-router-dom';

const AccountPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Manage Your Account</h2>
        <p className="text-lg text-gray-600 mb-4">
          Welcome! You can log in to your existing account or create a new account.
        </p>
        
        <Link to="/login" className="block bg-blue-500 text-white py-2 rounded mb-2">
          Login
        </Link>
        <Link to="/signup" className="block bg-blue-700 text-white py-2 rounded">
          Sign Up
        </Link>
      </div>
    </section>
  );
};

export default AccountPage;
