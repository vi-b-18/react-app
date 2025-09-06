import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Spinning Wheel Logo */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    {/* Wheel */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-10 h-10 relative rounded-full border-4 border-gray-300 flex items-center justify-center"
                    >
                        {/* Inner hub */}
                        <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                        {/* Spokes */}
                        <div className="absolute w-10 h-10 flex items-center justify-center">
                            <div className="w-0.5 h-10 bg-gray-300 rotate-45 origin-center absolute"></div>
                            <div className="w-0.5 h-10 bg-gray-300 -rotate-45 origin-center absolute"></div>
                        </div>
                    </motion.div>

                    {/* Brand name */}
                    <span className="text-2xl font-bold tracking-wide">AutoGear</span>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    <Link to="/" className="hover:text-red-400 transition">Home</Link>
                    <Link to="/accessories" className="hover:text-red-400 transition">Products</Link>
                    <Link to="/about" className="hover:text-red-400 transition">About</Link>
                    <Link to="/contact" className="hover:text-red-400 transition">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow-lg transition"
                        onClick={() => navigate("/accessories")}
                    >
                        <ShoppingCart size={18} />
                        Shop Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
                    <Link to="/" onClick={() => setOpen(false)} className="block hover:text-red-400 transition">Home</Link>
                    <Link to="/accessories" onClick={() => setOpen(false)} className="block hover:text-red-400 transition">Products</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-red-400 transition">About</Link>
                    <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-red-400 transition">Get In Touch</Link>
                    <button
                        className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full shadow-lg transition"
                        onClick={() => { navigate("/accessories"); setOpen(false); }}
                    >
                        <ShoppingCart size={18} />
                        Shop Now
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
