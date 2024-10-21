import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Ensure this path is correct

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setSuccess('Sign-up successful! You can now log in.');
        setError(''); // Clear any previous error messages
      }
    } catch (err) {
      // Enhanced error handling
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(err.response.data.error || 'An error occurred on the server');
      } else if (err.request) {
        // No response was received
        setError('No response received from the server');
      } else {
        // Something else happened
        setError('An unexpected error occurred');
      }
      setSuccess(''); // Clear any previous success messages
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="signup-error">{error}</p>}
        {success && <p className="signup-success">{success}</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
