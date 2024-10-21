import React from 'react';
import './DeliveryInformation.css';

function DeliveryInformation() {
  return (
    <div className="delivery-container">
      <header className="delivery-header">
        <h1>Delivery Information</h1>
      </header>
      <div className="delivery-content">
        <h2>Delivery Locations</h2>
        <p>We offer delivery to the following states in India:</p>
        <div className="delivery-locations">
          <h3>Available States:</h3>
          <ul>
            <li>Maharashtra</li>
            <li>Delhi</li>
            <li>Karnataka</li>
            <li>Uttar Pradesh</li>
            <li>Tamil Nadu</li>
            <li>West Bengal</li>
            <li>Gujarat</li>
            <li>Rajasthan</li>
            <li>Bihar</li>
            <li>Kerala</li>
            {/* Add more states as needed */}
          </ul>
        </div>
        <div className="delivery-rates">
          <h3>Delivery Rates</h3>
          <table>
            <thead>
              <tr>
                <th>State</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maharashtra</td>
                <td>₹150.00</td>
              </tr>
              <tr>
                <td>Delhi</td>
                <td>₹180.00</td>
              </tr>
              <tr>
                <td>Karnataka</td>
                <td>₹200.00</td>
              </tr>
              <tr>
                <td>Uttar Pradesh</td>
                <td>₹220.00</td>
              </tr>
              <tr>
                <td>Tamil Nadu</td>
                <td>₹170.00</td>
              </tr>
              <tr>
                <td>West Bengal</td>
                <td>₹190.00</td>
              </tr>
              <tr>
                <td>Gujarat</td>
                <td>₹160.00</td>
              </tr>
              <tr>
                <td>Rajasthan</td>
                <td>₹210.00</td>
              </tr>
              <tr>
                <td>Bihar</td>
                <td>₹200.00</td>
              </tr>
              <tr>
                <td>Kerala</td>
                <td>₹180.00</td>
              </tr>
              {/* Add more rates as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="delivery-footer">
        <p>Thank you for choosing our delivery service. For any questions, please contact us.</p>
      </footer>
    </div>
  );
}

export default DeliveryInformation;
