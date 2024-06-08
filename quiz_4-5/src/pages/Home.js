import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Adjust if Home.css is in src/pages
import iphoneImage from '../img/iphone.png'; // Adjust the path according to the actual location of iphone.png

function Home() {
  const navigate = useNavigate();

  const handleGoToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-title">iPhone 12 and iPhone 12 Mini</h1>
        <h2 className="text-main">Blast Past Fast.</h2>
        <p className="text-desc">
          A superpowerful chip.<br />
          5G speed.<br />
          An advanced dual-camera system.<br />
          A Ceramic Shield front that's tougher than any smartphone glass.<br />
          And a bright, beautiful OLED display.<br />
          iPhone 12 has it all - in two great sizes.
        </p>
        <p className="text-price">From $24.95/mo. for 24mo. or $599 before trade-in*</p>
        <button className="buy-button">Buy</button>
        <button className="gallery-button" onClick={handleGoToGallery}>
          Go To Gallery
        </button>
        <div className="image-container">
          <img src={iphoneImage} alt="iPhone 12" className="iphone-image" />
        </div>
      
      </div>
    </div>
  );
}

export default Home;