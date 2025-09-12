import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    // Background car logos
    const logos = [
        "https://cdn.dribbble.com/userupload/26788565/file/still-955adafbfa0e3b92a5cd699728a24755.png",
        "https://i.ebayimg.com/images/g/Ek0AAOSwK9RjtkXk/s-l400.jpg",
        "https://i.pinimg.com/736x/52/af/bf/52afbfeb6294f24e715a00367be3cdf3.jpg",
        "https://i.pinimg.com/736x/df/9f/15/df9f151e7c0d331b1c538b67cd9e925c.jpg",
        "https://static.vecteezy.com/system/resources/previews/020/336/454/non_2x/ford-logo-ford-icon-free-free-vector.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmLtErRgA9ZKbUljNmqa8d0P23GuBJKinV6jyf96J1IsOMbooZt8WFfqpnKSD1KbQHhE&usqp=CAU",
        "https://coxauto.com.au/wp-content/uploads/2024/08/content-land-rover-02-950x583.jpg",
        "https://thetruecolors.org/wp-content/uploads/2022/07/mazda-logo-font-free-download.jpg",
        "https://www-asia.nissan-cdn.net/content/dam/Nissan/AU/Images/about-nissan/news/2020/07/logo-story-carousel-4-2400x1198.jpg.ximg.l_12_m.smart.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y21zlGuRFb17bqmTflPgRawaiR5TkSelBQ&s",
        "https://www.thecarexpert.co.uk/wp-content/uploads/2019/09/embedded2762899.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAn8x8YzTfxPbR2ogWxmnbQnZEiaK6XLQxg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWuSwGDGnNwGlE4hLzO09A-YshDaeZG_sbA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnjpF34JytIkaFdGa4RMv6K4wp3FVPcRVdyqAnzMPEcYTsf3wvOQOSpuJTxHKLvnzmQA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN5K60A5LSJvwb01QlNdHM6-mwsz4BL6xuA&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Aston_Martin_badge_on_a_car.jpg/1280px-Aston_Martin_badge_on_a_car.jpg"
    ];
    return (
        <div className="relative overflow-hidden bg-black text-white min-h-screen">
            {/* Background logos covering full screen */}
            <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-10 place-items-center z-0 mt-4">
                {logos.map((logo, i) => (
                    <motion.img
                        key={i}
                        src={logo}
                        alt="car brand"
                        className="w-24 md:w-32 lg:w-40 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Upgrade Your Ride <br /> with{" "}
                    <span className="text-red-500">Style</span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl text-lg text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Discover premium car accessories to boost performance, style,
                    and durability.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold shadow-xl"
                    onClick={() => navigate("/accessories")}
                >
                    Shop Now
                </motion.button>
            </section>

            {/* Features Section */}
            <section className="py-20 px-10 grid md:grid-cols-3 gap-10 bg-gray-900 relative z-10">
                {[
                    {
                        title: "Premium Quality",
                        desc: "Top-notch materials for long-lasting performance.",
                    },
                    {
                        title: "Fast Delivery",
                        desc: "Get your car parts shipped quickly and safely.",
                    },
                    {
                        title: "Modern Design",
                        desc: "Parts that enhance style and functionality.",
                    },
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
                        <h3 className="text-xl font-semibold mb-4 text-red-400">
                            {feature.title}
                        </h3>
                        <p className="text-gray-300">{feature.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-20 text-center bg-gradient-to-r from-red-600 to-red-800 relative z-10">
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
