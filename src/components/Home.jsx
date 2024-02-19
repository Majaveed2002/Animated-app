import React,{useRef} from 'react'
import gsap from 'gsap'
import { FaStar } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function Home() {

  const home = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".image",{x:150, duration:2,delay:5,ease:'elastic'},{x:0,duration:1,delay:5,ease:'elastic'})
    .fromTo('.home-left',{y:-150,duration:1,ease:'bounce'},{y:0,duration:1,ease:'bounce'})
    .fromTo('.logo',{y:-50,duration:1,ease:'bounce'},{y:0,duration:1,ease:'bounce'})
  },{scope:home})


  return (
    <div  ref={home} className='h-screen bg-white'>
        <div className="w-full flex justify-evenly items-center mt-1 pt-3 pb-3">
          <div className="logo">
          <IoLogoSnapchat size={45} className='logo' />
          </div>
          <ul className="flex justify-between items-center gap-6">

            <li className="text-black font-spaceGrotesk list-none">Emotions</li>
            <li className="text-black font-spaceGrotesk list-none">Manifesto</li>
            <li className="text-black font-spaceGrotesk list-none">Self-awarness test</li>
            <li className="text-black font-spaceGrotesk list-none">Work With Us</li>
          </ul>
          <div>
          <button className='bg-black text-slate-100 p-2 rounded-lg text-center  pl-3 pr-3'>Download app</button>
          </div>
        </div>
        <div className='flex justify-around bg-slate-200  h-[90%] w-[85%] rounded-3xl m-auto '>
          <div  className='w-[40%] flex flex-col justify-center home-left'>
            <h3 className='text-black text-lg font-spaceGrotesk'>Ahead app</h3>
            <h1 className='text-black text-[45px] font-bold leading-tight font-spaceGrotesk'>Master your life <br/> by mastering <br/> emotions </h1>
            <div className='flex justify-between items-center mt-5 w-[400px] gap-3'>
              <img className='w-[150px]' src='https://res.cloudinary.com/daqedhqtx/image/upload/v1708272786/o1qufb2n2fyarppidmgl.png' alt='app-logo' />
              <div className='text-black font-spaceGrotesk w-[300px]'>
                <div className='flex gap-1'>
                <FaStar size={25} color='gold' />
                <FaStar size={25} color='gold' />
                <FaStar size={25} color='gold' />
                <FaStar size={25} color='gold' />
                <FaStar size={25} color='gold' />
                </div>
                100+ AppStore reviews
              </div>
            </div>
          </div>
          <div className='w-[40%]  flex justify-center items-center'>
            <img  src="https://res.cloudinary.com/daqedhqtx/image/upload/f_auto,q_auto/bl3jsilqbcnmn9lapwxx" alt="phone-img" className='w-[350px] image' />
          </div>
        </div>
    </div>
  )
}
