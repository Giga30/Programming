import NavBar from "../components/NavBar";
import { motion } from 'framer-motion';
import React, { useState } from "react";

function LogIn() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  function updatePass(e){
    setPass(e.target.value);
  }

  function updateUser(e){
    setUser(e.target.value);
  }

  // Upload the password, username and the balance to Local Storage and set a criteria
  function storageSave(){
    if(user == ''){
      setError("Please enter something in the username field")
      console.log('error')
    }
    else if(pass == ''){
      setError("Please enter something in the password field")
    }
    else if(localStorage.getItem(user) == null){
      setError("This account doesn't exist")
    }
    else{
      
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className="w-screen h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 flex justify-center items-center font-roboto">

    
        <div className="bg-black bg-opacity-40 sm:rounded-xl p-14 flex justify-center items-center flex-col text-white shadow-xl translate-y-10 w-full sm:w-96">
          <h2 className="text-3xl mb-8">Log In</h2>
          <form className="self-start w-full h-full">
            <p className="text-xs text-red-600">{error}</p>
            <label htmlFor="name" type="text" className="block text-xl">Username:</label>
            <input id="name" className="p-2 rounded-md w-full mt-1 text-black" placeholder="Enter your username" value={user} onChange={updateUser}></input>
    
            <label htmlFor="pass" type="password" className="block text-xl mt-7">Password:</label>
            <input id="pass" className="p-2 rounded-md w-full mt-1 text-black" placeholder="Enter your password" value={pass} onChange={updatePass}></input>
    
            <button className="w-full h-12 bg-slate-900 mt-11 rounded-md font-bold hover:scale-105 hover:shadow-2xl shadow-md duration-150" onClick={storageSave}type="button">Submit</button>
          </form>
        </div>
      </div>
    </motion.div>
    
  );
}
  
export default LogIn;