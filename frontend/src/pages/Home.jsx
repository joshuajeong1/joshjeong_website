
import Navbar from '../components/Navbar'
import About from '../components/About'
import { useEffect, useState } from 'react';
function Home() {
    return (
        <div class="text-white min-h-screen">
            <Navbar />
            <div class="flex h-screen flex-col items-center justify-between">
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
            </div>
            
            <section id="about">
                <div class="min-h-screen p-8">
                    <About />
                </div>
            </section>
            <section id="education">

            </section>
            <section id="projects">

            </section>
        </div>
    );
}
export default Home;