import React from "react";
import { useState } from "react";
function ContactForm() {
  const [msg, setMsg] = useState(" ");
  function msgChange(event) {
    event.preventDefault();
    setMsg("Thank you for reaching out! I’ll get back to you soon.");
    event.target.reset();
  }
  return (
    <>
      <div className="border border-opacity-30 border-yellow-500 bg-transparent text-white p-3 md:px-10 py-8">
        <p className=" text-2xl md:text-4xl text-yellow-500 font-bold font-playfair px-3">
          Send Me a Message{" "}
        </p>
        <form onSubmit={msgChange}>
          <div className=" flex flex-col gap-2">
            <div className="py-2 px-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                className="rounded-md bg-gray-300 block w-full text-white  p-1 focus:outline-none  bg-opacity-10  border-opacity-30 border-yellow-500 border-2"
                type="text"
                placeholder="Your Name"
                required
              ></input>
            </div>
            <div className="py-2 px-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                className="rounded-md bg-gray-300 block w-full text-white p-1 focus:outline-none bg-opacity-10  border-opacity-30 border-yellow-500 border-2"
                type="email"
                placeholder="Your Email"
                required
              ></input>
            </div>
            <div className="py-2 px-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                className="rounded-md bg-gray-300 block w-full  text-white tracking-tighter   border-opacity-30 bg-opacity-10 p-1 focus:outline-none  h-20 border-yellow-500 border-2"
                typeof="text"
                required
                placeholder="Write Your Message Here"
              ></textarea>
            </div>
            <div className="flex justify-center m-2">
              <button
                className="bg-yellow-500/80 hover:bg-yellow-500 hover:shadow-yellow-500 shadow-[0_0_5px_2px] text-black rounded-md font-bold px-14  py-2"
                type="submit"
              >
                Submit
              </button>
            </div>
            <p className=" box text-l font-bold text-center ">{msg}</p>
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactForm;
