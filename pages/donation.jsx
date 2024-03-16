// donation.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const Donation = () => {
  const [amount, setAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationStatus, setDonationStatus] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      // Simulating API call to process donation
      await makeDonation(amount);
      setDonationStatus('success');
    } catch (error) {
      setDonationStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const makeDonation = async (amount) => {
    // Simulated API call, replace with actual donation processing logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve();
        } else {
          reject(new Error('Failed to process donation. Please try again later.'));
        }
      }, 2000); // Simulating a 2-second delay
    });
  };

  return (
    <div className="container">
      <Header />
      <main>
        <h1>Make a Donation</h1>
        <p>Your contribution helps us continue our mission. Thank you for your support!</p>
        
        {/* Donation form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Donation Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            value={amount}
            onChange={handleAmountChange}
            required
            disabled={isProcessing}
          />
          <button type="submit" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Donate Now'}
          </button>
        </form>

        {/* Donation status */}
        {donationStatus === 'success' && (
          <p className="success">Thank you for your generous donation!</p>
        )}
        {donationStatus === 'error' && (
          <p className="error">Failed to process donation. Please try again later.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
