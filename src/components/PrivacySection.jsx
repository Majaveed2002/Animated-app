import React from 'react'

export default function PrivacySection() {
  return (
    <div className='h-screen bg-white flex justify-center items-center'>
        <div className='text-center'>
          <h3 className='text-black font-spaceGrotesk text-xl'>We take privacy seriously</h3>
          <h1 className='text-black font-semibold text-4xl mt-2 mb-2 '>Before you get started</h1>
          <p className='text-black font-serif mt-4 font-normal text-xl'>"We won't share your answers with anyone (and won't ever tell <br /> you which friends said what about you)"</p>
          <p className='mt-4 mb-4 text-black font-spaceGrotesk text-xl'>with love, <span>Team ahead</span> </p>
          <div>
          <button className='bg-black p-3 rounded-3xl w-[120px] text-white font-serif'>Start a test</button>
        </div>
        <p className='text-black mt-4 font-spaceGrotesk '>Take only 5 minutes</p>
        </div>
        
    </div>
  )
}
