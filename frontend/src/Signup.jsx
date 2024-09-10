import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Using axios for API calls

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [caseSensitivity, setCaseSensitivity] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  // const ui ='hello';
  const navigate = useNavigate();

  // Password generation logic
  const generatePassword = () => {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (caseSensitivity) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setConfirmPassword(generatedPassword);
  };

  // Handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const userData = {
      username,
      email,
      password,
    };

    try {
      // Call the signup API
      const response = await axios.post('http://localhost:3000/api/auth/signup',userData );
      setMessage(response.data.message);
      navigate('/'); // Redirect to the home page on successful signup
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error during signup');
    }
  };

  return (
    <div className=" text-white flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-black w-screen h-screen">
      <div className=" p-10 rounded-2xl shadow-2xl w-full max-w-lg space-y-8 h-6/7 mt-20 px-4 border border-sm">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block text-white text-sm font-bold mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 bg-white"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-green-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-600 bg-white"
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Password Generator Options */}
          <div>
            <h3 className="text-lg font-bold text-white">Password Generator Options</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <span className="text-gray-700">Length:</span>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  min="8"
                  max="32"
                  className="w-20 px-2 py-1 bg-transparent border-b-2 text-white focus:outline-none focus:border-green-500"
                />
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeSpecialChars}
                  onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                />
                <span className="text-white">Include Special Characters</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                <span className="text-white">Include Numbers</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={caseSensitivity}
                  onChange={() => setCaseSensitivity(!caseSensitivity)}
                />
                <span className="text-white">Case Sensitive</span>
              </label>
              <button
                type="button"
                onClick={generatePassword}
                className="text-white border border-white py-2 px-4 rounded-3xl hover:bg-indigo-950 hover:text-white transition duration-300"
              >
                Generate Password
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white border border-white px-6 rounded-3xl hover:bg-indigo-950 hover:text-white transition duration-300 w-full"
            >
              Sign Up
            </button>
          </div>

          {message && <p className="text-center text-red-500">{message}</p>} {/* Display message */}

          <p className="text-center text-white text-sm">
            Already have an account?{' '}
            <a href="/Login" className="text-white hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
