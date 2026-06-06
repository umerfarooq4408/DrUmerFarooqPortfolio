import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaShieldAlt, FaDatabase, FaRocket, FaGraduationCap } from 'react-icons/fa'
import { researchAreas } from '../data/cvData'
import { SectionHeading } from './About'

const iconMap = {
    brain: FaBrain,
    robot: FaRobot,
    shield: FaShieldAlt,
    database: FaDatabase,
    rocket: FaRocket,
    graduation: FaGraduationCap,
}

export default function ResearchAreas() {
    return (
        <section id="research" className="relative py-24 sm:py-28">
            <div className="absolute inset-0 pattern-dots opacity-50 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="05 — Research" title="Areas of Expertise" />

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {researchAreas.map((area, i) => {
                        const Icon = iconMap[area.icon] || FaBrain
                        return (
                            <motion.div
                                key={area.category}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="group relative card-glass rounded-2xl p-7 card-hover overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-royal/0 via-gold/0 to-navy/0 group-hover:from-royal/5 group-hover:to-gold/5 transition-all" />
                                <div className="relative">
                                    <div className="flex items-center gap-4">
                                        <span className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-paper shadow-lg shadow-royal/30 group-hover:scale-110 transition-transform">
                                            <Icon size={24} />
                                        </span>
                                        <h3 className="font-display font-bold text-lg text-navy dark:text-paper">
                                            {area.category}
                                        </h3>
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {area.items.map(it => (
                                            <span
                                                key={it}
                                                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-paper dark:bg-dark border border-navy/10 dark:border-dark-border text-navy/80 dark:text-gray-200 hover:border-gold hover:text-gold transition-colors"
                                            >
                                                {it}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
