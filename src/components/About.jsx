import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function About(){
    useEffect(() => {
        AOS.init({duration: 1500});
    },[]);
    return(
        <div  name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                     <div className="sm:text-right pb-8 pl-4">
                        <p data-aos="fade-up" className="text-5xl font-bold inline border-b-4 border-[#FFD966] ">About</p>
                    </div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold  ">
                        <p data-aos="fade-right">Hi, I am Aditya, nice to meet you! Please take a look around.</p>
                    </div>
                    <div>
                        <p data-aos="fade-left">I am a computer science student and I have built this portfolio on my own. I am a very enthusiastic and hardworking person.
                            I like problem solving and coding. I love watching movies. I am also learning Web Development.
                            Feel free to take a look around at my portfolio and get to know me better!
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}