import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState } from 'react';

function Hero() {
    const [viewportHeight, setViewportHeight] = useState(0);
    useEffect(() => {
        const updateHeight = () => setViewportHeight(window.innerHeight);
        updateHeight(); // initial call
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, viewportHeight], [1, 0]);

    return (
        <motion.div style={{ opacity }} class="flex flex-col items-center justify-center h-screen">
            <div class="mt-auto mb-auto flex flex-col items-start">
                <p class="my-10 font-bold">I'm Josh Jeong, a software engineer and fullstack developer</p>
                <p class="font-mono text-4xl font-bold">
                I create
                <span class="animate-gradient bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500 bg-clip-text text-transparent"> vivid</span>
                </p>
                <p class="my-3 font-mono text-4xl font-bold">and <span class="text-blue-400 hover:border-b">dynamic</span> user experiences.</p>
            </div>
            <a href="#about" class="mb-4 animate-bounce">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </motion.div>
    );
}
export default Hero;