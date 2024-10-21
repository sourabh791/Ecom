import React, { useState } from 'react';
import axios from 'axios';
import './Subscribe.css';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/subscribe', { email });
      setMessage('Subscription successful!');
    } catch (error) {
      setMessage('Subscription failed.');
    }
  };

  return (
    <div className="subscribe-container">
      <h2>Subscribe to our newsletter</h2>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="subscribe-message">{message}</p>}
    </div>
  );
};

export default Subscribe;
