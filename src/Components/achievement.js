import myPhoto from "../img/myPhoto.jpg";
import { Timeline } from "../Components/ui/timeline";

export default function Achievement() {
  const data = [
    {
      title: " June 2025 ",
      content: (
        <div>
          <p className="mb-4 lg:text-md font-normal text-neutral-400 md:text-sm text-xs ">
            {" "}
            MERN Stack Developer At{" "}
            <strong className="text-yellow-500/50">Tellis Technologies</strong>
          </p>
          <p className="mb-4 lg:text-md font-normal text-neutral-400 md:text-sm text-xs">
            {" "}
            Developed and maintained web applications using the MERN stack,
            ensuring high performance and scalability. Also, explored and
            implemented AI tools to enhance user experiences and drive business
            growth.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://tellis-ai-1uog.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927742/Screenshot_2025-08-11_at_9.11.44_PM_gmdpfu.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
            <a
              href="https://gotellis.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927744/Screenshot_2025-08-11_at_9.12.46_PM_ubat26.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "May 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md">
            Freelanced for startup{" "}
            <strong className="text-yellow-500/50">DriverRidey</strong>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md">
            Developed a responsive and visually appealing UI website using React
            and Tailwind CSS, focusing on seamless navigation, modern
            aesthetics, and cross-device compatibility to enhance user
            engagement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://driverridey.netlify.app/" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927753/Screenshot_2025-08-11_at_9.12.12_PM_poywsp.png"
                alt="startup template"
                width={500}
                height={500}
              />{" "}
            </a>
            <a href="https://driverridey.netlify.app/" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927746/Screenshot_2025-08-11_at_9.13.51_PM_gvyi1u.png"
                alt="startup template"
                width={500}
                height={500}
              />{" "}
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md">
            Web Developer At{" "}
            <strong className="text-yellow-500/50">Digital Tatsat</strong>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md ">
            I built and optimized responsive websites using WordPress, HTML,
            CSS, and JavaScript. I also contributed to developing modern
            projects with React and Tailwind CSS, enhancing user experience and
            functionality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://saloon-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754927753/Screenshot_2025-08-11_at_9.14.41_PM_gzneg5.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md">
            Open Source Contributor{" "}
            <strong className="text-yellow-500/50">GSSoC Extended</strong>
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-400 md:text-sm lg:text-md">
            Contributed to the development of open-source projects, focusing on
            improving code quality, documentation, and community engagement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754928881/Anju_Narnolia_Cert_Contributor_GSSoC2024Extd_kiwa2g.png" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754928680/Anju_Narnolia_Cert_Contributor_GSSoC2024Extd_yicgdr.png"
                alt="startup template"
                width={500}
                height={500}
              />{" "}
            </a>
            <a href="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754928189/GSSoC24_Stats_pvtgft.png" target="_blank" rel="noreferrer">
              <img
                src="https://res.cloudinary.com/ddmdhrwiu/image/upload/v1754928189/GSSoC24_Stats_pvtgft.png"
                alt="startup template"
                width={500}
                height={500}
              />{" "}
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      {/* About me */}
      <div className="p-6 lg:p-20" id="about">
        <div className="flex justify-center gap-16 flex-col lg:flex-row px-3 lg:py-10 py-5 bg-gradient-to-br from-[#0c0c04] to-yellow-600/20  via-[#0c0c04]/80 rounded-lg animate-fadeIn">
          <div className="w-full flex justify-center lg:w-1/2">
            <div className="relative">
              <div className="md:w-96 md:h-96 w-60 h-60 rounded-full overflow-hidden border-4 border-yellow-500 animate-fade-in">
                <img src={myPhoto} alt="me" />
              </div>
              <div className="absolute top-0 md:w-96 md:h-96 w-60 h-60 rounded-full border border-yellow-500 animate-glow"></div>
            </div>
          </div>
          <div className="lg:w-1/2 md:p-5 text-white text-sm md:text-[20px] flex flex-col gap-4 font-light ">
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
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </>
  );
}
