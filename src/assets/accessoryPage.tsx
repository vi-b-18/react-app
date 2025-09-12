import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

interface Product {
    pid: number;
    pname: string;
    price: number;
    description: string;
    url: string;
}

const AccessoriesPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("carparts")
                .select("*");

            if (error) {
                console.log("Error:", error);
            } else {
                console.log("Fetched products:", data);
                setProducts(data ?? []);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <section className="py-16 px-6 md:px-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight">
                    Car Accessories
                </h1>
                <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    Upgrade your ride with premium parts and accessories. Find the
                    best quality parts to enhance performance and style.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((item, index) => (
                        <motion.div
                            key={item.pid}
                            className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.url}
                                alt={item.pname}
                                className="w-full h-52 md:h-60 object-cover rounded-t-3xl"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
                                    {item.pname}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-3">
                                    {item.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
          <span className="font-bold text-green-400 text-lg md:text-xl">
            Rs {item.price}
          </span>
                                    <button className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-sm md:text-base transition duration-300 shadow-md">
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
