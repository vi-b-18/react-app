import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const streaks = Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        width: Math.random() * 2 + 1,
        height: Math.random() * 150 + 100,
        color: ["#00FFFF", "#FF0000", "#FFD700"][i % 3],
    }));

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white min-h-screen">
            {streaks.map((streak, i) => (
                <motion.div
                    key={i}
                    className="absolute top-0"
                    style={{
                        left: streak.left,
                        width: `${streak.width}px`,
                        height: `${streak.height}px`,
                        backgroundColor: streak.color,
                        opacity: 0.5,
                        borderRadius: "50%",
                    }}
                    animate={{ y: ["-150%", "110%"] }}
                    transition={{
                        duration: 6 + Math.random() * 4,
                        repeat: Infinity,
                        delay: streak.delay,
                        ease: "linear",
                    }}
                />
            ))}

            <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Upgrade Your Ride <br /> with <span className="text-red-500">Style</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl text-lg text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Discover premium car accessories to boost performance, style, and durability.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-xl"
                    onClick={() => navigate("/accessories")}
                >
                    Shop Now
                </motion.button>
            </section>

            <section className="py-20 px-10 grid md:grid-cols-3 gap-10 bg-gray-900">
                {[
                    { title: "Premium Quality", desc: "Top-notch materials for long-lasting performance." },
                    { title: "Fast Delivery", desc: "Get your car parts shipped quickly and safely." },
                    { title: "Modern Design", desc: "Parts that enhance style and functionality." },
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-red-400">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                    </motion.div>
                ))}
            </section>

            <section className="py-20 text-center bg-gradient-to-r from-red-600 to-red-800">
                <motion.h3
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-6"
                >
                    Ready to Upgrade Your Car?
                </motion.h3>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-8 py-4 bg-white text-red-600 rounded-full font-bold shadow-lg"
                    onClick={() => navigate("/accessories")}
                >
                    Start Shopping
                </motion.button>
            </section>
        </div>
    );
};

export default LandingPage;
