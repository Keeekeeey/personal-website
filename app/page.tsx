"use client"

import Image from "next/image";
import App from './componets/draggable'
import { useState, useRef } from "react";


export default function Home() {

  const [isVisible, setIsVisible] = useState (false);

  return (
    <div className="w-full h-full">
      <div className="basis-1/4 border rounded p-4 bg-foreground-02 grid grid-cols-2 gap-4"> 
        <div></div>
        <button 
        className="bg-foreground-03 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
          X
        </button>
        {isVisible && (<App  onClose={() => setIsVisible(false)}></App>)}
      </div>
          <div className="basis-2/4 border rounded p-2 bg-foreground-01">
              <div className="p-4 border min-h-120">
                page
                  <div className="grid grid-cols-2 gap-4 border min-h-20">
                    <div className="p-1">
                      <p className="bg-foreground-02 p-1">If you're looking for a problem solver, look no further!</p>
                      words
                      </div>
                    <div>
                      <img
                      src="https://i.pinimg.com/736x/a6/70/62/a67062073c4089ef2b624fa3d411251e.jpg">
                      </img>
                    </div>
                  </div>
                  <div className="min-h-10 border bg-[url(https://i.pinimg.com/1200x/04/c4/99/04c499e22cdf26db8a48f17372b04bb8.jpg)]">
                  </div>
                  <div className="grid grid-cols-2 gap-4 border min-h-20 p-2">
                    <div>
                        <table className="border-collapse border auto-scroll ">
                          <thead>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border p-2">project name</td>
                              <td className="border p-2">links</td>
                            </tr>
                            <tr>
                              <td className="border p-2">project name</td>
                              <td className="border p-2">links</td>
                            </tr>
                            <tr>
                              <td className="border p-2">project name</td>
                              <td className="border p-2">links</td>
                            </tr>
                                                        <tr>
                              <td className="border p-2">project name</td>
                              <td className="border p-2">links</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div className="flex items-center gap-2" >
                      <button 
                        className="bg-foreground-02 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                      </button>
                      <button 
                        className="bg-foreground-02 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="mx-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"></img>
                      </button>
                      <button 
                        onClick={() => {setIsVisible(true)}}
                        className="bg-foreground-03 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          Resume
                      </button>
                    </div>
                  </div>
              </div>
          </div>
        <div className="basis-1/4 border bg-foreground-02">page 03</div>
        
    </div>
    
  );
}
