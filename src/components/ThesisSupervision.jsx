import { motion } from 'framer-motion'
import { FaRoad, FaSignsPost, FaCommentDots } from 'react-icons/fa6'
import { thesisSupervision } from '../data/cvData'
import { SectionHeading } from './About'

const iconMap = {
    road: FaRoad,
    sign: FaSignsPost,
    comment: FaCommentDots,
}

export default function ThesisSupervision() {
    return (
        <section className="relative py-24 sm:py-28 bg-gradient-to-b from-paper via-cream/40 to-paper dark:from-dark dark:via-dark-card/30 dark:to-dark">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="08 — Mentorship" title="Thesis Supervision" />

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {thesisSupervision.map((t, i) => {
                        const Icon = iconMap[t.icon] || FaCommentDots
                        return (
                            <motion.div
                                key={t.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative card-glass rounded-2xl p-6 card-hover overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-royal/10 rounded-bl-[5rem] group-hover:from-gold/20 group-hover:to-royal/20 transition-colors" />
                                <span className="relative w-14 h-14 grid place-items-center rounded-2xl bg-gradient-to-br from-navy to-royal text-paper shadow-lg shadow-royal/30">
                                    <Icon size={22} />
                                </span>
                                <div className="relative mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-gold">
                                    MS Thesis · {t.domain}
                                </div>
                                <h3 className="relative mt-2 font-display font-bold text-base sm:text-lg text-navy dark:text-paper leading-snug">
                                    {t.title}
                                </h3>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
