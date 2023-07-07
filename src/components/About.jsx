import React from "react";


export default function About(){
    return(
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                     <div className="sm:text-right pb-8 pl-4">
                        <p className="text-5xl font-bold inline border-b-4 border-[#FFD966] ">About</p>
                    </div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold  ">
                        <p>Hi, I am Aditya, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a computer science student and I have built this portfolio of my own. I am a very enthusiastic and hardworking person.
                            I like problem solving and coding. I love watching movies. I am also learning Web Development.
                            Feel free to take a look around at my portfolio and get to know me better!
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}