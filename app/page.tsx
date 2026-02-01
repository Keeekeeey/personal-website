"use client"

import Image from "next/image";
import App from './componets/draggable'
import { useState, useRef } from "react";


export default function Home() {

  const [isVisible, setIsVisible] = useState (false);

  return (
    <div className="w-full h-full">
      <div className="basis-1/4 border"> 
        <button 
        onClick={() => {setIsVisible(true)}}
        className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
          Save Changes
        </button>
        {isVisible && (<App  onClose={() => setIsVisible(false)}></App>)}
      </div>
          <div className="basis-2/4 border">
              <div className="border min-h-120">
                page
                  <div className="grid grid-cols-3 gap-4 border min-h-20">
                    <div>grid 1</div>
                    <div>grid 2</div>
                    <div>grid 3</div>
                  </div>
                  <div className="min-h-10 border"> spacer</div>
                  <div className="grid grid-cols-2 gap-4 border min-h-20">
                    <div>grid 1</div>
                    <div>grid 2</div>
                  </div>
              </div>
          </div>
        <div className="basis-1/4 border">page 03</div>
        
    </div>
    
  );
}
