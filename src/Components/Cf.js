import React, { useState, useEffect } from "react";
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
function ContactForm() {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (!msg) return;
    const timer = setTimeout(() => {
      setMsg("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [msg]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  }
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    if (!validateEmail(email)) {
      setMsg("Please enter a valid email address.");
      return;
    }
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx3cfYPYnZ6OwiBSzE0c3gSzvs-3RLcohwdNPeFKbhI93Y_bk524H2lexhTH5f3A_I/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      if (response) {
        setMsg("Thank you for reaching out! I’ll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMsg("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMsg("An error occurred. Please try again.");
    }
  }

  return (<>
  <div className="bg-gradient-to-br from-yellow-500 to-yellow-500 rounded-lg via-black p-[3px] shadow-[-2px_-2px_10px_rgba(255,255,0,0.5)]" >
    <div className=" text-white p-3 lg:px-10 py-8 rounded-lg bg-[#0E0E0E] bg-gradient-to-br from-yellow-500/5 to-black " >
      <p className="text-2xl md:text-4xl text-yellow-500 font-bold font-playfair px-3">
        Send Me a Message
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-3">
            <Label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </Label>
            <Input
              className="rounded-md  text-white block w-full bg-black/80 p-1 focus:outline-none  border-opacity-30 border-yellow-500 border-2"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2 px-3">
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </Label>
            <Input
              className="rounded-md text-white block w-full bg-black/80 p-1 focus:outline-none  border-opacity-30 border-yellow-500 border-2"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2 px-3">
            <Label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </Label>
            <Textarea
              className="rounded-md text-white block w-full bg-black/80 p-1 focus:outline-none h-20 border-yellow-500 border-2"
              name="message"
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center m-2">
            <button
              className="bg-yellow-500/80 hover:bg-black hover:text-white border-yellow-500 hover:border-black border hover:shadow-yellow-500 shadow-[0_0_5px_2px] text-black rounded-md font-bold w-full py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
          {msg && <p className="text-lg font-bold text-center">{msg}</p>}
        </div>
      </form>
    </div>
    </div>
    </>


  );
}

export default ContactForm;
