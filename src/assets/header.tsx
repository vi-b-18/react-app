

export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-md px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <svg
                    className="w-8 h-8 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L15 8l6 1-4 4 1 6-5-3-5 3 1-6-4-4 6-1 3-6z"
                    ></path>
                </svg>
                <span className="text-white text-xl font-bold tracking-wider">
          AI Landing
        </span>
            </div>

            {/* Navigation */}
            <nav className="space-x-6 hidden md:flex">
                <a
                    href="#features"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                    Features
                </a>
                <a
                    href="#about"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                    About
                </a>
                <a
                    href="#contact"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                    Contact
                </a>
            </nav>

            {/* Action button */}
            <div>
                <button className="px-5 py-2 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-300">
                    Get Started
                </button>
            </div>
        </header>
    );
}
