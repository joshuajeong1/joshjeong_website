import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'

function Navbar() {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);


    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();
        if(latest > prev && latest > 150) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
    });

    return (
        <motion.div className="sticky top-0 left-0 w-full y-10 z-50 overflow-hidden bg-gray-950"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%"}
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{
                duration: 0.5,
                ease: "easeInOut"
            }}
        >
            <div className="flex items-center justify-between space-x-10 p-10">
                <a href="#" className="text-white font-bold text-sm md:text-lg xl:text-xl">joshjeong<span className="text-fuchsia-400">.</span><span className="text-teal-400">dev</span></a>
                <div>
                    <nav className="flex space-x-2 sm:space-x-5 md:space-x-10 md:text-md font-bold text-sm xl:space-x-15 xl:text-lg">
                        <a href="#about" className="relative inline-block text-white hover:text-emerald-100 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">About</a>
                        <a href="#skills" className="relative inline-block text-white hover:text-emerald-100 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">Skills</a>
                        <a href="#projects" className="relative inline-block text-white hover:text-emerald-100 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
                        <a href="#contact" className="relative inline-block text-white hover:text-emerald-100 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
                    </nav>
                </div>
            </div>
        </motion.div>
    );
}
export default Navbar;