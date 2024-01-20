import { motion } from 'framer-motion';
import React, { useState } from "react";

function Main(){
  let accountName = localStorage.getItem('current user')
  const [withdraw, setWithdraw] = useState('')
  const [deposit, setDeposit] = useState('')
  const [balance, setBalance] = useState(JSON.parse(localStorage.getItem(accountName)).balance)

  function setBalWithdraw(){
    let o = JSON.parse(localStorage.getItem(accountName))
    setBalance(balance - parseInt(withdraw))
    o.balance = balance
    localStorage.setItem(accountName, JSON.stringify(o))
    console.log(o)
  }

  function setBalDeposit(){
    setBalance(balance + parseInt(deposit))
  }

  function _setWithdraw(e){
    setWithdraw(e.target.value)
    
  }

  function _setDeposit(e){
    setDeposit(e.target.value)
  }
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-screen h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 flex justify-center items-center font-roboto">

      
        <div className="bg-black bg-opacity-40 sm:rounded-xl p-14 flex justify-center items-center flex-col text-white shadow-xl translate-y-10 sm:w-96">
          <h2 className="text-3xl mb-8">Your Account: {accountName}</h2>
          <p>Balance: {balance}</p>

          <div className=" mt-5">
            <div className="flex flex-col">
              <h3>Deposit</h3>
              <input className="rounded-md text-black" value={deposit} onChange={_setDeposit} ></input>
              <button className="bg-black opacity-50 rounded-md mt-2" onClick={setBalDeposit}>Deposit</button>
            </div>

            <div className="flex flex-col mt-5">
              <h3>Withdraw</h3>
              <input className="rounded-md text-black" value={withdraw} onChange={_setWithdraw}></input>
              <button className="bg-black opacity-50 rounded-md mt-2" onClick={setBalWithdraw}>Withdraw</button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
      
    );
}

export default Main;