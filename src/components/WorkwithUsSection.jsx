import React,{useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
import { FaSnapchatGhost  } from "react-icons/fa";

export default function WorkwithUsSection() {

    const work = useRef(null)

    useGSAP(()=>{

      gsap.fromTo('.work',{x:-150,},{x:0,duration:1,scrollTrigger:{
        trigger:'.work'
      }})

      gsap.fromTo('.ahead',{x:150,},{x:0,duration:1,scrollTrigger:{
        trigger:'.ahead'
      }})

      gsap.fromTo('.left',{x:200},{x:0,duration:2,scrollTrigger:{
        trigger:'.left'
      }})

      gsap.fromTo('.right',{x:-200},{x:0,duration:2,scrollTrigger:{
        trigger:'.right'
      }})


      gsap.fromTo('.snap-logo',{y:-50,duration:5,ease:'bounce'},{y:0,duration:1,ease:'bounce',scrollTrigger:{
        trigger:'.snap-logo'
      }})

    },{scope:work})

  return (
    <div ref={work} className='h-screen bg-blue-100 w-[96%] m-auto rounded-3xl pt-[4%] pl-[3%]'>
      <div className='flex justify-between w-[95%] mb-5'>
        <h1 className='text-gray-800 text-3xl font-bold work'>Work with us</h1>
        <h1 className='text-blue-600 text-4xl font-Roboto ahead font-medium'>ahead</h1>
      </div>
      <div className='mr-[4%] flex justify-around'>
      <div className='bg-white rounded-2xl mr-[20%] shadow-2xl h-[400px] left'>
        <div className='mt-5 ml-5'>
          <FaSnapchatGhost size={40} color='lightblue' className='snap-logo'   />
          <h2 className='text-black font-Roboto text-2xl mt-5 font-semibold'>About</h2>
          <p className='text-gray-800 text-lg mb-8'>At ahead our goal is to make self- <br /> improvement fun and lasting. We know there's <br /> a way how to make it work. And that's what <br />aHead is all about </p>
        </div>
        <div className='rounded-2xl p-5 h-[200px] bg-amber-100'>
          <h2 className='text-black font-Roboto text-2xl mt-5 font-semibold'>Product</h2>
          <p className='text-gray-800 text-lg mb-8'>Sure, you could spend ages reading books or <br />sitting in seminars on how to become a better <br />spouse,parent, or manager-like we did...</p>
        </div>
      </div>
      <div className='overflow-y-scroll right scrollbar-track scrollbar-thumb rounded-md h-[550px]'>
        <div className='bg-white p-4 rounded-2xl mt-2 mb-5 h-[200px] w-[380px] mx-4'>
          <h2 className='text-black font-Roboto font-bold text-lg leading-tight mb-3'>Power through,even when the <br />going gets tough</h2>
          <p className='text-gray-800 text-md font-spaceGrotesk'>We help you spot and work around <br />whatever stands in the way, be it bad <br />habits,fears,etc.</p>
        </div>
        <div className='bg-white p-4 rounded-2xl mx-4 mt-2 mb-5 h-[200px] w-[380px]'>
          <h2 className='text-black font-Roboto font-bold text-lg leading-tight mb-3'>Learn more about who you are <br />and where you want to go </h2>
          <p className='text-gray-800 text-md font-spaceGrotesk'>We ask right questions to help you <br />better understand why do do things <br /> the way you do.</p>
        </div>
        <div className='bg-white p-4 rounded-2xl mx-4 mt-2 mb-5 h-[200px] w-[380px]'>
          <h2 className='text-black font-Roboto font-bold text-lg leading-tight mb-3'>Play and grow together with <br />others on the same journey</h2 >
          <p className='text-gray-800 text-md font-spaceGrotesk'>Ahead feels like a game, not like a chore. <br />See yourself grow every day towards <br /> achieving goals!</p>
        </div>
        <div className='bg-white p-4 rounded-2xl mx-4 mt-2 mb-5 h-[200px] w-[380px]'>
        <h2 className='text-black font-Roboto font-bold text-lg leading-tight mb-3'>Power through,even when the <br />going gets tough</h2>
          <p className='text-gray-800 text-md font-spaceGrotesk'>We help you spot and work around <br />whatever stands in the way, be it bad <br />habits,fears,etc.</p>
        </div>
        <div className='bg-white p-4 rounded-2xl mx-4 mt-2 mb-5 h-[200px] w-[380px]'>
        <h2 className='text-black font-Roboto font-bold text-lg leading-tight mb-3'>Learn more about who you are <br />and where you want to go </h2>
          <p className='text-gray-800 text-md font-spaceGrotesk'>We ask right questions to help you <br />better understand why do do things the way you do.</p>
        </div>
      </div>
      </div>
    </div>
  )
}
