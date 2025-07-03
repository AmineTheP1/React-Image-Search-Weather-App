import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <div className="features">
        <div className="feature">
          <h2>Image Gallery</h2>
          <p>Search and browse through a collection of images.</p>
          <Link to="/gallery">Go to Gallery</Link>
        </div>
        <div className="feature">
          <h2>Weather Information</h2>
          <p>Check the weather conditions for any city.</p>
          <Link to="/weather">Check Weather</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;