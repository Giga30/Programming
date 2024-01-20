import React from "react"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

function Hero(){
    return (
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 flex flex-col justify-center items-center gap-40">
            <p className="text-white animate-fade-up animate-ease-out font-bold text-4xl">Welcome To Giga Bank!</p>
            <div className="flex-row flex">
                <Link to="/login" className="bg-black text-white opacity-45 flex justify-center items-center w-20 p-2 rounded-md mr-3">Log In</Link>
                <Link to="/signup" className="bg-black opacity-45 text-white flex justify-center items-center w-20 p-2 rounded-md">Sign Up</Link>
            </div>
        </div>
    </motion.div>
        
    );
}

export default Hero