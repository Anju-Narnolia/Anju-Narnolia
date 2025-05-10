import { motion } from "framer-motion";
const projects = [
  {
    id: "1",
    title: "DriverRidy",
    Search: "react",
    description:
      "A platform connecting car owners with drivers. Features real-time chat and a booking system.",
    techStack: "React.js, Firebase,TailwindCss",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1745791565/Screenshot_2025-04-01_at_6.16.32_PM_eqjqqf.png",
    githubLink: "https://github.com/Anju-Narnolia/DriverRidey",
    viewLink: "https://driverridey.netlify.app/",
  },
  // {
  //   id: "2",
  //   title: "Ecommerce Platform",
  //   Search: "react",
  //   description:
  //     "A modern eCommerce website with product listings, search functionality, and a seamless shopping experience.",
  //   techStack: "React.js, Next.js",
  //   img: "https://via.placeholder.com/300",
  //   githubLink: "https://github.com/username/ecommerce-platform",
  //   viewLink: "https://ecommerce-platform-demo.com",
  // },

  {
    id: "4",
    title: "ReadNews",
    Search: "react",
    description:
      "A responsive news platform allowing users to browse the latest news across various categories with real-time updates.",
    techStack: "React.js, Bootstrap, NewsAPI",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1746883711/Screenshot_2025-05-10_at_6.34.50_PM_ceedtd.png",
    githubLink: "https://github.com/Anju-Narnolia/ReadNews",
    viewLink: "https://read-news.vercel.app/",
  },

  {
    id: "6",
    title: "US School Pataudi",
    Search: "wordpress",
    description:
      "A dynamic and user-friendly school website designed using WordPress and Elementor, showcasing admissions, academics, gallery, and contact information with a modern layout.",
    techStack: "WordPress, Elementor",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1746883714/Screenshot_2025-05-10_at_6.51.11_PM_un26yb.png",
    viewLink: "https://digitaltatsat.com/UPSCAKHADA/home/",
  },
  {
    id: "7",
    title: "GreenCardVisa Services",
    Search: "wordpress",
    description:
      "A professional immigration service website built using WordPress and Elementor, offering information on green card eligibility, application steps, and consultation booking with a clean and modern design.",
    techStack: "WordPress, Elementor",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1746883714/Screenshot_2025-05-10_at_6.57.37_PM_fpg7ti.png",
    viewLink: "https://www.greencardvisaservices.com/",
  },
  {
    id: "3",
    title: "GlamourSalon",
    Search: "html",
    description:
      "A modern and elegant salon website featuring service listings, pricing, testimonials, and a booking form with interactive UI animations.",
    techStack: "HTML, CSS, JavaScript",
    img: "https://res.cloudinary.com/ddmdhrwiu/image/upload/v1746883713/Screenshot_2025-05-10_at_6.32.54_PM_dutdlf.png",
    githubLink: "https://github.com/Anju-Narnolia/saloon",
    viewLink: "https://saloon-two.vercel.app/",
  },
];

function ProjectG({ result }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:p-16 py-4 ">
      {projects
        .filter((project) => result === "all" || project.Search === result)
        .map((project) => (
          <motion.div
            key={project.id}
            className="relative w-full h-64 overflow-hidden rounded-lg group border border-gray-600"
          >
            <motion.img
              src={project.img}
              alt={project.title}
              className=" w-full h-full object-cover"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000">
              <div className="p-5 text-center w-full flex-col flex gap-2">
                <h3 className="mb-2 text-2xl font-bold text-yellow-500">
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <div className=" flex flex-row gap-3 justify-center">
                  <p>
                    {project.techStack.split(",").map((tech, index) => (
                      <button
                        className="border border-yellow-500/80 px-3 py-2 m-1 hover:bg-yellow-500/30 cursor-default"
                        key={index}
                      >
                        {tech}
                      </button>
                    ))}
                  </p>
                </div>
                <div className="flex gap-3 justify-center">
                 
                    <a
                      href={project.githubLink}
                      className=" text-yellow-500 py-1 px-3 rounded hover:text-white font-bold"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  
                  <a
                    href={project.viewLink}
                    className=" text-yellow-500 py-1 px-3 rounded  hover:text-white font-bold"
                  >
                    <i className="fa-solid fa-share"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
}
export default ProjectG;
