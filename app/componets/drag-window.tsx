"use client"

import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface AppProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function DraggableWindow( { onClose, children }: AppProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="absolute min-h-60 min-w-60 bg-foreground-01 rounded border-2" 
      ref={nodeRef}>
        <div className="grid bg-foreground-02 gap-4 p-2" style={{ gridTemplateColumns: '2fr 1fr' }}> 
          <div className="border rounded-2xl bg-background min-h-5 px-5"> 
          </div>
            <button onClick={onClose}
            className="bg-foreground-03 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                <img 
                className='max-h-5 max-w-5'
                src="https://cdn-icons-png.flaticon.com/128/10490/10490302.png"></img>
            </button>
      </div>
        {children}
        </div>
    </Draggable>
  );
}