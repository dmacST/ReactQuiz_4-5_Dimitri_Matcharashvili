import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container">
      <h1 className="medium-text">Gallery</h1>
      <div className="gallery-container">
        {photos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p className="photo-caption">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
