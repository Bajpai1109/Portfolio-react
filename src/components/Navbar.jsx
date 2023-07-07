import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin,FaInstagram} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
export default function Navbar(){
    const [navbar,setNavbar] = useState(false);
    {/* For Clicking on Hamburger */}
    const navClick = () => setNavbar(!navbar);
    const resume= "./AdityaResume.pdf";

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div >
              <h1 className="text-4xl text-[#FFD966] font-bold font-navheading" >Portfolio</h1>
            </div>
                {/*Menu*/}
             
                <ul className="hidden sm:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500} >
                            Home
                        </Link>
                    </li>
                    <li><Link to="about" smooth={true} duration={500} >
                            About
                        </Link></li>
                    <li><Link to="skills" smooth={true} duration={500} >
                            Skills
                        </Link>
                        </li>
                    <li><Link to="projects" smooth={true} duration={500} >
                            Projects
                        </Link>
                        </li>
                    <li><Link to="contact" smooth={true} duration={500} >
                            Contact
                        </Link>
                        </li>
                </ul>
            



            {/*hamburger */}
            <div onClick={navClick} className="sm:hidden z-10">
                {!navbar ? <FaBars /> : <FaTimes />}
            </div>



            {/*Mobile Menu */}
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col bg-[#0a192f] justify-center items-center'}  >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/*Social icons*/}
            <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
                        <a href="https://www.linkedin.com/in/aditya-bajpai-5b35b1264/" className="flex justify-between items-center w-full text-gray-300 ">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-800">
                        <a href="https://github.com/Bajpai1109" className="flex justify-between items-center w-full text-gray-300 ">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-emerald-600">
                        <a href="https://instagram.com/aditya.bajpai.11?igshid=ZGUzMzM3NWJiOQ==" className="flex justify-between items-center w-full text-gray-300 ">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-600">
                        <a href={resume} className="flex justify-between items-center w-full text-gray-300 ">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
                
            </div>

        </div>
    )
};