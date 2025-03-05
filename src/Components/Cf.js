import React from 'react'
import { useState } from 'react';
function ContactForm() {
    const [msg, setMsg] = useState("I read every message and typically respond within 48 hours if a reply is required.");
    function msgChange(event) {
        event.preventDefault();
        setMsg("Thank you for reaching out! I’ll get back to you soon.");
        event.target.reset();
    }
    return (<>
        <div className='border border-yellow-500 m-10 bg-transparent text-white' >
            <p className=" text-3xl font-bold text-center text-white" >Contact Me</p>
            <form onSubmit={msgChange}>
                <div className='px-3 py-5'>
                    <div className='py-2 px-3'>
                        <input className='rounded-md bg-gray-300 block w-full text-white  p-1 focus:outline-none  bg-opacity-30 border-yellow-500 border-2' type='text' placeholder='Your Name' required></input>
                    </div>
                    <div className='py-2 px-3'>
                        <input className='rounded-md bg-gray-300 block w-full text-white p-1 focus:outline-none bg-opacity-30 border-yellow-500 border-2' type='email' placeholder='Your Email' required></input>
                    </div>
                    <div className='py-2 px-3'>
                        <textarea className='rounded-md bg-gray-300 block w-full  text-white tracking-tighter bg-opacity-30 p-1 focus:outline-none  h-20 border-yellow-500 border-2' typeof='text' required placeholder='Write Your Message Here'></textarea>
                    </div>
                    <div>
                        <button className='bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-black rounded-md font-bold px-10 py-2 w-1/2 mx-48 my-3' type='submit' >Submit</button>
                    </div>
                    <p className=' box text-l font-bold text-center '>{msg}</p>
                </div>
            </form>
        </div>
    </>)
}
export default ContactForm;