// /index.js
require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // Parse JSON body data
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));  // Enable CORS

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
