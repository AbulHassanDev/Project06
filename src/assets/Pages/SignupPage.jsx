import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Used for redirecting

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Fetch existing users from local storage (mocking database)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    if (users.find(user => user.email === email)) {
      alert('Email is already registered!');
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    // Save new user to local storage
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now login.');
    navigate('/login'); // Redirect to login after signup
  };

  const handleSocialSignup = (platform) => {
    alert(`Sign up with ${platform} is not implemented yet!`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Signup Form with Border and Shadow */}
      <div className="bg-white border border-gray-300 shadow-lg rounded-md p-8 w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
        <p className="mb-6 text-gray-600 text-center">Create an account to get started!</p>
        
        {/* Email & Name Inputs */}
        <form onSubmit={handleSignupSubmit}>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" type="submit">
            Sign Up
          </button>
        </form>

        <div className='text-center p-2'><p>or</p></div>
        <hr />

        {/* Social Signup Buttons - Flex Row */}
        <div className="flex justify-between space-x-4 mb-6 mt-6">
          <button 
            aria-label="Sign up with Google" 
            className="flex items-center justify-center bg-white text-black p-2 rounded-md shadow hover:bg-slate-100 transition duration-300 w-1/3"
            onClick={() => handleSocialSignup('Google')}
          >
            <FcGoogle className="h-6 w-6" />
          </button>
          <button 
            aria-label="Sign up with Apple" 
            className="flex items-center justify-center bg-white text-black p-2 rounded-md shadow hover:bg-slate-100 transition duration-300 w-1/3"
            onClick={() => handleSocialSignup('Apple')}
          >
            <FaApple className="h-6 w-6" />
          </button>
          <button 
            aria-label="Sign up with Facebook" 
            className="flex items-center justify-center bg-white text-blue-700 p-2 rounded-md shadow hover:bg-slate-100 transition duration-300 w-1/3"
            onClick={() => handleSocialSignup('Facebook')}
          >
            <FaFacebook className="h-6 w-6" />
          </button>
        </div>

        {/* Links for Login */}
        <div className="mt-4 text-gray-600 text-center">
          Already have an account? 
          <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
