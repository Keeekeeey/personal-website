"use client"

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

export default function App( {onClose}: {onClose: () => void}) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="absolute border min-h-60 min-w-60 bg-foreground-01" 
      ref={nodeRef}>
        <div className="basis-1/4 border rounded p-4 bg-foreground-02 grid grid-cols-2 gap-4"> 
        <div></div>
            <button onClick={onClose}
            className="bg-foreground-03 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                <img 
                className='max-h-5 max-w-5'
                src="https://cdn-icons-png.flaticon.com/128/10490/10490302.png"></img>
            </button>
      </div>
        </div>
    </Draggable>
  );
}