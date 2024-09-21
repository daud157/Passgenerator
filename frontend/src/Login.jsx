import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // Access the login function
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save token
      login(); // Update global state to reflect login
      navigate('/'); // Redirect to home
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-black w-screen h-screen">
      <div className="border p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-white">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="mt-12">
          <div className="mb-12">
            <label className="block text-white text-sm font-bold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-transparent border-b-2 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-12">
            <label className="block text-white text-sm font-bold" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-transparent border-b-2 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center  ml-60">
            <Link to="/forgot-password" className="text-sm text-blue-400 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <div className="flex justify-between items-center mt-8 mb-12 w-full">
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-1/2 ml-24 border rounded-3xl">
              Login
            </button>
            
          </div>
          <p className="text-center text-white text-sm">
           Dont have an account?
            <a href="/Signup" className="text-white hover:underline ml-2 text-lg">
             Signup
            </a>
          </p>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
