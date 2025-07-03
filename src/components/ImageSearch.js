import React, { useState } from 'react';
import axios from 'axios';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://pixabay.com/api/?key=API_KEY&q=${query}`);
      setImages(response.data.hits);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={searchImages} className="search-form">
        <input
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="image-grid">
        {images.map(image => (
          <div key={image.id} className="image-card">
            <div className="image-info">
              {image.tags} | {image.imageWidth} x {image.imageHeight}
            </div>
            <img 
              src={image.webformatURL} 
              alt={image.tags} 
            />
            <a 
              href={image.pageURL} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="more-details">More Details</button>
            </a>
          </div>
        ))}
      </div>

      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default ImageSearch;
