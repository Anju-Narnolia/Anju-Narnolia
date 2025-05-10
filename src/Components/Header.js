import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactForm from "./Cf";
import ProjectG from "./ProjectG";
import myPhoto from "../img/myPhoto.jpg";
import { Helmet } from "react-helmet";

export default function Header() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [search, setSearch] = useState("all");
  return (
    <div id="home">
      <Helmet>
        <title>Anju Narnolia | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Anju Narnolia - Full Stack Web Developer specializing in React, JavaScript, Node.js, and modern web technologies. View my portfolio showcasing innovative web applications and development projects."
        />
        <meta
          name="keywords"
          content="Anju Narnolia, Web Developer, Full Stack Developer, React Developer, JavaScript Expert, Node.js Developer, Portfolio, Web Development, Frontend Developer, Software Engineer"
        />
        <meta name="author" content="Anju Narnolia" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Anju Narnolia | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Professional portfolio showcasing web development projects and technical expertise"
        />
        <meta
          property="og:image"
          content="https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg"
        />
        <meta property="og:url" content="https://anju-narnolia.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Anju Narnolia | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Professional portfolio showcasing web development projects and technical expertise"
        />
        <meta
          name="twitter:image"
          content="https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Anju Narnolia",
              "jobTitle": "Full Stack Web Developer",
              "url": "https://anju-narnolia.netlify.app",
              "sameAs": [
                "https://www.linkedin.com/in/anju-narnolia",
                "https://github.com/Anju-Narnolia",
                "https://twitter.com/AnjuNarnolia"
              ],
              "image": "https://anju-narnolia.netlify.app/static/media/myPhoto.817151b8a0a59d40ced8.jpg",
              "description": "Full Stack Web Developer specializing in React, JavaScript, and modern web technologies"
            }
          `}
        </script>
      </Helmet>
      <section className="h-[100vh] flex items-center relative md:pt-24 bg-[#0E0E0E] p-5">
        <div className="absolute right-0 top-1/4 w-1/2 h-px bg-yellow-500/30"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-px bg-yellow-500/30"></div>
        <div className="absolute right-10 top-1/3 w-px h-1/3 bg-yellow-500/30"></div>

        <div className="container mx-auto px-4 py-20 md:py-0">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-4xl  lg:text-7xl font-bold mb-4 font-playfair">
              <span className="text-white">Hello, I'm </span>
              <span className="text-yellow-500">Anju Narnolia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Frontend Web Developer | React Expert
            </p>
            <p className="text-gray-400 mb-10 text-lg">
              I craft elegant, high-performance web applications with modern
              technologies and a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4 font-bold">
              <p onClick={() => scrollToSection("project")}>
                <button className=" bg-yellow-500 md:py-4 md:px-8 px-4 py-2 hover:shadow-yellow-500 shadow-[0_0_10px_2px] rounded-lg">
                  View My Work
                </button>
              </p>
              <p
                onClick={() => scrollToSection("contact")}
                className="text-yellow-500 border-yellow-500/30 border md:py-4 md:px-8 px-4 py-2 rounded-lg hover:shadow-[0_0_10px_2px] shadow-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
              >
                Contact Me
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About me */}
      <div className="p-5 md:p-20" id="about">
        <div className="flex justify-center gap-16 flex-col md:flex-row">
          <div className="w-full flex justify-center md:w-1/2 p-5">
            <div className="relative">
              <div className="md:w-96 md:h-96 w-60 h-60 rounded-full overflow-hidden border-4 border-yellow-500 animate-fade-in">
                <img src={myPhoto} alt="me" />
              </div>
              <div className="absolute top-0 md:w-96 md:h-96 w-60 h-60 rounded-full border border-yellow-500 animate-glow"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:p-5 text-white text-sm md:text-[20px] flex flex-col gap-4 font-light ">
            <div className="text-2xl md:text-4xl font-extrabold uppercase flex gap-2 font-playfair">
              <p className="text-white">About</p>
              <p className="text-yellow-500">Me</p>
            </div>
            <p>
              I am a dedicated web designer with over two years of experience in
              crafting clean, modern, and highly functional websites.
            </p>{" "}
            <p className="text-gray-400">
              My focus is on creating user-friendly designs that provide
              seamless experiences and solve real-world challenges through
              thoughtful design and coding. I enjoy simplifying complex ideas
              into intuitive, easy-to-navigate interfaces that enhance
              usability.
            </p>
            <p className="text-gray-400">
              With a keen eye for detail, I ensure that my designs are not only
              visually appealing but also highly functional. I am committed to
              building websites that are both aesthetically pleasing and
              efficient, ensuring they meet user needs and operate smoothly.
            </p>
            <div className="flex font-bold text-black font-playfair">
              <a
                href="https://drive.google.com/file/d/1bHsTiyddJtZn5a3E2OQ8FykauhJRje69/view"
                className=" bg-yellow-400 p-3 hover:bg-yellow-500 hover:shadow-yellow-500 shadow-[0_0_5px_2px] rounded-lg"
              >
                <p className="fa-solid fa-file-invoice p-1"></p>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* marque */}
      <div className="marquee  text-white w-full text-xl lg:text-3xl font-bold flex my-5 ">
        <a href="#contact" className="mx-4 cursor-pointer">
          🚀 Open to Work!{" "}
        </a>
        <span> ⭐⭐</span>
        <a href="#contact" className="mx-4 cursor-pointer">
          {" "}
          Looking for Exciting Projects!{" "}
        </a>
        <span> ⭐⭐</span>
        <a href="#contact" className="mx-4 cursor-pointer">
          {" "}
          Let’s Collaborate! 🚀
        </a>
      </div>
      {/* skills */}
      <div className="p-10 pb-11" id="skill">
        <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair">
          {" "}
          Skills
        </p>
        <p className="font-thin text-center text-xl md:text-2xl p-5 text-white">
          The skill, tools and technology I use:
        </p>
        <div className="flex flex-wrap gap-5 overflow-visible justify-center ">
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
            { id: 12, class: "fa-solid fa-leaf", color: "#47A248" },
          ].map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`${skill.class} text-3xl md:text-6xl md:m-2  `}
              style={{ color: skill.color }}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* my Expertise */}
      <div className=" md:p-20 py-10 bg-[#0E0E0E]" id="expertise">
        <p className="text-2xl md:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair">
          My Expertise
        </p>
        <div className=" flex flex-col text-white px-14 md:w-10/12 justify-center">
          <div className="flex flex-col justify-start md:w-3/5 p-5 rounded-md  mx-5 mt-5  border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-feather-pointed  text-3xl rounded-md text-yellow-500 "></i>
              <p className="font-bold text-xl justify-center font-playfair">
                UI/UX Design
              </p>
            </div>
            <span>
              I design intuitive and visually appealing user interfaces that
              enhance user experiences. I ensure your digital product is
              engaging and aligned with your brand identity.
            </span>
          </div>
          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>
          <div className=" flex flex-col md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2 ">
              <i className="fa-solid fa-code text-3xl rounded-md text-yellow-500 "></i>
              <p className="font-bold text-xl font-playfair">
                Website Design & Development{" "}
              </p>
            </div>
            <span className="">
              I create websites based on your ready-made design. Whether it's a
              landing page or a business card website, I will make it look great
              and work smoothly on any device.
            </span>
          </div>
          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>
          <div className="p-5  mx-5 rounded-md md:w-3/5  border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
            <div className="flex justify-start gap-5 p-2 ">
              <i className="fa-brands fa-wordpress text-3xl text-yellow-500  rounded-md"></i>
              <p className="font-bold text-xl font-playfair">Wordpress</p>
            </div>
            <span>
              I build websites on WordPress, making them easy to update and
              manage. It's a great choice for blogs, small businesses, or
              portfolios.
            </span>
          </div>
          <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>
          <div className="md:ml-80 md:w-3/5 p-5 rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white flex flex-col">
            <div className="flex justify-start gap-5 p-2">
              <i className="fa-solid fa-pen-to-square  text-3xl  rounded-md text-yellow-500 "></i>
              <p className="font-bold text-xl font-playfair">Content Writing</p>
            </div>
            <span>
              I create engaging, SEO-friendly content tailored to your audience.
              Whether it's blog posts, web copy, or product descriptions, my
              writing ensures your message is clear and impactful.
            </span>
          </div>
        </div>
      </div>

      {/* project */}
      <div id="project" className="p-5">
        <div className="px-5 py-14 text-center flex  flex-col items-center ">
          <h1 className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
            My Projects
          </h1>

          <span className="text-gray-300 max-w-2xl text-center">
            Here's a selection of projects I've worked on. Each one represents a
            unique challenge, creative process, and innovative solution."
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <p
            className={`${
              search === "all"
                ? " bg-yellow-500  "
                : "text-white hover:bg-yellow-500/20"
            } px-10 rounded-lg py-2 font-bold cursor-pointer border-yellow-500 border-opacity-30 border-2  `}
            onClick={() => setSearch("all")}
          >
            All
          </p>
          <p
            className={`${
              search === "html"
                ? " bg-yellow-500 "
                : "text-white hover:bg-yellow-500/20"
            } px-10 rounded-lg py-2 font-bold cursor-pointer border-yellow-500 border-opacity-30 border-2`}
            onClick={() => setSearch("html")}
          >
            HTML
          </p>
          <p
            className={` ${
              search === "react"
                ? " bg-yellow-500 "
                : "text-white hover:bg-yellow-500/20"
            } px-10 rounded-lg py-2 font-bold cursor-pointer border-yellow-500 border-opacity-30 border-2`}
            onClick={() => setSearch("react")}
          >
            React
          </p>
          <p
            className={`${
              search === "wordpress"
                ? " bg-yellow-500 "
                : "text-white hover:bg-yellow-500/20"
            } px-10 rounded-lg py-2 font-bold cursor-pointer border-yellow-500 border-opacity-30 border-2 `}
            onClick={() => setSearch("wordpress")}
          >
            Wordpress
          </p>
        </div>
        <ProjectG result={search} />
      </div>

      {/* Contact me */}
      <div className="bg-[#0E0E0E] py-20 px-8" id="contact">
        <div className="pb-10 items-center flex  flex-col gap-5">
          <p className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
            Get In Touch
          </p>
          <span className="text-gray-300 max-w-2xl text-center">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs some creative work, I'd love to
            hear from you.
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pl-5">
          <div className="flex flex-col">
            <div className="flex flex-col gap-5">
              <p className="text-2xl md:text-4xl text-yellow-500  font-bold font-playfair">
                Contact Information
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-envelope text-yellow-500 "></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl">Email: </p>
                  <a
                    href="mailto:anjunarnolia93750@gmail.com"
                    className="text-gray-400 hover:text-yellow-500 "
                  >
                    anjunarnolia93750@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-phone-volume text-yellow-500 "></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl"> Phone: </p>
                  <a
                    href="tel:+919728293750"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    +91 9728293750
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-500/10 mt-1">
                  <i className="fa-solid fa-location-dot text-yellow-500"></i>
                </div>
                <div className="flex flex-col ">
                  <p className="text-white text-xl">Address: </p>
                  <p className="text-gray-400">MDU Rohtak , Haryana</p>
                </div>
              </div>
            </div>
            <div className="py-5">
              <p className="text-2xl md:text-4xl text-white  font-bold font-playfair">
                Contact With Me
              </p>
              <div className="flex flex-wrap md:space-x-6 gap-3  mt-6 text-2xl text-yellow-500">
                <a href="https://www.linkedin.com/in/anju-narnolia-">
                  <i className="fa-brands fa-linkedin cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 p"></i>
                </a>
                <a href="https://github.com/Anju-Narnolia">
                  <i className="fa-brands fa-github cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"></i>
                </a>
                <a href="https://pinterest.com/Anjunarnolia">
                  <i className="fa-brands fa-pinterest cursor-pointer  border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"></i>
                </a>
                <a href="https://www.instagram.com/anju__narnolia">
                  <i className="fa-brands fa-instagram cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"></i>
                </a>
                <a href="mailto:anjunarnolia93750@gmail.com">
                  <i className="fa-solid fa-envelope cursor-pointer   border border-yellow-500 px-3 md:px-4 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 "></i>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
