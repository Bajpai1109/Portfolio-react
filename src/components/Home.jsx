import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from "react-type-animation";

export default function Home(){
    return(
        <div name='home' className="bg-[#0a192f] w-full h-screen"> 

        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-[#FFD966]">Hi, my name is </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aditya Bajpai</h1>
            <div>
            <span className="text-4xl sm:text-7xl font-bold text-[#D4ADFC]">I'm a </span>
            <TypeAnimation  sequence={[
                'Student,',
                2000,
                'Programmer,',
                2000,
                'Developer,',
                2000,
            ]} speed={50} cursor={false} className="underline decoration-[#FFD966] text-4xl sm:text-7xl font-bold text-[#D4ADFC]" wrapper="span" repeat={Infinity} />
            </div>
            <p className="text-[#D4ADFC] py-4 max-w-[700px]">currently in pre-final year pursuing my Computer 
            Engineering from SGSITS,Indore, Madhya Pradesh.</p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F79540] duration-200" >View About
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " /></span>  
                </button>
            </div>
            
        </div>

        </div>
    )
}