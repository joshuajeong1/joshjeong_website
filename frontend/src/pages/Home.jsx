
import Navbar from '../components/Navbar'
function Home() {
    return (
        <div class="bg-gray-950 text-white min-h-screen">
            <Navbar />
            <div class="flex h-screen flex-col items-center justify-center">
                <div class="flex flex-col items-start">
                    <p class="font-mono text-4xl font-bold">Creating <span class="animate-gradient bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500 bg-clip-text text-transparent">vivid</span></p>
                    <p class="my-10 font-mono text-4xl font-bold">and <span class="text-blue-400">dynamic</span> user experiences</p>
                    <p class="font-bold">I'm Josh Jeong, a software and fullstack developer.</p>
                </div>
            </div>
            
            <section id="about">
                <div>
                    <p>Test File</p>
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