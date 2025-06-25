import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';

function Hero() {
    return (
        <div className="min-h-screen w-screen bg-gray-950">
            <div className="pt-[150px] xl:pt-0 xl:grid gap-y-10 flex flex-col xl:grid-cols-2 xl:gap-x-10 min-h-screen items-center w-full">
                <div className="order-2 xl:order-1 px-12 xl:px-[150px]">
                    <p className="text-center xl:text-left text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold text-emerald-500 text-shadow-[0_0_10px_#10b981]">Josh Jeong</p>
                    <p className="text-center xl:text-left mt-8 text-xl sm:text-2xl xl:text-3xl text-gray-300">Fullstack Developer and Software Engineer</p>
                    <p className="text-center xl:text-left mt-8 text-sm sm:text-base text-gray-50 max-w-prose">I'm an aspiring developer with experience working with a wide variety of different technologies to create vivid, responsive, efficient, and effective applications.</p>
                    <div className="justify-center xl: flex xl:justify-start space-x-3 mt-8">
                        <a href="#contact" className="text-gray-100 bg-gray-800 rounded-md p-3 hover:bg-gray-900">Contact Me</a>
                    </div>
                </div>
                <div className="order-1 xl:order-2 flex items-center justify-center">
                    <div className="h-48 w-48 sm:h-64 sm:w-64 xl:h-80 xl:w-80 2xl:h-120 2xl:w-120 rounded-full overflow-hidden border-gray-400 border-3">
                        
                        <img src="joshjeong.jpg" className="transform translate-x-10 scale-150 xl:scale-125 2xl:scale-120" />
                    </div>
                </div>
            </div>

            
        </div>
        
    );
}

export default Hero;