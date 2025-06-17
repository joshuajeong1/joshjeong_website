import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import Clock from '../components/Clock'

function About() {
    return (
        <>
            <div class="flex space-x-10 grow">
                <div class="mt-10 flex w-1/2 flex-col justify-center">
                    <p class="text-2xl font-bold text-white">Hi! My name is Josh.</p>
                    <p class="mt-8 text-xl text-white">I'm currently a fourth year student at Arizona State University pursuing a degree in Computer Science. While my primary focus is on fullstack development, I have multiple years of experience in a variety of other programming languages as well. Currently, I am looking to contribute my skills in a professional environment where I can gain valuable experience while creating impactful solutions to real world problems.</p>
                    <p class="mt-8 text-xl text-white">When I'm not working on projects, you can find me at the gym, playing video games, or studying my third language.</p>
                    <div class="mt-16 flex justify-start space-x-3">
                        <div class="flex items-center space-x-5 rounded-md bg-gray-600 p-3">
                            <FaGithub size={24}/>
                            <IoMail size={24} />
                            <FaLinkedin size={24} />
                        </div>
                        <div>
                            <button class="rounded-md bg-gray-600 p-3 text-white">Download Resume</button>
                        </div>
                    </div>
                </div>

                <div class="m-10 grid w-1/2 grid-cols-2 grid-rows-2 gap-3">
                    <div class="col-span-2 flex flex-col items-center rounded-md bg-gray-700 p-5"></div>
                    <div class="rounded-md bg-gray-700"><Clock /></div>
                    <div class="rounded-md bg-gray-700"></div>
                    <div class="rounded-md bg-gray-700"></div>
                </div>
            </div>
        </>
    );
}
export default About;