import React,{useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import { FaSmileBeam,FaAngry,FaLaughBeam,FaSnapchatGhost   } from "react-icons/fa";
import { TbMoodConfuzedFilled } from "react-icons/tb";
import { ImShocked2 } from "react-icons/im";
import { BsEmojiExpressionlessFill,BsFillEmojiAstonishedFill  } from "react-icons/bs";


export default function EqSection() {
  const eq = useRef(null)

  useGSAP(()=>{
    
     gsap.fromTo('.eq-head',{x:-200,duration:1.5,ease:'power1.out'},{x:0,duration:1.5,ease:'power1.in',scrollTrigger:{
      trigger:'.eq-head',
     }})

     gsap.fromTo('.scroll-container',{x:300,duration:1.5,ease:'power1.in'},{x:-400,duration:1.5,ease:'power1.out',scrollTrigger:{
      trigger:'.scroll-container'
     }})

     gsap.fromTo('.span-icon',{y:-200,duration:1,delay:1,ease:'circ'},{y:0,duration:1,ease:'circ.in',scrollTrigger:{
      trigger:'.span-icon'
     }})

  },{scope:eq})


  return (
    <div   className='h-screen flex flex-col justify-start items-center bg-white'>
      <div className='flex justify-around items-start mt-[9%] gap-5 w-[80%]'>
        <h2 className='text-black font-spaceGrotesk text-3xl'>EQ beats IQ</h2>
        <div className='flex justify-start items-center gap-12'>
          <p className='w-[320px]text-black font-serif text-lg'>People with high emotional <br/> intelligence (EQ) live more fullfilled <br/> lives.
            They tend to be happier and <br/> have healthier relationships.
          </p>
          <p className='w-[300px] text-black font-serif text-lg'>They are more successful in their <br/> pursuits and make for inspiring <br/> leaders.
            According to science, they <br/>earn $29k a year.
          </p>
        </div>
      </div>
      <div ref={eq} className='mt-10 w-[95%] h-full'>
      <h1 className='flex gap-5 eq-head font-sans text-4xl  ml-[10%] font-semibol'>Does this sound familiar... <span  className='snap-icon' ><FaSnapchatGhost size={40} color='gray' /></span></h1>
      <div className='scroll-container mt-[4%] flex gap-5'>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaSmileBeam size={30} color='orange'  /><p>You argue with a colleague You get angry and defensive instead of staying open and working towards common grounds</p></div>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaLaughBeam size={30} color='orange'  />
          <p>You get a promotion at work You question yourself abd wonder when they'll 
            realize you're an unqualified imposter, instead of trusting yourself and your abilities</p></div>
        <div className='h-[220px] text-md font-semibold w-[320px] bg-slate-200 p-5 rounded-lg flex-shrink-0'><FaAngry size={30} color='orange' />
        <p>You argue with a colleague You get angry and defensive instead of staying open and working towards common grounds</p></div>
        <div className='h-[220px] text-white text-md font-semibold w-[320px] bg-blue-600 p-5 rounded-lg flex-shrink-0'><ImShocked2 size={30} color='orange' /><p>You get a promotion at work You question yourself abd wonder when they'll 
            realize you're an unqualified imposter, instead of trusting yourself and your abilities</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><TbMoodConfuzedFilled size={30} color='orange'  /><p>You argue with a colleague You get angry and defensive instead of staying open and working towards common grounds</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><BsFillEmojiAstonishedFill size={30} color='orange'   /><p>You get a promotion at work You question yourself abd wonder when they'll 
            realize you're an unqualified imposter, instead of trusting yourself and your abilities</p></div>
        <div className='h-[220px] w-[320px] text-md font-semibold bg-slate-200 p-5 rounded-lg flex-shrink-0'><BsEmojiExpressionlessFill size={30} color='orange' /><p>You argue with a colleague You get angry and defensive instead of staying open and working towards common grounds</p></div>
      </div>
      </div>
    </div>
  )
}
