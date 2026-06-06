import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { leadership } from '../data/cvData'
import { SectionHeading } from './About'

export default function Leadership() {
    return (
        <section className="relative py-24 sm:py-28 bg-gradient-to-b from-paper via-cream/40 to-paper dark:from-dark dark:via-dark-card/30 dark:to-dark">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="04 — Leadership" title="Roles & Esteem Indicators" />

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {leadership.map((l, i) => (
                        <motion.div
                            key={l.title + i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            className="group card-glass rounded-2xl p-6 card-hover relative overflow-hidden"
                        >
                            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors" />
                            <span className="relative w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-light text-navy shadow-lg shadow-gold/30">
                                <FiAward size={20} />
                            </span>
                            <h3 className="relative mt-5 font-display font-bold text-lg text-navy dark:text-paper">
                                {l.title}
                            </h3>
                            <p className="relative mt-2 text-sm text-navy/70 dark:text-gray-300 leading-relaxed">
                                {l.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
