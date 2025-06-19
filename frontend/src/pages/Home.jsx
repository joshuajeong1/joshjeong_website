
import Navbar from '../sections/Navbar'
import Skills from '../sections/Skills'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'

function Home() {
    return (
        <div className="text-white min-h-screen">
            <Navbar />
            <Hero />
            <section id="about">
                <div className="min-h-screen p-20">
                    <About />
                </div>
            </section>
            <section id="skills">
                <div className="min-h-screen p-20">
                    <Skills />
                </div>
            </section>
            <section id="projects">
                <div className="min-h-screen p-20">
                    <Projects />
                </div>
            </section>
        </div>
    );
}



export default Home;

