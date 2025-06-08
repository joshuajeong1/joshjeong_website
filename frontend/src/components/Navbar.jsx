function Navbar() {
    return (
        <div class="absolute top-0 left-0 w-full">
            <div class="flex items-center justify-between space-x-10 p-10">
                <p class="flex h-8 w-8 items-center justify-center rounded-md border p-10">J</p>
                <div>
                    <nav class="flex space-x-10 font-bold">
                        <a href="#about" class="hover:text-blue-500">About</a>
                        <a href="#experience" class="hover:text-blue-500">Experience</a>
                        <a href="#work" class="hover:text-blue-500">Work</a>
                    </nav>
                </div>
            </div>
        </div>
        
    );
}
export default Navbar;