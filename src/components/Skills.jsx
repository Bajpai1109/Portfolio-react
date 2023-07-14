import React, { useEffect } from "react";
import Reactjs from "../image/atom.png"
import mongodb from "../image/mongodb.png";
import html from "../image/html.png";
import nodejs from "../image/nodejs.png";
import js from "../image/js.png";
import css from "../image/css-3.png";
import c from "../image/c-.png";
import java from "../image/java.png";
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Skills(){
    useEffect(() => {
        AOS.init({duration: 500});
    },[]);
    return(
        <div name="skills"  className="bg-[#0a192f] w-full h-screen  text-gray-300">
            {/*Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p data-aos="fade-up" className="text-5xl font-bold inline border-b-4 border-[#FFD966]">Skills</p>
                    <p className="py-4"> Here are some of the technologies that I've worked with!</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div data-aos="fade-down" className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="HTML icon " />
                        <p className="my-4">HTML</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={300} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="HTML icon " />
                        <p className="my-4">CSS</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={600} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={js} alt="HTML icon " />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={900} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Reactjs} alt="HTML icon " />
                        <p className="my-4">React.js</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={1200} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={c} alt="HTML icon " />
                        <p className="my-4">C++</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={1500} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={java} alt="HTML icon " />
                        <p className="my-4">Java</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={1800} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={nodejs} alt="HTML icon " />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={2100} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={mongodb} alt="HTML icon " />
                        <p className="my-4">Mongo DB</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}