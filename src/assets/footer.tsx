
export default function Footer() {
    return (
        <footer className="w-full bg-black/80 backdrop-blur-md text-white py-8 px-6 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo / Branding */}
                <div className="flex items-center space-x-2">
                    <svg
                        className="w-6 h-6 text-cyan-400"
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
                    <span className="font-bold text-lg tracking-wider">AI Landing</span>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <a
                        href="#features"
                        className="hover:text-cyan-400 transition-colors duration-300"
                    >
                        Features
                    </a>
                    <a
                        href="#about"
                        className="hover:text-cyan-400 transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-cyan-400 transition-colors duration-300"
                    >
                        Contact
                    </a>
                </div>

                {/* Social / Contact */}
                <div className="flex space-x-4">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-300"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-6">
                &copy; {new Date().getFullYear()} AI Landing. All rights reserved.
            </div>
        </footer>
    );
}
