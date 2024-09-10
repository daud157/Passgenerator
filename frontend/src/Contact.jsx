import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // You can also add an API call here to send the message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-black w-screen">
      <div className="bg-transparent  border border-sm backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-white text-4xl font-bold text-center text-white mb-10 tracking-wide">
          Get in Touch
        </h2>
        <p className="text-center text-white  mb-8">
          We'd love to hear from you. Whether you have a question, feedback, or just want to chat, drop us a message below!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-full hover:opacity-90 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
