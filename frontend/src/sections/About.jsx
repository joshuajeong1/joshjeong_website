import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import Clock from '../components/Clock'
import Spotify from '../components/Spotify'
function About() {
    return (
        <>
            <div className="h-full flex items-center space-x-10">
                <div className="flex w-1/2 flex-col">
                    <p className="text-2xl font-bold text-white">Hi! My name is Josh.</p>
                    <p className="mt-8 text-xl text-white">I'm currently a fourth year student at Arizona State University pursuing a degree in Computer Science. While my primary focus is on fullstack development, I have multiple years of experience in a variety of other programming languages as well. Currently, I am looking to contribute my skills in a professional environment where I can gain valuable experience while creating impactful solutions to real world problems.</p>
                    <p className="mt-8 text-xl text-white">While I'm not working on projects, I'll usually be at the gym, playing video games, or studying foreign languages.</p>
                    <div className="mt-16 flex justify-start space-x-3">
                        <div className="flex items-center space-x-5 rounded-md bg-gray-600 p-3">
                            <FaGithub size={24}/>
                            <IoMail size={24} />
                            <FaLinkedin size={24} />
                        </div>
                        <div>
                            <button className="rounded-md bg-emerald-600 p-3 text-white">Download CV</button>
                        </div>
                    </div>
                </div>

                <div className="ml-10 grid w-1/2 grid-cols-2 grid-rows-2 gap-3">
                    <div className="rounded-md col-span-2 bg-gray-700"><Spotify /></div>
                    <Clock />
                    <div className="rounded-md bg-gray-700"></div>
                </div>
            </div>
        </>
    );
}
export default About;