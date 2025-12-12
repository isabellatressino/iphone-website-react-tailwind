import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">

            {/* Barra Desktop */}
            <div className="hidden md:flex max-w-7xl mx-auto px-6 py-4 items-center justify-center gap-8">
                <a href="#design" className="hover:text-gray-300 transition">Design</a>
                <a href="#camera" className="hover:text-gray-300 transition">Camera</a>
                <a href="#performance" className="hover:text-gray-300 transition">Performance</a>
                <a href="#cores" className="hover:text-gray-300 transition">Cores</a>

                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer">
                    Comprar
                </button>
            </div>

            {/* Ícone Mobile */}
            <div className="md:hidden flex justify-end items-center px-4 py-3">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} duration={0.5} />
            </div>

            {/* Menu Mobile (Dropdown Animado) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-black/90 backdrop-blur-md flex flex-col gap-5 p-6 text-center shadow-lg"
                    >
                        <a
                            href="#design"
                            className="text-white text-lg hover:text-gray-300 transition"
                            onClick={() => setOpen(false)}
                        >
                            Design
                        </a>
                        <a
                            href="#camera"
                            className="text-white text-lg hover:text-gray-300 transition"
                            onClick={() => setOpen(false)}
                        >
                            Camera
                        </a>
                        <a
                            href="#performance"
                            className="text-white text-lg hover:text-gray-300 transition"
                            onClick={() => setOpen(false)}
                        >
                            Performance
                        </a>
                        <a
                            href="#cores"
                            className="text-white text-lg hover:text-gray-300 transition"
                            onClick={() => setOpen(false)}
                        >
                            Cores
                        </a>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full cursor-pointer mt-2"
                            onClick={() => setOpen(false)}
                        >
                            Comprar
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default NavBar;
