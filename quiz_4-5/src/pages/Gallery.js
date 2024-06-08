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
      <h1 className="medium-text" style={{ textAlign: 'center' }}>Gallery</h1>
      <div className="gallery-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <div key={photo.id} className="photo-item" style={{ flex: '0 0 25%', margin: '10px', border: '1px solid grey', padding: '10px', textAlign: 'center' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <p className="photo-caption">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
