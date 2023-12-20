import React, { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  let uniqueId = 0;

  const updateInput = function(e){
    setInput(e.target.value)
  }

  const updateEvents = function(){
    if(input != ''){
      setEvents([...events, input]);
      setError('')
    }else{
      setError('Please enter something in the field')
    }
    
  }
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col gap-14">
      <div className="w-96">
        <p className="text-red-500">{error}</p>
        <input className="bg-slate-200 p-3 w-5/6 rounded-l-md" placeholder="To Do" onChange={updateInput}></input>
        <button className="p-3 bg-sky-400 w-1/6 rounded-r-md font-bold text-sky-900" onClick={updateEvents}>+</button>
      </div>

      <div className="w-screen h-4/6 flex justify-center items-center flex-col">
        <div className="border-b-2 border-gray-400 w-4/6 h-16 text-2xl flex items-center bg-white rounded-t-lg">
          <h2 className="ml-4">To Do:</h2>
        </div>
        <div className="w-4/6 h-full bg-white rounded-b-lg flex justify-start items-center flex-col pt-5 overflow-y-scroll">
          <table className="w-full flex justify-center items-center flex-col gap-1">
            {events.map(function(e){
              return <tr key={uniqueId++} className="w-5/6 h-11 bg-slate-400 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">{e}</tr>
            })}
          </table>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
