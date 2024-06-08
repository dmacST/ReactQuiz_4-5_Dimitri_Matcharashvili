import React from 'react';
import './App.css';
import iphoneImage from './img/iphone.png'; // Make sure to add the image to the public or src folder

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-title">iPhone 12 and iPhone 12 Mini</h1>
        <h2 className="text-main">Blast Past Fast.</h2>
        <p className="text-desc">
          A superpowerful chip. 5G speed. An advanced /n
          dual-camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all - in two great sizes.
        </p>
        <p className="text-price">From $24.95/mo. for 24mo. or $599 before trade-in*</p>
        <button className="buy-button">Buy</button>
        <div className="image-container">
          <img src={iphoneImage} alt="iPhone" className="iphone-image" />
        </div>
      </div>
    </div>
  );
}

export default App;
