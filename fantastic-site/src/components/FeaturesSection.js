import React from 'react';
import { FaRegLightbulb, FaRegStar, FaRegHeart } from 'react-icons/fa';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <div className="features-container">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <FaRegLightbulb className="feature-icon" />
          <h3>Innovative Ideas</h3>
          <p>We bring fresh ideas to the table every day.</p>
        </div>
        <div className="feature-card">
          <FaRegStar className="feature-icon" />
          <h3>Top Quality</h3>
          <p>We deliver top-notch products that exceed expectations.</p>
        </div>
        <div className="feature-card">
          <FaRegHeart className="feature-icon" />
          <h3>Customer Care</h3>
          <p>We are dedicated to serving our customers with heart.</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
