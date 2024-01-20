import React from "react"
import { Link } from "react-router-dom"

function NavBar(){
 return (
    <div className="absolute top-0 w-full h-16 bg-sky-500 flex justify-between">
        <p className="font-bold my-auto ml-6">Your Brand Name</p>
        <div className="flex items-center gap-2 mr-6">
            <Link to='/cart' className="bg-slate-700 p-1 rounded-md">Cart</Link>
            <Link to='/' className="bg-slate-700 p-1 rounded-md">Products</Link>
        </div>
    </div>
 )
}

export default NavBar