import './index.css';
import { useState } from 'react';

function App() {
  const [error, setError] = useState('')
  const [sequence, setSequence] = useState('')

  const clear = function(){
    setSequence('')
  }

  const calc = function(){
    if(sequence == ''){
      setError("The equation cannot be empty")
    }else if(sequence[sequence.length-1] == '+' || sequence[sequence.length-1] == '-'){
      setError("The equation cannot end with \"a\" + or a \"-\"")
    }else{
      setError("")
      setSequence(eval(sequence))
    }
  }

  const event = function(i){
    setSequence(sequence + i.target.textContent);
  };

  return (
    <div className='container'>
      <p>Result:</p>
      <p className='sequence'>{sequence}</p>
      <div className='parent'>
        <button className='div1' onClick={event}>1</button>
        <button className='div2' onClick={event}>2</button>
        <button className='div3' onClick={event}>3</button>
        <button className='div4' onClick={event}>4</button>
        <button className='div5' onClick={event}>5</button>
        <button className='div6' onClick={event}>6</button>
        <button className='div7' onClick={event}>7</button>
        <button className='div8' onClick={event}>8</button>
        <button className='div9' onClick={event}>9</button>
        <button className='div10' onClick={event}>0</button>
        <button className='div11' onClick={event}>-</button>
        <button className='div12' onClick={event}>+</button>
        <button className='div13' onClick={calc}>=</button>
        <button className='div14' onClick={clear}>C</button>
      </div>
      <p>{error}</p>
    </div>
    
  );
}

export default App;
