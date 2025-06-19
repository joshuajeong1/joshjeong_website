import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';

function Hero() {
    return (
        <div className="h-screen w-screen bg-gray-950">
            <div className="grid grid-cols-2 gap-x-10 h-screen items-center">
                <div className="pl-50">
                    <p className="text-8xl font-bold text-gray-100">Josh Jeong</p>
                    <p className="mt-8 text-3xl text-gray-300">Fullstack Developer and Software Engineer</p>
                    <p className="mt-16 text-gray-50">I'm an aspiring developer with experience working with a wide variety of different technologies to create vivid, responsive, efficient, and effective applications.</p>
                    <div className="flex justify-start space-x-3 mt-8">
                        <button className="text-gray-100 bg-gray-800 rounded-md p-3">Contact Me</button>

                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="h-130 w-130 rounded-full bg-white">
                            
                    </div>
                </div>
            </div>

            
        </div>
        
    );
}

export default Hero;