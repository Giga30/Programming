import React from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import Hero from "../pages/Hero";

function Animate(){
    const location = useLocation()
    return(
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/main" element={<Main />} />
        </Routes>
      </AnimatePresence>
      
    )
}

export default Animate