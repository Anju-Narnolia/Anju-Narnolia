import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactForm from './Cf';
import ProjectG from './ProjectG';
import myPhoto from "../img/myPhoto.jpg";

export default function Header() {
    const [search, setSearch] = useState("all");
    return (
        <div className="" id="home">

            <div className="">
                <div className=" text-white flex h-[80vh] flex-col gap-8 justify-center items-center">
                    <span className="text-center text-3xl md:text-7xl font-bold">
                        Hii There, I'm Anju Narnolia!
                    </span>
                    <span className="text-4xl uppercase font-extrabold text-yellow-500">
                        A Web Developer</span>
                    <span className="text-center text-2xl font-bold">
                        <p> I create modern, responsive, and user-friendly websites that enhance digital experiences.</p>
                    </span>

                </div>
            </div>

            {/* About me */}
            <div className="p-5 md:p-16" id="about" >
                <p className="text-4xl font-extrabold  uppercase  text-yellow-500" >About Me</p>
                <div className="flex justify-center gap-16 p-5 flex-col md:flex-row">
                    <p className="md:w-1/2 md:p-5 text-white text-sm md:text-lg">
                        I'm a dedicated web designer with more than 2 years of experience in crafting clean,
                        modern, and functional websites. My primary focus is on creating user-friendly sites that
                        offer seamless experiences and address real-world challenges through thoughtful design and coding. I
                        take pleasure in simplifying complex ideas into intuitive, easy-to-navigate interfaces that enhance
                        the user experience. My keen attention to develop designs that are not only visually
                        appealing but also highly functional. I am committed to building websites that are both attractive and
                        efficient, ensuring they fulfill user needs and operate smoothly. Whether I’m tackling small or large
                        projects,
                        my aim is always to deliver a final product that surpasses expectations and makes a lasting impact.
                    </p>
                    <img src={myPhoto} alt="me" className="rounded-full  w-80 h-80 border-2 border-yellow-500 shadow-[0px_0px_10px_10px_rgba(234,179,8,15)]" />
                </div>
            </div>

            {/* marque */}
            <div className="marquee bg-white text-black w-full text-3xl font-bold flex my-10">
                <a href="#contact" className="mx-4 cursor-pointer">🚀 Open to Work!  </a><span> ⭐⭐</span>
                <a href="#contact" className="mx-4 cursor-pointer">  Looking for Exciting Projects! </a><span> ⭐⭐</span>
                <a href="#contact" className="mx-4 cursor-pointer">  Let’s Collaborate! 🚀</a>
            </div>

            {/* skills */}
            <div className=" p-5" id="skill" >
                <p className="text-3xl font-bold uppercase text-yellow-500 text-center"> Skills
                </p>
                <p className="font-thin text-center text-3xl p-5 text-white">
                    The skill, tools and technology I use:
                </p>
                <div className="flex flex-wrap gap-5 justify-center overflow-hidden">
                    {[
                        { id: 1, class: "fa-brands fa-java", color: "#007396" },
                        { id: 2, class: "fa-brands fa-js", color: "#F7DF1E" },
                        { id: 3, class: "fa-brands fa-html5", color: "#E34F26" },
                        { id: 4, class: "fa-brands fa-css3-alt", color: "#1572B6" },
                        { id: 5, class: "fa-brands fa-python", color: "#3776AB" },
                        { id: 6, class: "fa-brands fa-php", color: "#777BB4" },
                        { id: 7, class: "fa-brands fa-react", color: "#61DAFB" },
                        { id: 8, class: "fa-brands fa-bootstrap", color: "#7952B3" },
                        { id: 9, class: "fa-brands fa-node", color: "#339933" },
                        { id: 10, class: "fa-brands fa-git", color: "#F05032" },
                        { id: 11, class: "fa-brands fa-github", color: "#ffffff" },
                    ].map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            className={`${skill.class} text-5xl m-2  `}
                            style={{ color: skill.color }}
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        />
                    ))}
                </div>
            </div>

            {/* my Expertise */}
            <div className=" md:p-16 m-5" id="expertise" >
                <p className=" text-3xl font-bold uppercase text-yellow-500 text-center">My Expertise </p>
                <div className=" flex flex-col text-white px-14 md:w-10/12 justify-center">
                    <div className="flex flex-col justify-start md:w-3/5 p-5 rounded-md  mx-5 mt-5  border-2 border-yellow-500 hover:shadow-lg hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
                        <div className="flex justify-start gap-5 p-2">
                            <i className="fa-solid fa-feather-pointed  text-3xl rounded-md text-yellow-500"></i>
                            <p className="font-bold text-xl justify-center">UI/UX Design</p>
                        </div>
                        <span>I design intuitive and visually appealing user interfaces that enhance user experiences. I ensure your digital product is engaging and aligned with your brand identity.</span>
                    </div>
                    <div className="h-10 w-1/2 border-r-2 border-yellow-500 " ></div>
                    <div className=" flex flex-col md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-lg hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
                        <div className="flex justify-start gap-5 p-2 ">
                            <i className="fa-solid fa-code text-3xl rounded-md text-yellow-500"></i>
                            <p className="font-bold text-xl">Website Design & Development</p>
                        </div>
                        <span className="">
                            I create websites based on your ready-made design. Whether it's a landing page or a
                            business card website, I will make it look great and work smoothly on any device.
                        </span>
                    </div>
                    <div className="h-10 w-1/2 border-r-2 border-yellow-500 " ></div>
                    <div className="p-5  mx-5 rounded-md md:w-3/5  border-2 border-yellow-500 hover:shadow-lg hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
                        <div className="flex justify-start gap-5 p-2 ">
                            <i className="fa-brands fa-wordpress text-3xl text-yellow-500 rounded-md"></i>
                            <p className="font-bold text-xl">Wordpress</p>
                        </div>
                        <span>I build websites on WordPress, making them easy to update and manage. It's a great choice for blogs, small businesses, or portfolios.</span>
                    </div>
                    <div className="h-10 w-1/2 border-r-2 border-yellow-500 " ></div>
                    <div className="md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-lg hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white flex flex-col">
                        <div className="flex justify-start gap-5 p-2">
                            <i className="fa-solid fa-pen-to-square  text-3xl  rounded-md text-yellow-500"></i>
                            <p className="font-bold text-xl">Content Writing</p>
                        </div>
                        <span>I create engaging, SEO-friendly content tailored to your audience. Whether it's blog posts,
                            web copy, or product descriptions, my writing ensures your message is clear and impactful.</span>
                    </div>
                </div>
            </div>
            {/* project */}
            <div id="project">
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl text-center text-yellow-500 border-b-4 my-5 border-gray-800" >Explore My Projects: From Concept to Code</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    <p className={`  hover:bg-gray-700 ${search === "all" ? " text-yellow-500 " : "text-white"} px-10 rounded-lg py-2 font-bold cursor-pointer border-white border-2 `} onClick={() => setSearch("all")} >All</p>
                    <p className={`  hover:bg-gray-700 ${search === "html" ? " text-yellow-500" : "text-white"} px-10 rounded-lg py-2 font-bold cursor-pointer border-white border-2`} onClick={() => setSearch("html")}     >HTML</p>
                    <p className={`  hover:bg-gray-700 ${search === "react" ? " text-yellow-500" : "text-white"} px-10 rounded-lg py-2 font-bold cursor-pointer border-white border-2`} onClick={() => setSearch("react")}    >React</p>
                    <p className={`  hover:bg-gray-700 ${search === "wordpress" ? " text-yellow-500" : "text-white"} px-10 rounded-lg py-2 font-bold cursor-pointer border-white border-2 `} onClick={() => setSearch("wordpress")}>Wordpress</p>
                </div>
                {/* <Project /> */}
                <ProjectG result={search} />
            </div>

            {/* Contact me */}
            <div className=' py-16' id="contact" >
                <p className=" text-3xl font-bold  uppercase  text-yellow-500 text-center">
                    Get In Touch</p>
                <div className="flex flex-col md:flex-row">
                    <div className=' w-full md:w-1/2 items-center flex justify-center flex-col'>
                        <div>
                            <p className='text-5xl text-white font-bold text-center box py-10 px-5'>Have a project in mind? Let’s work together!</p>
                            <div className='mx-20 text-white'>
                                <p className='box '><i className='fa-solid fa-envelope text-yellow-500 mr-2'></i>Email: anjunarnolia93750@gmail.com</p>
                                <p className='box'><i className="fa-solid fa-phone-volume text-yellow-500  "></i> Phone: +91 9728293750</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap space-x-6  justify-center gap-6  mt-6 text-3xl text-white' >
                            <a href='https://www.linkedin.com/in/anju-narnolia-'><i className="fa-brands fa-linkedin  m-2 cursor-pointer text-yellow-500"></i></a>
                            <a href='https://github.com/Anju-Narnolia'><i className="fa-brands fa-github  m-2 cursor-pointer text-yellow-500"></i></a>
                            <a href='https://github.com/Anju-Narnolia'><i className="fa-brands fa-pinterest  m-2 cursor-pointer text-yellow-500"></i></a>
                            <a href='https://www.instagram.com/anju__narnolia'><i className="fa-brands fa-instagram m-2 cursor-pointer text-yellow-500"></i></a>
                            <a href='mailto:anjunarnolia93750@gmail.com'><i className="fa-solid fa-envelope  m-2 cursor-pointer text-yellow-500 "></i></a>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div >
        </div >
    )
} 