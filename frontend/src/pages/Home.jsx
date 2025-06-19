
import Navbar from '../sections/Navbar'
import Skills from '../sections/Skills'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'

function Home() {
    return (
        <div className="text-white min-h-screen">
            <Navbar />
            <Hero />
            <section id="about">
                <div className="h-screen p-20">
                    <About />
                </div>
            </section>
            <section id="skills">
                <div className="min-h-screen p-20 flex flex-col">
                    <Skills />
                </div>
            </section>
            <section id="projects">
                <div className="min-h-screen p-20">
                    <Projects />
                </div>
            </section>
            <section id="contact">
                <div className="min-h-screen flex flex-col items-center p-20">
                    <Contact />
                </div>
            </section>
        </div>
    );
}



export default Home;

