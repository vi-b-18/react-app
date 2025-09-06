import { motion } from "framer-motion";

interface Accessory {
    name: string;
    description: string;
    price: string;
    img: string;
}

const accessories: Accessory[] = [
    {
        name: "LED Headlights",
        description: "Brighten up your ride with premium LED headlights.",
        price: "$120",
        img: "https://halo-headlights.com/wp-content/uploads/2019/02/haloheadlights.jpg",
    },
    {
        name: "Racing Wheels",
        description: "High-performance alloy wheels for style and speed.",
        price: "$350",
        img: "https://cdn.prod.website-files.com/6774165e76d16adf79c5993f/67d9a35c97c8cb89d2fd1f5f_vossen-vossen-diski.webp",
    },
    {
        name: "Carbon Fiber Spoiler",
        description: "Enhance aerodynamics and sporty look.",
        price: "$200",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8ZFs6Aq_MIZzOf371rw-2278cGYh-S0SGA&s",
    },
    {
        name: "Custom Tires",
        description: "Durable tires optimized for performance.",
        price: "$400",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_G4a8bKqJvO9L3LT32HhObht7GGLuMAob8w&s",
    },
    {
        name: "LED Interior Lights",
        description: "Illuminate your car interior with style.",
        price: "$50",
        img: "https://m.media-amazon.com/images/I/618mFgCxViL._UF1000,1000_QL80_.jpg",
    },
    {
        name: "Exhaust System",
        description: "Upgrade sound and performance with premium exhaust.",
        price: "$500",
        img: "https://www.racingpowersports.com/media/catalog/product/cache/32e0165370a3a7cc3f363435381c2d63/r/p/rp_race_vortex_yfz450r.jpg",
    },
];

const AccessoriesPage: React.FC = () => {
    return (
        <div className="bg-gray-950 text-white min-h-screen">
            <section className="py-16 px-6 md:px-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Car Accessories
                </h1>
                <p className="text-gray-300 text-center mb-12">
                    Upgrade your ride with premium parts and accessories
                </p>

                <div className="grid gap-10 md:grid-cols-3">
                    {accessories.map((item, index) => (
                        <motion.div
                            key={item.name}
                            className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <p className="text-gray-300 mb-4">{item.description}</p>
                                <div className="flex justify-between items-center">
                  <span className="font-bold text-red-500 text-lg">
                    {item.price}
                  </span>
                                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AccessoriesPage;
