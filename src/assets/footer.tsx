import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">AutoGear</h2>
                    <p className="mt-3 text-gray-400">
                        Premium car accessories to enhance style, comfort, and performance.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-red-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessories" className="hover:text-red-400 transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-red-400 transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-red-400 transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Get in Touch</h3>
                    <p>Email: support@autogear.com</p>
                    <p>Phone: +1 (800) 123-4567</p>
                    <p className="mt-2">123 Auto Street, Car City</p>
                </div>
            </div>

            <div className="border-t border-gray-800 py-6 text-center text-gray-500">
                © {new Date().getFullYear()} AutoGear. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
