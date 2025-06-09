
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'

function Home() {
    return (
        <div class="text-white min-h-screen">
            <Navbar />
            <Hero />
            <section id="about">
                <div class="min-h-screen p-20">
                    <About />
                </div>
            </section>
            <section id="skills">
                <div class="min-h-screen p-20">
                    <Skills />
                </div>
            </section>
            <section id="projects">
                <div class="min-h-screen p-20">
                    <Projects />
                </div>
            </section>
        </div>
    );
}



export default Home;

