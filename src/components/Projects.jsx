import React from "react";
import Calculator from '../image/Calculator.png';
import NewsApp from '../image/NewsAppCover.jpg';
import blogsite from '../image/blogsite.webp'
export default function Projects(){
    return (
        <div name='projects' className="w-full md:h-screen  text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFD966]">Projects</p>
                    <p className="py-6">Check out some of my projects</p>
                </div>
                {/*Container*/}
                <div 
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
                    {/*Project Item*/}
                    <div style={{backgroundImage:`url(${Calculator})`}} className="shadow-xl shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/*Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white text-center tracking-wider">
                            Calculator
                            </span>
                                <div className="pt-8 text-center">
                                    <a href="https://github.com/Bajpai1109/Cal">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>

                                </div>
                            
                        </div>
   
                    </div>
                    {/*Grid Item*/}
                    <div style={{backgroundImage:`url(${NewsApp})`}} className="shadow-xl news shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/*Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            Android News App
                            </span>
                                <div className="pt-8 text-center">
                                    <a href="https://github.com/Bajpai1109/NewsApp">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>

                                </div>
                            
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${blogsite})`}} className="shadow-xl news shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/*Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                            MERN Blog Website
                            </span>
                                <div className="pt-8 text-center">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                    </a>

                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}