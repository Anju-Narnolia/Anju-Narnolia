
import img1 from "../favicon/favicon-32x32.png"
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full text-white text-xl font-semibold bg-gray-900">
            <div className='flex w-full gap-10'>
                <div className=" m-5  w-1/3 flex flex-col gap-5 justify-center">
                    <div className="flex gap-2 items-center">
                        <img src={img1} alt="A"/>
                        <p className="text-yellow-500 text-xl uppercase">Anju Narnolia</p>
                    </div>
                    <p className="text-sm">Thank you for visiting! Let’s connect and create something amazing. Explore my work or reach out for collaborations. Built with passion—because great ideas deserve great execution!</p>
                    <div className="flex text-center gap-2">
                        <a className="px-3 py-2 rounded-full" href='https://www.linkedin.com/in/anju-narnolia-' style={{ backgroundColor: "#0A66C2" }} ><i className="fa-brands fa-linkedin text-3xl  "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://github.com/Anju-Narnolia' style={{ backgroundColor: "#181717" }}><i className="fa-brands fa-github text-3xl  "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://in.pinterest.com/Anju_Narnolia/' style={{ backgroundColor: "#FF0000" }}><i className="fa-brands fa-pinterest text-3xl   "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://www.instagram.com/anju__narnolia/' style={{ backgroundImage: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}><i className="fa-brands fa-instagram text-3xl  "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://twitter.com/AnjuNarnolia' style={{ backgroundColor: "#000000" }}><i className="fa-brands fa-twitter text-3xl  "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://www.youtube.com/@anjunarnoli93750' style={{ backgroundColor: "#FF0000" }}><i className="fa-brands fa-youtube text-3xl   "></i></a>
                        <a className="px-3 py-2 rounded-full" href='https://discordapp.com/users/1122350439489351812' style={{ backgroundColor: "#36393F" }}><i className="fa-brands fa-discord text-3xl   "></i></a>
                    </div>
                </div>
                <div className=" flex text-center flex-col w-1/3 m-5">
                    <p className="p-2 text-xl font-bold uppercase text-yellow-500">Quick Links</p>
                    <a className="hover:underline hover:text-gray-400 p-1" href="/">Home</a>
                    <a className="hover:underline hover:text-gray-400 p-1" href="/">About Me</a>
                    <a className="hover:underline hover:text-gray-400 p-1" href="/">Skills</a>
                    <a className="hover:underline hover:text-gray-400 p-1" href="/project">Project</a>
                    <a className="hover:underline hover:text-gray-400 p-1" href="/contact">Contact</a>
                </div>


                <div className=" m-5 flex flex-col w-1/3 items-center">
                    <div>
                        <p className="p-2 text-xl font-bold uppercase text-yellow-500 ">
                            Contact Information
                        </p>
                    </div>
                    <div className="items-center">
                        <p className="text-sm">Email:</p>
                        <div className="flex gap-2 items-center ml-2">
                            <i className="fa-solid fa-envelope text-yellow-500 text-xl"></i>
                            <a href="mailto:anjunarnolia93750@example.com" className="text-sm text-gray-400">anjunarnolia93750@gmail.com</a>
                        </div>
                        <p className="text-sm">Phone No:</p>
                        <div className="flex gap-2 items-center ml-2">
                            <i className="fa-solid fa-phone text-yellow-500 text-xl"></i>
                            <a href="tel:+919728293750" className="text-sm text-gray-400">+91 9728293750</a>
                        </div>
                        <p className="text-sm">Address:</p>
                        <div className="flex gap-2 items-center ml-2">
                            <i className="fa-solid fa-location-dot text-yellow-500 text-xl"></i>
                            <p className="text-sm text-gray-400">Charkhi Dadri , Haryana</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-500 " />
            <div className=' flex justify-center p-5'>
                <span className=" md:text-xl  lg:text-xl ">Code by me, for you! &copy;  {currentYear} Anju Narnolia . All rights preserved.</span>
            </div>
        </div >
    )
}
