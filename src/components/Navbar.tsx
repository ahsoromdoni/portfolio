import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = ['ARCHITECTURE', 'SYSTEMS', 'PROCESS', 'ABOUT'];

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('ARCHITECTURE');

    return (
        <nav className="flex items-center justify-between py-6 border-b border-white/5 px-4 md:px-0">
            <div className="flex-shrink-0">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="font-sans font-bold text-2xl tracking-tighter hover:text-accent transition-colors">
                    AS<span className="text-accent">.</span>ROMDONI
                </motion.a>
            </div>

            <div className="hidden md:flex items-center justify-center space-x-12 flex-1">
                {navItems.map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setActiveItem(item)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-4 py-2 text-xs tracking-[0.2em] font-mono transition-colors duration-300 ${activeItem === item ? 'text-accent font-bold' : 'text-secondary hover:text-white'
                            }`}
                    >
                        {item}
                        {activeItem === item && (
                            <motion.div
                                layoutId="nav-indicator"
                                className="absolute inset-0 border border-accent/30 bg-accent/5 rounded-sm -z-10"
                                initial={false}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            />
                        )}
                        {/* Static hover effect */}
                        <div className="absolute inset-0 border border-transparent hover:border-white/10 rounded-sm -z-20 transition-colors" />
                    </motion.a>
                ))}
            </div>

            <div className="flex-shrink-0 flex items-center gap-6">
                <a href="#contact" className="text-xs font-mono tracking-[0.2em] text-secondary hover:text-primary transition-colors">
                    CONTACT
                </a>
                <div className="w-10 h-10 rounded-full bg-card border border-white/10 overflow-hidden flex items-center justify-center hover:border-accent transition-colors duration-300">
                    {/* Placeholder for user icon */}
                    <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-accent/5" />
                </div>
            </div>
        </nav>
    );
}
