import React, { useState } from "react";

function Cart({ arr }){

    let total = 0;

    arr.forEach(element => {
        total += element.price
    });

    return (
        <div className="w-screen h-72 bg-green-c mt-12 p-6 overflow-y-scroll">
            <p className="text-white font-bold text-xl">Your Cart</p>
            <p className="mt-2">Total: {total}</p>
            {arr.map((e) =>{
                    return (
                        <div className="w-5/6 h-12 bg-green-b mt-4 pl-4 pr-4 rounded-md flex items-center justify-between">
                          <p className="font-bold">{e.name}</p>
                          <p>Price: {e.price}</p>
                        </div>
                    )
            })}
        </div>
    );
}

export default Cart;