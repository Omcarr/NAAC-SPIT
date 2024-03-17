import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMinus, FaPlus } from 'react-icons/fa';

function ScrollDown({ customContent, isOpen, openBar , children }) {
  return (
    <motion.div
      className={`w-[23rem] bg-zinc-700 ${isOpen ? 'bg-slate-700' : 'bg-slate-950'}`}
      animate={{ height: isOpen ? '200px' : '45px', background: isOpen
        ? 'linear-gradient(to bottom, #1f2933 40px, #374151 40px, #4b5563 200px)'
        : 'linear-gradient(to bottom, #1f2933 40px, #374151 40px, #ffffff 200px)' }}
    >
      <div className='flex justify-between overflow-hidden'>
      <div className={`font-extrabold mt-2 ml-2 text-m `}>{customContent}</div>
      <div className=''>
        {isOpen ? (
          <FaMinus
            onClick={openBar}
            style={{ fontSize: '1em', margin: '2px' }}
            className='mt-2 mr-2'
          />
        ) : (
          <FaPlus
            onClick={openBar}
            style={{ fontSize: '1em' }}
            className='mt-3 mr-2'
          />
        )}
      </div>
      </div>
      {isOpen && (
      <div className='m-3'>
      {children}
      </div>
  )}

    </motion.div>
  );
}
export default ScrollDown;