import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState<null | "success" | "error">(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_ppm2nvd",
                "template_c4ftvhk",
                e.currentTarget,
                "wIKwD1jmo3Bz9Dsli"
            )
            .then(
                () => {
                    setPopup("success");
                    setLoading(false);
                    e.currentTarget.reset();
                },
                () => {
                    setPopup("error");
                    setLoading(false);
                }
            );
    };

    return (
        <motion.div
            className="bg-gray-950 text-white min-h-screen flex items-center justify-center px-6 py-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-2xl shadow-xl relative">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                <p className="text-center text-gray-300 mb-8">
                    Have questions or feedback? Drop us a message below!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-2">Message</label>
                        <textarea
                            name="message"
                            required
                            className="w-full min-h-[150px] px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-red-500 outline-none"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>

                {/* ✅ Popup */}
                <AnimatePresence>
                    {popup && (
                        <motion.div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-80 text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                {popup === "success" ? (
                                    <>
                                        <h2 className="text-xl font-bold mb-2">✅ Message Sent!</h2>
                                        <p className="text-gray-300 mb-4">
                                            Thanks for reaching out. We’ll get back to you soon.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-bold mb-2">❌ Failed to Send</h2>
                                        <p className="text-gray-300 mb-4">
                                            Please try again later.
                                        </p>
                                    </>
                                )}

                                <button
                                    onClick={() => setPopup(null)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ContactPage;
