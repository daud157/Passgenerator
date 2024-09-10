import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-center w-screen">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            About SecurePass
          </h1>
          <p className="text-lg mb-6">
            SecurePass is dedicated to providing top-notch digital security solutions. Our mission is to empower individuals and businesses to protect their online presence with ease and confidence.
          </p>
          <p className="text-lg mb-6">
            Founded by a team of cybersecurity experts, SecurePass has grown into a trusted platform for password management. We understand the importance of safeguarding your personal and professional information in an increasingly digital world.
          </p>
          <p className="text-lg mb-6">
            Our platform combines advanced encryption techniques with a user-friendly interface, making it accessible to everyone, from tech-savvy professionals to those new to digital security. We are committed to continuous innovation, ensuring that our users always have access to the best tools available.
          </p>
          <p className="text-lg mb-12">
            At SecurePass, we believe that security should never be a barrier to convenience. That's why we strive to provide solutions that are both secure and easy to use, giving you peace of mind without compromising on accessibility.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <div className="w-full max-w-2xl p-4 rounded-2xl shadow-2xl bg-gray-800">
            <img
              src="https://st3.depositphotos.com/10080544/35998/i/450/depositphotos_359988224-stock-photo-shield-icon-cyber-security-digital.jpg"
              alt="About SecurePass"
              className="w-full h-auto object-cover rounded-lg opacity-90"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
