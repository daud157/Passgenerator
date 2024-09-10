// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider
import Navbar from './Navbar';
import Home from './Home'
import  About from './About'
import Contact from './Contact'
import Login from './Login';
import Signup from './Signup';
import Services from './Services';


function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
