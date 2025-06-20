
import Navbar from '../sections/Navbar'
import Skills from '../sections/Skills'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
function Home() {
    return (
        <div className="text-white min-h-screen">
            <Navbar />
            <Hero />
            <section id="about">
                <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
                    <About />
                </div>
            </section>
            <section id="skills">
                <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 flex flex-col items-center xl:items-start">
                    <Skills />
                </div>
            </section>
            <section id="projects">
                <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
                    <Projects />
                </div>
            </section>
            <section id="contact">
                <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20">
                    <div className="flex-grow flex items-center justify-center">
                        <Contact />
                    </div>
                    <Footer />
                </div>
            </section>
        </div>
    );
}



export default Home;

