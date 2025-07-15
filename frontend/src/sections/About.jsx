import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import Clock from '../components/Clock'
import Spotify from '../components/Spotify'
import GitHubCalendar from 'react-github-calendar'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react';
import LeftDiv from '../components/LeftDiv'
import RightDiv from '../components/RightDiv'

function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const selectTwoMonths = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 2;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };

    return (
        <>
            <div className="h-full flex flex-col xl:flex-row gap-y-10 items-center xl:space-x-10 my-10 xl:my-0">
                <LeftDiv className="flex w-full xl:w-1/2 flex-col justify-center">
                    <p className="text-center text-lg md:text-xl xl:text-2xl font-bold text-white">Hi! My name is Josh.</p>
                    <p className="text-center xl:text-left mt-8 text-sm md:text-lg xl:text-xl text-white">I'm currently a fourth year student at Arizona State University pursuing a degree in Computer Science. While my primary focus is on fullstack development, I have multiple years of experience in a variety of other programming languages as well. Currently, I am looking to contribute my skills in a professional environment where I can gain valuable experience while creating impactful solutions to real world problems.</p>
                    <p className="text-center xl:text-left mt-8 text-sm md:text-lg xl:text-xl text-white">While I'm not working on projects, I'll usually be at the gym, playing video games, or studying languages.</p>
                    <div className="mt-16 flex justify-center xl:justify-start space-x-3">
                        <div className="flex items-center space-x-5 rounded-md bg-gray-600 p-3">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/joshuajeong1"><FaGithub size={24} className="text-white hover:scale-110 transform transition-transform duration-300" /></a>
                            <a href="mailto:joshua.jeong2@gmail.com"><IoMail size={24} className="text-white hover:scale-110 transform transition-transform duration-300" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joshua-jeong/"><FaLinkedin size={24} className="text-white hover:scale-115 transform transition-transform duration-250" /></a>
                        </div>
                        <div className="flex justify-items-center">
                            <a href="resume.pdf" download className="rounded-md bg-emerald-500 p-3 text-white hover:bg-emerald-600">Download CV</a>
                        </div>
                    </div>
                </LeftDiv>

                <RightDiv className="xl:ml-10 grid w-full xl:w-1/2 grid-cols-2 grid-rows-2 gap-3">
                    <div className="rounded-md col-span-2 bg-gray-700"><Spotify /></div>
                    <Clock />
                    <div className="rounded-md bg-gray-700 flex flex-col items-center justify-center h-full">
                        <h2 className="text-center w-full text-2xl font-bold mt-5">GitHub Contributions</h2>
                        <div className={`flex-grow flex items-center justify-center overflow-hidden ${loading ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="scale-55 md:scale-70 lg:scale-75 xl:scale-80 2xl:scale-93 3xl:scale-100">
                                <GitHubCalendar 
                                    username="joshuajeong1"
                                    blockSize={30}
                                    blockMargin={4}
                                    fontSize={16}
                                    transformData={selectTwoMonths}
                                    labels={{
                                        totalCount: '{{count}} contributions in the last two months',
                                    }}
                                    hideColorLegend={true}
                                />
                            </div>
                        </div>
                    </div>
                </RightDiv>
            </div>
        </>
    );
}
export default About;