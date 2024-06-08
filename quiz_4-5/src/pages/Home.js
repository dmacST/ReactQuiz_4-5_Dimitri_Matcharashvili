import React from 'react';
import './App.css';
import iphoneImage from './iphone12.jpg'; // Make sure to add the image to the public or src folder

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="medium-text">iPhone 12 and iPhone 12 Mini</h1>
        <h2 className="big-text">Blast Past Fast.</h2>
        <p className="small-text">
          A superpowerful chip. 5G speed. An advanced dual-camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all - in two great sizes.
        </p>
        <img src={iphoneImage} alt="iPhone 12" className="iphone-image"/>
      </div>
    </div>
  );
}

export default App;
