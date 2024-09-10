// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext
import './App.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); // Access the login state and logout function

  return (
    <nav className="h-20 w-screen fixed top-0 left-0 flex items-center px-6 shadow-lg z-50">
      <div className="flex items-center space-x-4 mt-4">
        <img
          src="data:image/jpeg;base64,/..." // Replace with your logo
          alt="Logo"
          className="h-14 border rounded-full border-transparent"
        />
        <span className="text-white text-2xl font-bold">SecurePass</span>
      </div>

      <ul className="flex justify-end space-x-14 flex-grow h-full items-center mt-8 mr-10">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
        <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
        <li><Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
        <li><Link to="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
        <li><Link to="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
      </ul>

      <div className="flex items-center space-x-8 mt-10">
        {isLoggedIn ? (
          <>
            <button
              onClick={logout}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Logout
            </button>
            <img
              src="data:image/png;base64,..."
              alt="User"
              className="h-10 w-10 rounded-full"
            />
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
