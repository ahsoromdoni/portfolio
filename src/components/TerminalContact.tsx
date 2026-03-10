import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TerminalContact() {
    const [inputVal, setInputVal] = useState('');
    const [messages, setMessages] = useState<{ type: 'user' | 'system', text: React.ReactNode }[]>([
        { type: 'system', text: 'aromdoni@system:~$ ls -la networks/social' },
        { type: 'system', text: 'drwxr-xr-x 2 aromdoni admin 4096 Mar 04 12:00 .' },
        { type: 'system', text: <>-rw-r--r-- 1 aromdoni admin   84 <a href="https://github.com/ahsoromdoni" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline decoration-accent/50 underline-offset-4 transition-colors">github.com/ahsoromdoni</a></> },
        { type: 'system', text: <>-rw-r--r-- 1 aromdoni admin   42 <a href="https://linkedin.com/in/ahsoromdoni" target="_blank" rel="noreferrer" className="text-accent hover:text-white underline decoration-accent/50 underline-offset-4 transition-colors">linkedin.com/in/ahsoromdoni</a></> },
        { type: 'system', text: <>-rw-r--r-- 1 aromdoni admin   64 <a href="mailto:ahsoromdoni@gmail.com" className="text-accent hover:text-white underline decoration-accent/50 underline-offset-4 transition-colors">mailto:ahsoromdoni@gmail.com</a></> },
        { type: 'system', text: <>-rw-r--r-- 1 aromdoni admin   24 <a href="tel:+6285314071285" className="text-accent hover:text-white underline decoration-accent/50 underline-offset-4 transition-colors">tel:+6285314071285</a></> },
        { type: 'system', text: 'aromdoni@system:~$ ./send_message.sh' }
    ]);

    const handleExecute = () => {
        if (!inputVal.trim()) return;
        setMessages(prev => [
            ...prev,
            { type: 'user', text: `> ${inputVal}` },
            { type: 'system', text: '[OK] Payload encrypted and transmitted.' },
            { type: 'system', text: 'aromdoni@system:~$ awaiting response...' }
        ]);
        setInputVal('');
    };

    return (
        <section id="contact" className="py-24 border-t border-white/5 relative flex justify-center px-4">

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl bg-[#0d0d0f] border border-white/10 rounded overflow-hidden shadow-2xl relative"
            >
                {/* Terminal Header */}
                <div className="bg-[#1a1a1e] px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">aromdoni — bash — 80x24</span>
                    <div className="w-10" /> {/* Spacer for balance */}
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm leading-relaxed h-[400px] flex flex-col">
                    <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-2">
                        {messages.map((msg, i) => (
                            <div key={i} className={`${msg.type === 'system' ? 'text-secondary/80' : 'text-accent'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto border-t border-white/10 pt-4 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 bg-background border border-white/10 p-2 flex items-center">
                            <span className="text-accent mr-2 font-bold animate-pulse">_</span>
                            <input
                                type="text"
                                value={inputVal}
                                onChange={e => setInputVal(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && handleExecute()}
                                placeholder="Enter your message here..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder:text-secondary/50 font-mono text-xs"
                            />
                        </div>
                        <motion.button
                            onClick={handleExecute}
                            whileHover={{ scale: 1.05, backgroundColor: "#00FF41", color: "#000000" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-6 py-2 sm:py-0 bg-accent/10 border border-accent transition-colors text-accent font-mono text-xs tracking-widest uppercase"
                        >
                            Execute
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
