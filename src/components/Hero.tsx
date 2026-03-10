import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 flex flex-col items-center justify-center text-center">
            {/* Target/Focus Graphic above Title */}
            <div className="mb-8 relative flex items-center justify-center">
                <div className="absolute w-32 h-[1px] bg-accent/30" />
                <div className="absolute h-32 w-[1px] bg-accent/30" />
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_15px_#00FF41]" />
                <div className="absolute top-8 text-[10px] font-mono tracking-widest text-accent/70"></div>
            </div>

            {/* Main Typography */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-sans font-medium text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-tight text-white drop-shadow-2xl"
            >
                Ahmad Solehudin <br />Romdoni
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-[9px] sm:text-[10px] md:text-xs tracking-widest sm:tracking-[0.2em] md:tracking-[0.3em] text-accent mb-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 md:gap-4 px-4 text-center"
            >
                <span>SENIOR BACKEND DEVELOPER</span>
                <span className="text-secondary/50 hidden sm:inline">//</span>
                <span>6+ YEARS EXP</span>
                <span className="text-secondary/50 hidden sm:inline">//</span>
                <span>BASED IN JAKARTA</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row mb-24 md:mb-32 items-center gap-4 sm:gap-6 px-4 w-full sm:w-auto"
            >
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,65,0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-accent hover:bg-white hover:text-black text-white px-8 py-3 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                    Explore Architecture
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto justify-center border border-white/20 hover:border-white px-8 py-3 text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-colors text-secondary hover:text-white flex items-center gap-2">
                    View System Specs <ChevronRight className="w-4 h-4" />
                </motion.button>
            </motion.div>

            {/* Metrics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 w-full max-w-4xl border-t border-b border-white/5 py-12 px-8 relative overflow-hidden">
                {/* Glow effect behind metrics */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent pointer-events-none" />

                <div className="flex flex-col gap-2 relative z-10">
                    <span className="text-accent text-[10px] font-mono tracking-widest uppercase">Target SLA</span>
                    <span className="text-3xl font-serif text-white group cursor-default">
                        99.9<span className="text-accent/50 text-xl">%</span>
                    </span>
                    <span className="text-[10px] font-mono text-secondary tracking-widest">UPTIME PERFORMANCE</span>
                </div>

                <div className="flex flex-col gap-2 relative z-10 pt-6 mt-6 border-t border-white/5 md:pt-0 md:mt-0 md:border-t-0 md:border-l md:pl-24">
                    <span className="text-accent text-[10px] font-mono tracking-widest uppercase">P99 Latency</span>
                    <span className="text-3xl font-serif text-white group cursor-default">
                        1.2<span className="text-accent/50 text-xl">s</span>
                    </span>
                    <span className="text-[10px] font-mono text-secondary tracking-widest">REQUEST WINDOW</span>
                </div>

                <div className="flex flex-col gap-2 relative z-10 pt-6 mt-6 border-t border-white/5 md:pt-0 md:mt-0 md:border-t-0 md:border-l md:pl-24">
                    <span className="text-accent text-[10px] font-mono tracking-widest uppercase">System Scale</span>
                    <span className="text-3xl font-serif text-white group cursor-default">
                        450<span className="text-accent/50 text-xl">+</span>
                    </span>
                    <span className="text-[10px] font-mono text-secondary tracking-widest">TOTAL ARTIFACTS</span>
                </div>
            </div>

            {/* Expertise Footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-left w-full max-w-7xl mx-auto">
                <div className="p-6 bg-card/30 border border-white/5 hover:border-accent/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-6">
                        <span className="text-accent text-xs">01</span>
                    </div>
                    <h3 className="font-mono text-xs tracking-widest text-white mb-4">DISTRIBUTED SYSTEMS</h3>
                    <p className="text-sm text-secondary leading-relaxed">Designing fault-tolerant architectures that scale horizontally across global cloud infrastructures.</p>
                </div>
                <div className="p-6 bg-card/30 border border-white/5 hover:border-accent/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-6">
                        <span className="text-accent text-xs">02</span>
                    </div>
                    <h3 className="font-mono text-xs tracking-widest text-white mb-4">MICROSERVICES</h3>
                    <p className="text-sm text-secondary leading-relaxed">Decomposing complex monoliths into manageable, high-performance containerized service mesh environments.</p>
                </div>
                <div className="p-6 bg-card/30 border border-white/5 hover:border-accent/30 transition-colors">
                    <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center mb-6">
                        <span className="text-accent text-xs">03</span>
                    </div>
                    <h3 className="font-mono text-xs tracking-widest text-white mb-4">CLOUD NATIVE</h3>
                    <p className="text-sm text-secondary leading-relaxed">Leveraging AWS, Azure, and GCP primitives to build robust serverless and edge-computed solutions.</p>
                </div>
            </div>

            <div className="mt-32 w-full flex justify-between items-end border-b border-white/10 pb-8">
                <span className="font-serif italic text-2xl text-secondary">"Let's build resilience."</span>
                <span className="font-mono text-[10px] tracking-widest text-secondary block uppercase">Available for Select Consulting Engagements.</span>
            </div>
        </section>
    );
}
