import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          {/* Company Information */}
          <div>
            <h4 className="text-xl font-bold">SecurePass</h4>
            <p className="text-sm mt-2">Building Solutions for the Future.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="/" className="text-blue-400 hover:text-blue-500 transition">Home</a>
            <a href="/about" className="text-blue-400 hover:text-blue-500 transition">About Us</a>
            <a href="/services" className="text-blue-400 hover:text-blue-500 transition">Services</a>
            <a href="/contact" className="text-blue-400 hover:text-blue-500 transition">Contact</a>
          </div>
        </div>

        {/* Social Media & Policies */}
        <div className="flex justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" className="hover:text-blue-400 transition" aria-label="Facebook">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.twitter.com" className="hover:text-blue-400 transition" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com" className="hover:text-blue-400 transition" aria-label="LinkedIn">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>

          {/* Terms and Policies */}
          <div className="text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} SecurePass. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
