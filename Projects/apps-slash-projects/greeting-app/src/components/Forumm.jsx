import React, { useState, createContext, useContext } from "react";

const name = createContext();

function Forumm(){
    const [input, setInput] = useState('');

    function onChange(e){
        setInput(e.target.value)
    }

    return(
        <div>
          <forum>
            <input onChange={onChange} value={input} className="border-2 border-black rounded-md" placeholder="Name"></input>
          </forum>  
        </div>
    )
}

export default Forumm;