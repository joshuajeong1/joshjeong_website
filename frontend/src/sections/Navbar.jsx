function Navbar() {
    return (
        <div className="absolute top-0 left-0 w-full">
            <div className="flex items-center justify-between space-x-10 p-10">
                <p className="flex h-8 w-8 items-center justify-center rounded-md border p-10">J</p>
                <div>
                    <nav className="flex space-x-10 font-bold">
                        <a href="#about" className="hover:text-blue-500">About</a>
                        <a href="#skills" className="hover:text-blue-500">Skills</a>
                        <a href="#projects" className="hover:text-blue-500">Projects</a>
                        <a href="#contact" className="hover:text-blue-500">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Navbar;