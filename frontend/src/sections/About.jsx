import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import Clock from '../components/Clock'
import Spotify from '../components/Spotify'
import GitHubCalendar from 'react-github-calendar'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react';

function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
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
                <motion.div className="flex w-full xl:w-1/2 flex-col justify-center"
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x:0
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    transition={{
                        type: "easeInOut",
                        duration: 0.8,
                    }}
                >
                    <p className="text-center text-lg md:text-xl xl:text-2xl font-bold text-white">Hi! My name is Josh.</p>
                    <p className="text-center xl:text-left mt-8 text-sm md:text-lg xl:text-xl text-white">I'm currently a fourth year student at Arizona State University pursuing a degree in Computer Science. While my primary focus is on fullstack development, I have multiple years of experience in a variety of other programming languages as well. Currently, I am looking to contribute my skills in a professional environment where I can gain valuable experience while creating impactful solutions to real world problems.</p>
                    <p className="text-center xl:text-left mt-8 text-sm md:text-lg xl:text-xl text-white">While I'm not working on projects, I'll usually be at the gym, playing video games, or studying languages.</p>
                    <div className="mt-16 flex justify-center xl:justify-start space-x-3">
                        <div className="flex items-center space-x-5 rounded-md bg-gray-600 p-3">
                            <FaGithub size={24}/>
                            <IoMail size={24} />
                            <FaLinkedin size={24} />
                        </div>
                        <div>
                            <button className="rounded-md bg-emerald-600 p-3 text-white">Download CV</button>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="xl:ml-10 grid w-full xl:w-1/2 grid-cols-2 grid-rows-2 gap-3"
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    whileInView={{
                        opacity: 1,
                        x:0
                    }}
                    viewport={{
                        once: false,
                        amount: 0.4
                    }}
                    transition={{
                        type: "easeInOut",
                        duration: 0.8,
                    }}
                >
                    <div className="rounded-md col-span-2 bg-gray-700"><Spotify /></div>
                    <Clock />
                    <div className="rounded-md bg-gray-700 flex flex-col items-center justify-center h-full">
                        <h2 className="text-center w-full text-2xl font-bold mt-5">GitHub Contributions</h2>
                        <div className={`flex-grow flex items-center justify-center overflow-hidden ${loading ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="scale-60 md:scale-75 lg:scale-85 xl:scale-100">
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
                </motion.div>
            </div>
        </>
    );
}
export default About;