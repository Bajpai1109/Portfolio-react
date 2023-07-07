import React from "react";

export default function Contact(){
    return (
        <div name='contact' className="w-full md:h-screen flex justify-center items-center bg-[#0a192f] p-4">
            <form method="POST" action="https://getform.io/f/86143982-5c72-49e9-94a1-6a6f7cb06c78" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#FFD966]">Contact</p>
                    <p className="text-gray-300 py-4">Submit the form below or shoot me an email - aditya110902@gmail.com</p>
                </div>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" className="my-4 p-2 bg-[#ccd6f6]" placeholder="Email" name="email" />
                <textarea className="bg-[#ccd6f6] py-2" name="message" rows={10} placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-[#F79540] hover:border-[#F79540] px-4 py-3 my-8 mx-auto flex items-center">Let's Keep in touch</button>

            </form>

        </div>
    )
}