import React, { useState } from 'react';
import Confetti from 'react-confetti';
import './comingsoon.css'; // Import the CSS for styling

const ComingSoon = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      window.location.href = '/home'; // Redirect to home page after confetti
    }, 7000); // Show confetti for 3 seconds
  };

  return (
    <div className="coming-soon-container">
      {showConfetti && <Confetti />}
      <div className="content">
        <h1 className="title">Coming Soon</h1>
        <p className="description">From automation of people processes to creating an engaged and driven culture.</p>
        <div className="email-container">
          <input type="email" placeholder="Please enter your email address" className="email-input" />
          <button className="notify-button">Notify Me</button>
        </div>
        <p className="notify-text">_ Notify me when App is launched _</p>
        <div className="ready-section">
          <p className="ready-text">We are ready! Please visit our website:</p>
          <button className="visit-button" onClick={handleButtonClick}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
