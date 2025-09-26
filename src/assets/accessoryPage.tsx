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
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(""); // 🔹 debounced query

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from("carparts").select("*");

            if (error) {
                console.log("Error:", error);
            } else {
                console.log("Fetched products:", data);
                setProducts(data ?? []);
            }
        };

        fetchProducts();
    }, []);

    // 🔹 Debounce search input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300); // waits 300ms after typing

        return () => clearTimeout(handler);
    }, [searchQuery]);

    // 🔹 Filter with debounced query
    const filteredProducts = products.filter(
        (item) =>
            item.pname.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <section className="py-16 px-6 md:px-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight">
                    Car Accessories
                </h1>
                <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
                    Upgrade your ride with premium parts and accessories. Find the best
                    quality parts to enhance performance and style.
                </p>

                {/* 🔹 Search bar */}
                <div className="max-w-md mx-auto mb-12">
                    <input
                        type="text"
                        placeholder="Search accessories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 rounded-full text-white text-lg outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item, index) => (
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
                        ))
                    ) : (
                        <p className="text-gray-400 text-center col-span-full">
                            No products found.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AccessoriesPage;
