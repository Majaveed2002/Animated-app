import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";
import { IoLogoSnapchat } from "react-icons/io";

export default function FooterSection() {
  return (
    <div className='h-screen bg-slate-50'> 
    <h1 className='text-black font-Roboto text-5xl mt-[1%] ml-[4%] font-bold'>Open vacancies</h1>
      <div className='mt-[4%] ml-[4%] flex justify-around items-center'>
        <ul className='bg-yellow-100 p-5 rounded-xl'>
          <h2 className='text-black font-spaceGrotesk text-lg mb-2'>Senior Full-Stack Engineer</h2>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$65-85k, 0.5-1.50% equity share options</li>
        </ul>
        <ul className='bg-yellow-100 p-5 rounded-xl'>
          <h2 className='text-black font-spaceGrotesk text-lg mb-2'>Senior Designer</h2>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$40-55k, 0.25-0.50% equity share options</li>
        </ul>
        <ul className='bg-yellow-100 p-5 rounded-xl'>
          <h2 className='text-black font-spaceGrotesk text-lg mb-2'>Superstar Intern</h2>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$20-15k, 0.5-1.50% equity share options</li>
        </ul>
      </div>
      <hr className='mt-24' />
      <div className='flex flex-col justify-center items-center mt-[2%]'>
        <div className='flex flex-col items-center'>
        <IoLogoSnapchat size={50} color='#7ba7d4' />
          <h1 className='text-blue-600 text-4xl font-Roboto font-semibold'>ahead</h1>
        </div>
        <div className='flex'>
          <p className='text-black font-Roboto text-lg flex items-center  gap-1 mt-2'><span><FaLocationDot/></span>Auguststrabe 26, 10117 Berlin</p>
          <p className='text-black font-Roboto text-lg flex items-center ml-10 gap-1 mt-2 text-center'><span><MdMail/></span>hi@ahead-app.com</p>
        </div>
        <img className='w-[150px] mt-4 mb-2' src='https://res.cloudinary.com/daqedhqtx/image/upload/v1708272786/o1qufb2n2fyarppidmgl.png' alt='app-logo' />
        <p className='text-black font-Roboto text-lg flex items-center  gap-1 mt-2' ><span><BiCopyright/></span>2022 Ahead app. All right reserved</p>
      </div>
    </div>
  )
}
