import React from 'react';
import './PaymentInformation.css';

function PaymentInformation() {
  return (
    <div className="payment-information-container">
      <header className="payment-header">
        <h1>Payment Information</h1>
      </header>
      <div className="payment-content">
        <section className="payment-methods">
          <h2>Accepted Payment Methods</h2>
          <ul>
            <li>Credit/Debit Cards</li>
            <li>PayPal</li>
            <li>Net Banking</li>
            <li>Cash on Delivery</li>
            <li>UPI (Unified Payments Interface)</li>
          </ul>
        </section>
        <section className="bank-details">
          <h2>Bank Account Details</h2>
          <table>
            <thead>
              <tr>
                <th>Bank</th>
                <th>Account Number</th>
                <th>IFSC Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State Bank of India</td>
                <td>1234567890</td>
                <td>SBI0001234</td>
              </tr>
              <tr>
                <td>HDFC Bank</td>
                <td>0987654321</td>
                <td>HDFC0001234</td>
              </tr>
              {/* Add more bank details as needed */}
            </tbody>
          </table>
        </section>
      </div>
      <footer className="payment-footer">
        <p>For any questions or additional information, please contact our support team.</p>
      </footer>
    </div>
  );
}

export default PaymentInformation;
