import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import image from '../image/3d-web-developer-working-on-project-illustration-png.webp';
import bg from '../image/3D-Animated-Website-Backgrounds.jpg';
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css'
import { Link } from "react-scroll";
export default function Home(){
    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);
    return(
        <div name='home' style={{backgroundImage:`url(${bg})`}} className="bg-[#0a192f] w-full h-screen"> 

        {/* Container */}
        <div data-aos="fade-left" className="max-w-[1300px] mx-auto px-8 flex flex-col justify-center h-full">
            <div className="grid grid-cols-3" >
                <div className="col-span-2">
                <p className="text-[#FFD966]">Hi, my name is </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Aditya Bajpai</h1>
                <div>
                <span className="text-4xl sm:text-7xl font-bold overflow-hidden text-[#D4ADFC]">I'm a </span>
                <TypeAnimation  sequence={[
                    'Student!',
                    2000,
                    'Programmer!',
                    2000,
                    'Developer!',
                    2000,
                ]} speed={50} cursor={false} className="underline decoration-[#FFD966] text-4xl sm:text-7xl font-bold text-[#D4ADFC]" wrapper="span" repeat={Infinity} />
                </div>
             <p className="text-[#D4ADFC] py-4 max-w-[600px]">I am currently in pre-final year pursuing my Computer Science 
             Engineering from SGSITS, Indore, Madhya Pradesh.</p>
             <div>
                 <Link to="about" className="text-white max-w-[165px] cursor-pointer group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F79540] duration-200" >View About
                 <span className="group-hover:rotate-90 duration-300">
                 <HiArrowNarrowRight className="ml-3 " /></span>  
                 </Link>
             </div>
                </div>
                <div className="flex justify-center">
                <img src={image} className="animate__animated animate__fadeInRight  "></img>
             </div>
            </div>
            
        </div>

        </div>
    )
}