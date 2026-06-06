import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/cvData'
import { SectionHeading } from './About'

export default function Education() {
    return (
        <section id="education" className="relative py-24 sm:py-28 bg-gradient-to-b from-paper via-cream/40 to-paper dark:from-dark dark:via-dark-card/30 dark:to-dark">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="02 — Education" title="Academic Qualifications" />

                <div className="mt-14 relative">
                    {/* vertical line */}
                    <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-royal to-gold/30" />

                    <div className="space-y-12">
                        {education.map((edu, i) => {
                            const isLeft = i % 2 === 0
                            return (
                                <motion.div
                                    key={edu.degree}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start"
                                >
                                    {/* dot */}
                                    <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gold ring-4 ring-paper dark:ring-dark shadow-lg shadow-gold/40 z-10" />

                                    <div className={`pl-12 sm:pl-0 ${isLeft ? 'sm:text-right sm:pr-12' : 'sm:col-start-2 sm:pl-12'}`}>
                                        <div className="card-glass rounded-2xl p-6 shadow-xl shadow-navy/5 card-hover text-left">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-to-br from-navy to-royal text-paper shrink-0">
                                                    <FaGraduationCap size={20} />
                                                </span>
                                                <span className="text-xs font-bold uppercase tracking-wider text-gold">
                                                    {edu.period}
                                                </span>
                                            </div>
                                            <h3 className="font-display font-bold text-lg text-navy dark:text-paper">
                                                {edu.degree}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-royal dark:text-gold">
                                                {edu.institution}
                                            </p>
                                            {edu.sub && (
                                                <p className="mt-1 text-xs text-navy/60 dark:text-gray-400">{edu.sub}</p>
                                            )}

                                            {edu.thesisTitle && (
                                                <div className="mt-4 pt-4 border-t border-navy/10 dark:border-dark-border space-y-3">
                                                    <div>
                                                        <div className="text-[10px] uppercase tracking-wider font-bold text-gold mb-1">
                                                            Thesis
                                                        </div>
                                                        <p className="text-sm italic text-navy/85 dark:text-gray-200 leading-relaxed">
                                                            "{edu.thesisTitle}"
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] uppercase tracking-wider font-bold text-gold mb-1">
                                                            Supervisor
                                                        </div>
                                                        <p className="text-sm font-semibold text-navy dark:text-paper">
                                                            {edu.supervisor}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="text-[10px] uppercase tracking-wider font-bold text-gold mb-1">
                                                            Research Contribution
                                                        </div>
                                                        <p className="text-xs text-navy/70 dark:text-gray-300 leading-relaxed">
                                                            {edu.research}
                                                        </p>
                                                    </div>
                                                    {edu.interests && (
                                                        <div className="flex flex-wrap gap-2 pt-1">
                                                            {edu.interests.map(it => (
                                                                <span
                                                                    key={it}
                                                                    className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gold/15 text-gold border border-gold/30"
                                                                >
                                                                    {it}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
