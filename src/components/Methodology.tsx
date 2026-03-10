import { motion } from 'framer-motion';
import { Layers, Zap, Workflow, Activity } from 'lucide-react';

const pillars = [
    {
        icon: Layers,
        title: 'Architectural Foundations',
        description: 'Tech stack built on robust primitives.',
        items: ['Golang', 'Gin/Echo', 'PostgreSQL', 'Redis'],
        color: 'text-accent'
    },
    {
        icon: Zap,
        title: 'Business Engine',
        description: 'Domain-driven design and strict service layers.',
        items: ['Service Layer', 'Domain Logic', 'Clean Architecture', 'CQRS'],
        color: 'text-white'
    },
    {
        icon: Workflow,
        title: 'System Synergy',
        description: 'Seamless inter-service communication.',
        items: ['gRPC / Protobuf', 'Kafka / RabbitMQ', 'GraphQL / REST'],
        color: 'text-white'
    },
    {
        icon: Activity,
        title: 'Metric Analysis',
        description: 'Comprehensive observability stacks.',
        items: ['Prometheus / Grafana', 'OpenTelemetry', 'ELK Stack'],
        color: 'text-accent'
    }
];

export default function Methodology() {
    return (
        <section id="process" className="py-24 border-t border-white/5 relative">
            <div className="text-center mb-20 px-4">
                <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight uppercase">Core Methodology</h2>
                <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px bg-white/5 border border-white/5 max-w-7xl mx-auto">
                {pillars.map((pillar, i) => {
                    const Icon = pillar.icon;
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            key={i}
                            className="bg-background p-10 hover:bg-card/50 transition-colors group"
                        >
                            <div className={`mb-8 ${pillar.color} group-hover:scale-110 transition-transform duration-500`}>
                                <Icon strokeWidth={1} className="w-10 h-10" />
                            </div>

                            <h3 className="font-serif tracking-wide text-xl text-white mb-3">{pillar.title}</h3>
                            <p className="text-secondary text-sm mb-8 line-clamp-2">{pillar.description}</p>

                            <ul className="space-y-3">
                                {pillar.items.map((item, j) => (
                                    <li key={j} className="flex items-center text-xs font-mono text-secondary group-hover:text-white/80 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-sm bg-accent/50 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
