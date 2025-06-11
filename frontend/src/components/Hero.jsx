import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';

function Hero() {
    return (
        <div class="h-screen w-screen bg-gray-950">
            <div class="grid grid-cols-2 gap-x-10 h-screen items-center">
                <div class="pl-50">
                    <p class="text-8xl font-bold text-gray-100">Josh Jeong</p>
                    <p class="mt-8 text-3xl text-gray-300">Fullstack Developer and Software Engineer</p>
                    <p class="mt-16 text-gray-50">I'm an aspiring developer with experience working with a wide variety of different technologies to create vivid, responsive, efficient, and effective applications.</p>
                    <div class="flex justify-start space-x-3 mt-8">
                        <button class="text-gray-100 bg-gray-800 rounded-md p-3">Contact Me</button>
                        <button class="text-gray-950 bg-emerald-400 rounded-md p-3">Download CV</button>
                    </div>
                </div>
                <div class="flex items-center justify-center">
                    <div class="h-130 w-130 rounded-full bg-white">
                            
                    </div>
                </div>
            </div>

            
        </div>
        
    );
}

export default Hero;