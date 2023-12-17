import React, { useState, useRef, useEffect} from 'react';
import './index.css';

function App() {
  const inputFocusRef = useRef();

  useEffect(() =>{
    const { current } = inputFocusRef;
  }, [])
  

  return (
    <canvas ref={inputFocusRef} onClick={focusInput} className='canv'>

    </canvas>
  );
}

export default App;
