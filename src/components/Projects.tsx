import { motion } from 'framer-motion';
import blueBirdLogo from '../assets/blue_bird.png';
import bafLogo from '../assets/baf.png';
import thePrimeLogo from '../assets/the_prime.png';

const experiences = [
    {
        company: 'Blue Bird Group',
        role: 'Back End Developer',
        duration: 'Nov 2022 - Present',
        description: 'Architected a Centralized Price Engine Microservice serving as the single source for group-wide fare calculations. Engineered a real-time Bus Monitoring & Tracking system utilizing Pub/Sub and SSE.',
        tags: ['Go', 'gRPC', 'Kubernetes', 'GCP'],
        metrics: { p1: { label: 'ROLE', value: 'Backend' }, p2: { label: 'DURATION', value: 'Current' }, p3: { label: 'LOCATION', value: 'Jakarta' } },
        imgSrc: blueBirdLogo,
        active: true,
    },
    {
        company: 'PT. Bussan Auto Finance',
        role: 'Back End Developer',
        duration: 'Nov 2020 - Nov 2022',
        description: 'Designed a scalable Incentive System to automate sales commissions. Optimized API performance and database connection pooling. Maintained RESTful services using Golang with clean architecture.',
        tags: ['Go', 'SQL', 'Docker', 'JWT'],
        metrics: { p1: { label: 'ROLE', value: 'Backend' }, p2: { label: 'DURATION', value: '2 Years' }, p3: { label: 'LOCATION', value: 'Jakarta' } },
        imgSrc: bafLogo,
        active: false,
    },
    {
        company: 'The Prime',
        role: 'FullStack Developer',
        duration: 'Nov 2019 - Feb 2020',
        description: 'Developed end-to-end applications using Laravel and MySQL. Architected a custom CMS for corporate sites and optimized internal textile manufacturing applications.',
        tags: ['PHP', 'Laravel', 'MySQL'],
        metrics: { p1: { label: 'ROLE', value: 'FullStack' }, p2: { label: 'DURATION', value: '4 Mos' }, p3: { label: 'LOCATION', value: 'Cianjur' } },
        imgSrc: thePrimeLogo,
        active: false,
    }
];

export default function Projects() {
    return (
        <section id="systems" className="py-24 border-t border-white/5 relative">
            <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5 pointer-events-none" />
            <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5 pointer-events-none" />

            <div className="mb-16 flex justify-between items-end px-4 md:px-12">
                <div>
                    <span className="text-accent font-mono text-[10px] tracking-widest uppercase mb-4 block animate-pulse"># CAREER_TIMELINE: ACTIVE</span>
                    <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight">Work<br /><span className="text-accent">Experience</span></h2>
                </div>
                <p className="text-secondary font-mono text-xs w-1/3 leading-relaxed hidden md:block">
                    A timeline of enterprise-scale backend development, microservices architecture, and cloud-native integrations across various industries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 px-4 md:px-12">
                {experiences.map((exp, i) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            key={i}
                            className={`p-8 border transition-all duration-300 relative group overflow-hidden flex flex-col h-full ${exp.active ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-accent/50 bg-card/50 hover:bg-card'
                                }`}
                        >
                            {exp.active && (
                                <div className="absolute -inset-1 bg-accent/20 blur-xl rounded-full opacity-50 z-0 pointer-events-none" />
                            )}

                            <div className="flex items-center gap-4 mb-2 relative z-10">
                                <div className={`w-12 h-12 rounded bg-white flex items-center justify-center overflow-hidden p-1 ${exp.active ? 'border border-accent ring-2 ring-accent/20' : 'border border-white/10'}`}>
                                    <img src={exp.imgSrc} alt={exp.company} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl tracking-wide text-white">{exp.company}</h3>
                                    <span className="text-accent font-mono text-[10px]">{exp.duration}</span>
                                </div>
                            </div>

                            <p className="text-secondary text-sm leading-relaxed mb-8 mt-4 relative z-10 flex-grow">
                                {exp.description}
                            </p>

                            <div className="flex gap-3 mb-8 relative z-10 flex-wrap">
                                {exp.tags.map(t => (
                                    <span key={t} className="text-[9px] font-mono tracking-widest text-accent uppercase border border-accent/20 px-2 py-1 bg-accent/5">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 relative z-10 mt-auto">
                                <div>
                                    <span className="text-[10px] block text-secondary font-mono mb-1">{exp.metrics.p1.label}</span>
                                    <span className="font-mono text-sm text-white">{exp.metrics.p1.value}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] block text-secondary font-mono mb-1">{exp.metrics.p2.label}</span>
                                    <span className="font-mono text-sm text-white">{exp.metrics.p2.value}</span>
                                </div>
                                <div>
                                    <span className="text-[10px] block text-secondary font-mono mb-1">{exp.metrics.p3.label}</span>
                                    <span className="font-mono text-sm text-success">{exp.metrics.p3.value}</span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-16 mx-4 md:mx-12 p-6 border border-white/10 bg-card rounded flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="font-mono text-xs text-white">Career Highlights</span>
                </div>

                <div className="flex gap-12 font-mono">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-secondary mb-1">YEARS EXP</span>
                        <span className="text-sm text-white">6.5+ <span className="text-accent text-[10px]">YEARS</span></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-secondary mb-1">MAIN STACK</span>
                        <span className="text-sm text-white">GOLANG</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-secondary mb-1">FOCUS</span>
                        <span className="text-sm text-white">BACKEND / SYSTEM ARCH</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
