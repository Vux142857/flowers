'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 1));
  return (
    <div className="flex items-center border border-black divide-black w-32 text-center">
      <button
        onClick={decrement}
        className="w-1/3 h-full text-2xl py-2 hover:bg-gray-100 flex items-center justify-center"
      >
        <svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 1.5H0.5V0.5H19.5V1.5Z" fill="#121212" />
        </svg>
      </button>
      <div className="w-1/3 h-full text-2xl py-2 border-x-[1px] border-black">{count}</div>
      <button
        onClick={increment}
        className="w-1/3 h-full text-2xl py-2 hover:bg-gray-100 flex items-center justify-center"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 10.5H0.5V9.5H19.5V10.5Z" fill="#121212" />
          <path d="M10.5 0.5V19.5H9.5V0.5H10.5Z" fill="#121212" />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
