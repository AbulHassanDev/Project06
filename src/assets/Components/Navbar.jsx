import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(true), 150));
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(false), 150));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Paths for both desktop and mobile menus, including the submission page
  const paths = ['/', '/tracking', '/services',  '/about'];

  return (
    <nav className="bg-gray-800 shadow-lg transition-opacity duration-500">
      <div className="container mx-auto max-w-screen-xl flex justify-between  items-center p-4">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <img src="src/assets/Logo.jpg" alt="Logo" className="h-8 inline-block mr-2" />
          Logo
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex space-x-8">
          {paths.map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`text-white transition duration-300 ease-in-out transform hover:scale-105 hover:underline ${location.pathname === path ? 'underline font-semibold' : ''}`}
            >
              {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2).replace('-', ' ')}
            </Link>
          ))}
        </div>

        {/* CTA Links */}
        <div className="hidden md:flex space-x-4">
          <ul className='flex gap-4'>
            <li>
              <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out hover:scale-105">Sign Up</Link>
            </li>
            <li>
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className="flex items-center text-white">
                  <VscAccount className='h-6 w-6 justify-center' />
                </button>

                {isOpen && (
                  <div className="absolute right-0 bg-white text-black shadow-lg rounded-md mt-2 w-48 z-10 transition ease-in-out duration-200">
                    <Link to="/myprofile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Sign In</Link>
                    <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
                    <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">Help</Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={`md:hidden transition-transform duration-300 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="bg-blue-700 px-4 pt-2 pb-4 space-y-2">
            {paths.map((path, index) => (
              <Link
                key={index}
                to={path}
                className={`block text-white transition duration-300 ease-in-out transform hover:scale-105 hover:underline ${location.pathname === path ? 'underline font-semibold' : ''}`}
              >
                {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2).replace('-', ' ')}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Link to="/login" className="block bg-white text-blue-600 text-center px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105">Login</Link>
              <Link to="/signup" className="block bg-blue-800 text-white text-center px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">Sign Up</Link>
              <Link to="/help" className="block text-white ">Help</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
