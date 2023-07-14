import React, { useEffect } from "react";
import Calculator from '../image/Calculator.png';
import NewsApp from '../image/NewsAppCover.jpg';
import blogsite from '../image/blogsite.webp'
import ImageCard from "./ImageCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Projects(){
    useEffect(() =>{
        AOS.init({duration:1500});
    },[]);
    return (
        <div name='projects' className="w-full md:h-screen  text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFD966]">Projects</p>
                    <p className="py-6">Please spare some time to check out some of my projects!</p>
                </div>
                {/*Container*/}
                <div 
                className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-4" >
                    {/*Project Item*/}
                    <ImageCard data-aos="fade-right" imgSrc={NewsApp}>
                        <h3 className="text-xl font-bold mb-2">NewsApp</h3>
                        <p className="pb-2">
                        This is an Android news Application. This application is buit on Android Studio using Java as a development language.
                        It makes use of NewsAPI to fetch all the current News.
                        </p>
                        <div className="space-x-4 mt-4">
                        <a href="https://github.com/Bajpai1109/NewsApp" className="text-center rounded-lg cursor-pointer px-4 py-4 my-5 bg-white text-gray-700 font-bold text-lg">Code</a>
                            
                        </div>
                    </ImageCard>
                    <ImageCard data-aos="fade-up" imgSrc={blogsite}>
                        <h3 className="text-xl font-bold mb-2">Blog Website</h3>
                        <p className="pb-3">
                        This is a Blog Website built using MERN(MongoDB, Express.js, React.js, Node.js) Stack. A user can upload his/her own blogs and can view blogs of other people as well.
                        
                        </p>
                        <div className="space-x-4 mt-4">
                        <a className="text-center rounded-lg cursor-pointer px-4 py-4 my-5 bg-white text-gray-700 font-bold text-lg">Code</a>
                            <a  className="text-center cursor-pointer rounded-lg px-4 py-4 bg-white text-gray-700 font-bold text-lg">Demo</a>
                        </div>
                    </ImageCard>
                    <ImageCard data-aos="fade-left" imgSrc={Calculator}>
                        <h3 className="text-xl font-bold mb-2">Calculator</h3>
                        <p >
                        This is a responsive arithmetic Calculator created using HTML,CSS and Javascript.
                        I have used Bootstrap Framework and jQuery Framework in this project.
                        </p>
                        <div className="space-x-4 mt-4">
                            <a href="https://github.com/Bajpai1109/Cal" className="text-center cursor-pointer rounded-lg px-4 py-4 my-5 bg-white text-gray-700 font-bold text-lg">Code</a>
                            <a href="https://bajpai1109.github.io/Cal/"  className="text-center cursor-pointer rounded-lg px-4 py-4 bg-white text-gray-700 font-bold text-lg">Demo</a>
                        </div>
                    </ImageCard>
                    
                </div>
            </div>

        </div>
    )
}