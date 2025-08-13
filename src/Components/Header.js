import ContactForm from "./Cf";
import Project from "./ProjectG";
import Achievement from "../Components/achievement";
import Skills from "../Components/skill";
import hero from "../img/hero img.png";
import AnimateOnScroll from "./animate-on-scroll";

import { Helmet } from "react-helmet";

export default function Header() {
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div id="home">
      {/* hero section */}
      <section className="h-[100vh] flex items-center relative lg:pt-24 p-5 bg-[#0c0c04]/80">
        <div className="absolute right-0 top-1/4 w-1/2 h-px bg-yellow-500/30"></div>
        <div className="absolute left-0 bottom-1/4 w-1/3 h-px bg-yellow-500/30"></div>
        <div className="absolute right-10 top-1/3 w-px h-1/3 bg-yellow-500/30"></div>
        <div className="w-full lg:flex-row flex flex-col p-5 gap-5  lg:px-16">
          <AnimateOnScroll animation="animate-fadeIn">
            <div className="max-w-3xl ">
              <h1 className="text-2xl md:text-4xl  lg:text-7xl font-bold mb-4 font-playfair">
                <span className="text-white ">Hi, I'm </span>
                <span className="text-yellow-500">Anju Narnolia</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Full Stack Web Developer | React Expert
              </p>
              <p className="text-gray-400 mb-5 text-lg">
                I craft elegant, high-performance web applications with modern
                technologies and a focus on user experience.
              </p>
              <div className="flex flex-wrap gap-4 font-bold">
                <p onClick={() => scrollToSection("project")}>
                  <button className=" bg-yellow-500 lg:py-4 lg:px-8 px-4 py-2 hover:shadow-yellow-500 shadow-[0_0_10px_2px] rounded-lg">
                    View My Work
                  </button>
                </p>
                <p
                  onClick={() => scrollToSection("contact")}
                  className="text-yellow-500 border-yellow-500/30 border lg:py-4 lg:px-8 px-4 py-2 rounded-lg hover:shadow-[0_0_10px_2px] shadow-yellow-500 hover:bg-yellow-500/5 transition-all duration-300"
                >
                  Contact Me
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="animate-fadeIn lg:px-10">
            <div className="flex-1 justify-center items-center lg:pl-20 hidden lg:flex">
              <img src={hero} width={500} alt="hero img" className=" w-72 lg:w-96"  />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Section */}
      <AnimateOnScroll animation="animate-slideUp py-10">
        <Achievement />
      </AnimateOnScroll>

      {/* skills */}
      <AnimateOnScroll animation="animate-slideUp">
        <div className="p-10 pb-11" id="skill">
          <Skills />
        </div>
      </AnimateOnScroll>

      {/* my Expertise */}
      <AnimateOnScroll animation="animate-slideUp">
        <div className=" lg:p-20 py-10 bg-[#24240c]/80 m-5 md:m-16" id="expertise">
          <p className="text-2xl lg:text-4xl font-bold uppercase text-yellow-500  text-center font-playfair">
            My Expertise
          </p>
          <div className=" flex flex-col text-white px-5 lg:w-10/12 justify-center">
            <div className="flex flex-col justify-start lg:w-3/5 p-5 rounded-md bg-[#0c0c04]  mx-5 mt-5  border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
              <div className="flex justify-start gap-5 p-2">
                <i className="fa-solid fa-desktop text-3xl rounded-md text-yellow-500 "></i>
                <p className="font-bold text-xl justify-center font-playfair">
                  Frontend Development
                </p>
              </div>
              <span>
                I build fast, responsive, and interactive user interfaces using
                modern frameworks like React.js and Tailwind CSS. My focus is on
                creating clean, maintainable code and delivering smooth,
                engaging user experiences.
              </span>
            </div>
            <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>
            <div className=" flex flex-col lg:ml-60 lg:w-3/5 p-5 bg-[#0c0c04] rounded-md border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
              <div className="flex justify-start gap-5 p-2 ">
                <i className="fa-solid fa-code text-3xl rounded-md text-yellow-500 "></i>
                <p className="font-bold text-xl font-playfair">
                  Website Design & Development
                </p>
              </div>
              <span className="">
                I create websites based on your ready-made design. Whether it's
                a landing page or a business card website, I will make it look
                great and work smoothly on any device.
              </span>
            </div>
            <div className="h-10 w-1/2 border-r-2 border-yellow-500 "></div>
            <div className="p-5  mx-5 rounded-md lg:w-3/5 bg-[#0c0c04] border-2 border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white">
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
            <div className="lg:ml-60 lg:w-3/5 p-5 rounded-md border-2 bg-[#0c0c04] border-yellow-500 hover:shadow-[0_0_19px_1px] hover:shadow-amber-500 hover:scale-105 duration-500 hover:bg-opacity-10 hover:bg-white flex flex-col">
              <div className="flex justify-start gap-5 p-2">
                <i className="fa-solid fa-pen-to-square  text-3xl  rounded-md text-yellow-500 "></i>
                <p className="font-bold text-xl font-playfair">
                  Content Writing
                </p>
              </div>
              <span>
                I create engaging, SEO-friendly content tailored to your
                audience. Whether it's blog posts, web copy, or product
                descriptions, my writing ensures your message is clear and
                impactful.
              </span>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* project */}
      <AnimateOnScroll id="project" className="p-5 animate-slideUp" >
        <div className="px-5 py-14 text-center flex  flex-col items-center " id="project">
          <h1 className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
            My Projects
          </h1>
          <span className="text-gray-300 max-w-2xl text-center">
            Here's a selection of projects I've worked on. Each one represents a
            unique challenge, creative process, and innovative solution."
          </span>
          <Project />
        </div>
      </AnimateOnScroll>

      {/* Contact me */}
      <div className=" lg:p-10 px-5 py-10" id="contact">
        <AnimateOnScroll className="animate-slideUp">
          <div className="pb-10 items-center flex  flex-col gap-5">
            <p className=" text-2xl md:text-4xl font-bold  uppercase  text-yellow-500  text-center font-playfair">
              Get In Touch
            </p>
            <span className="text-gray-300 max-w-2xl text-center">
              I'm currently available for freelance work and full-time
              positions. If you have a project that needs some creative work,
              I'd love to hear from you.
            </span>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10 bg-[#24240c]/80">
          <AnimateOnScroll className="animate-fadeIn">
            <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start lg:pl-5">
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
              <div className="py-10 flex flex-col items-center justify-center lg:justify-start lg:items-start">
                <p className="text-2xl md:text-4xl text-white  font-bold font-playfair">
                  Contact With Me
                </p>
                <div className="flex flex-wrap md:space-x-4 gap-3  mt-6 text-xl md:text-2xl text-yellow-500">
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
          </AnimateOnScroll>
          <AnimateOnScroll className="animate-fadeIn">
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>

      {/* Seo */}
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
    </div>
  );
}
