// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensures that usernames are unique
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that emails are unique
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the current date when a new user is created
  },
});

module.exports = mongoose.model('User', userSchema);
