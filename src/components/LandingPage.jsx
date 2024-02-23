import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye-Openings", "Presentation"].map((item, index)=>{
                return <div className='masker'>
                    <div className="w-fit flex items-center">
                        {index === 1 && (<div className='relative -top-[1vw] w-[9vw] h-[5vw] bg-red-500'></div>)}
                        <h1 className='uppercase text-[7.5vw] leading-[7.5vw] tracking-tighter font-semibold'>{item}</h1>
                    </div>
                </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
            {["For Public and Private Companies", "Front the first pitch to IPO"].map((item, index)=>(
                <p className='text-md tracking-tight font-light leading-none'>{item}</p>
            ))}
            <div className="start flex gap-5 items-center">
                <div className="px-5 py-2 border-[2px] font-light text-md border-zinc-500 uppercase rounded-full">Start the Project</div>
                <div className="w-10 h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage