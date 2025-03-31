import React, { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");

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

  async function handleSubmit(event) {
    event.preventDefault();
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

  return (
    <div className="border border-opacity-30 border-yellow-500 bg-transparent text-white p-3 md:px-10 py-8">
      <p className="text-2xl md:text-4xl text-yellow-500 font-bold font-playfair px-3">
        Send Me a Message
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <div className="py-2 px-3">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Name
            </label>
            <input
              className="rounded-md bg-gray-300 block w-full text-white p-1 focus:outline-none bg-opacity-10 border-opacity-30 border-yellow-500 border-2"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2 px-3">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Email
            </label>
            <input
              className="rounded-md bg-gray-300 block w-full text-white p-1 focus:outline-none bg-opacity-10 border-opacity-30 border-yellow-500 border-2"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-2 px-3">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              className="rounded-md bg-gray-300 block w-full text-white tracking-tighter border-opacity-30 bg-opacity-10 p-1 focus:outline-none h-20 border-yellow-500 border-2"
              name="message"
              placeholder="Write Your Message Here"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center m-2">
            <button
              className="bg-yellow-500/80 hover:bg-yellow-500 hover:shadow-yellow-500 shadow-[0_0_5px_2px] text-black rounded-md font-bold px-14 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
          {msg && <p className="text-lg font-bold text-center">{msg}</p>}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
