import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    const fetchReferralCode = async () => {
      try {
        const response = await axios.get('/api/user/referral', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setReferralCode(response.data.referralCode);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReferralCode();
  }, []);

  return (
    <div>
      <h2>Your Referral Code</h2>
      {referralCode ? (
        <p>Share this code with your friends: <strong>{referralCode}</strong></p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Referral;
