import React from 'react'
import { useLayoutEffect,useRef } from "react"
import gsap from 'gsap'
import Home from './Home'

export default function () {
  const comp = useRef(null)

  useLayoutEffect(()=>{
    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from('#intro-slider',{
        xPercent:'-100',
        duration:1.3,
        delay:0.3,
      }).from(['#title-1','#title-2','#title-3'],{
        opacity:0,
        y:'+=30',
        stagger:0.5,
      }).to(['#title-1','#title-2','#title-3'],{
        opacity:0,
        y:'-=30',
        delay:0.3,
        stagger:0.5,
      }).to('#intro-slider',{
        xPercent:'-100',
        duration:1.3
      })
    },comp)
   
    return () => ctx.revert()
  },[])

  return (
    <div className="relative" ref={comp}>
     <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
      <h1 id="title-1" className="text-9xl">Software Engineer</h1>
      <h1  id="title-2"  className="text-9xl">Frontend Developer</h1>
      <h1  id="title-3"  className="text-9xl">Mern Stack Developer</h1>
     </div>
    <Home />
    </div>
  )
}
