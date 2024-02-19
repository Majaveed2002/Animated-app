import React from 'react'
import { FaSnapchatGhost,FaLeaf  } from "react-icons/fa";
import { PiFlowerFill } from "react-icons/pi";

export default function MeetAppSection() {
  return (
    <div className='h-screen bg-blue-100 w-[95%] rounded-3xl m-auto flex gap-20'>
        <div className='mt-[10%] ml-[10%]'>
          <div className=''>
            <p className='text-gray-800 font-spaceGrotesk text-md '>Built out of frustration</p>
            <h1 className='text-black text-5xl font-sans font-bold'>Meet the ahead app</h1>
          </div>
          <div className=' mt-[15%] flex justify-around'>
            <FaSnapchatGhost size={100} color='gray' />
            <FaLeaf size={50} color='lightgreen' className='self-end' />
          </div>
        </div>
        <div className='self-center h-[70%] flex flex-col w-[40%]'>
        <PiFlowerFill size={60} color='lightgreen' className='self-end' />
        <div className='h-full flex flex-col justify-center gap-3 items-start mb-6'>
        <h3 className='text-gray-800 text-lg font-serif'>A personalized pocket coach that provides bite<br/>-sized, science-driven tools to boost emotional <br/> intelligence.
          </h3>
          <h3 className='text-gray-800 text-lg font-serif'>Think of it as a pocket cheerleader towards a <br/> better, more fulfilling</h3>
        </div>
        </div>
    </div>
  )
}
