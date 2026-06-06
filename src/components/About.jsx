import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiCpu, FiAward } from 'react-icons/fi'
import { summary } from '../data/cvData'

const facts = [
    { Icon: FiMapPin, label: 'Location', value: 'Mansehra, KPK, Pakistan' },
    { Icon: FiBriefcase, label: 'Current Role', value: 'Professor & Chairperson, Dept. of Computing' },
    { Icon: FiCpu, label: 'Research Focus', value: 'AI · Machine Learning · Cloud Computing' },
    { Icon: FiAward, label: 'Academic Level', value: 'PhD in Computer Science' },
]

export default function About() {
    return (
        <section id="about" className="relative py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="01 — About" title="A Decade of Academic Excellence" />

                <div className="mt-14 grid lg:grid-cols-12 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative">
                            <span className="absolute -left-4 top-0 text-7xl font-display text-gold/30 leading-none select-none">
                                "
                            </span>
                            <p className="relative text-navy/80 dark:text-gray-300 leading-relaxed text-[15px] sm:text-base">
                                {summary}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-5"
                    >
                        <div className="card-glass rounded-2xl p-6 shadow-xl shadow-navy/5">
                            <h3 className="font-display font-bold text-xl text-navy dark:text-paper mb-5">
                                Quick Facts
                            </h3>
                            <div className="space-y-4">
                                {facts.map(({ Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-3">
                                        <span className="w-10 h-10 grid place-items-center rounded-lg bg-gradient-to-br from-royal/15 to-gold/15 text-royal dark:text-gold shrink-0">
                                            <Icon size={18} />
                                        </span>
                                        <div>
                                            <div className="text-[11px] uppercase tracking-wider font-semibold text-navy/50 dark:text-gray-400">
                                                {label}
                                            </div>
                                            <div className="text-sm font-medium text-navy dark:text-paper">{value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export function SectionHeading({ kicker, title, align = 'left' }) {
    return (
        <div className={align === 'center' ? 'text-center' : ''}>
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-gold"
            >
                {kicker}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy dark:text-paper"
            >
                {title}
            </motion.h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-gold to-royal rounded-full" />
        </div>
    )
}
