import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/cvData'
import { SectionHeading } from './About'

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="03 — Experience" title="Professional Journey" />

                <div className="mt-14 relative">
                    {/* vertical line */}
                    <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-royal via-gold to-royal/30" />

                    <div className="space-y-8">
                        {experience.map((job, i) => (
                            <motion.div
                                key={job.role + job.period}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="relative pl-20"
                            >
                                <span className="absolute left-3 top-3 w-9 h-9 grid place-items-center rounded-full bg-gradient-to-br from-navy to-royal text-paper ring-4 ring-paper dark:ring-dark shadow-lg shadow-royal/30">
                                    <FiBriefcase size={15} />
                                </span>

                                <div className="card-glass rounded-2xl p-6 card-hover">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h3 className="font-display font-bold text-lg sm:text-xl text-navy dark:text-paper">
                                                {job.role}
                                            </h3>
                                            <p className="mt-1 text-sm font-semibold text-royal dark:text-gold">
                                                {job.org}
                                            </p>
                                        </div>
                                        <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-gold/15 text-gold border border-gold/30 whitespace-nowrap">
                                            {job.period}
                                        </span>
                                    </div>
                                    {job.bullets && (
                                        <ul className="mt-4 space-y-2">
                                            {job.bullets.map((b, j) => (
                                                <li
                                                    key={j}
                                                    className="flex gap-2.5 text-sm text-navy/75 dark:text-gray-300 leading-relaxed"
                                                >
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
