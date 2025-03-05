import { useState } from "react";
import img from "../img/5287326.jpg"
function Project() {
    const [readmore, setReadMore] = useState(false);
    function readmorehanderler() {
        setReadMore(!readmore);
    }
    function handleMouseLeave() {
        setReadMore(false);
    }
    const description1 = `A mobile-friendly platform to locate nearby recycling facilities, improving 
   accessibility and driving recycling center visits. Features include login, rewards, and multiple 
   service pages for an enhanced user experience`;

    return (
        <div div className=" w-full">
            <div className="p-10 flex flex-col justify-center items-center">
                {/* Project 1 */}
                <div className=" align-center border rounded-lg shadow-lg overflow-hidden m-3 hover:scale-105 transition-transform duration-500 p-2 bg-gray-50 flex w-10/12" onMouseLeave={handleMouseLeave}>
                    <div className="w-1/2"> <img src={img} alt="E-Waste Facility Locator" className="w-full h-72 object-cover" /></div>
                    <div className="p-4 w-1/2 items-center">
                        <div className="flex gap-2">
                            <p className="px-4 py-2 bg-blue-500 rounded-md text-white"> UI/UX Design</p>
                            <p className="px-4 py-2 bg-blue-500 rounded-md text-white"> Web Design</p>
                            <p className="px-4 py-2 bg-blue-500 rounded-md text-white"> WordPress</p>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-cyan-700">E-Waste Facility Locator</h3>
                        <p className="text-gray-700 mb-4">
                            {readmore ? description1 : `${description1.substring(0, 160)}`}
                            <span className=" text-cyan-700 cursor-pointer hover:underline font-semibold" onClick={readmorehanderler}>
                                {readmore ? ' Show Less' : ' Read More'}</span></p>
                        <p className="text-sm text-cyan-700  mb-4 font-bold">Tech Stack: HTML, CSS, JavaScript, Firebase.</p>
                        <div className="flex justify-center gap-20">
                            <p className="border-cyan-700 border-b-2 font-bold rounded-md p-2 cursor-pointer">
                                <a href="https://www.freelancer.com/" target="_blank" rel="noopener noreferrer" >View Live </a></p>
                            <p className=" border-cyan-700  border-b-2 font-bold  rounded-md p-2 cursor-pointer">
                                <a href="https://www.freelancer.com/" target="_blank" rel="noopener noreferrer" >View Code  </a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Project;