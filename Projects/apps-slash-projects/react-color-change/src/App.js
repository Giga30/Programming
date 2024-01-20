import './index.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState({
    backgroundColor: 'white'
  });

  const updateColor = function (i) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    setColor({backgroundColor: `rgb(${red}, ${green}, ${blue})`});
    console.log(color.backgroundColor);
}
  return (
    <div className='main' style={color}>
      <div className='container'>
        <h1>Click on the button!</h1>
        <button onClick={updateColor}>Click me!</button>
      </div>
    </div>
    
  );
}

export default App;
