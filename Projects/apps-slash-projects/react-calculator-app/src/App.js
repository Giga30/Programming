import './index.css';
import { useState } from 'react';

function BtnComp({btnClass, eventFunc, content}){
  return (
    <button className={btnClass} onClick={eventFunc}>{content}</button>
  )
}

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '+']
  const [error, setError] = useState('')
  const [sequence, setSequence] = useState('')

  const clear = function(){
    setSequence('')
  }

  const calc = function(){
    if(sequence == ''){
      setError("The equation cannot be empty")
    }else if(sequence[sequence.length-1] == '+' || sequence[sequence.length-1] == '-'){
      setError("The equation cannot end with a \"+\" or a \"-\"")
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
        {arr.map(function(elem, i){
          return <BtnComp btnClass={`div${i+1}`} eventFunc={event} content={elem}></BtnComp>
        })}
        <button className='div13' onClick={calc}>=</button>
        <button className='div14' onClick={clear}>C</button>
      </div>
      <p>{error}</p>
    </div>
    
  );
}

export default App;

