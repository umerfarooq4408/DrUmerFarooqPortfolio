import { motion } from 'framer-motion'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { teaching } from '../data/cvData'
import { SectionHeading } from './About'

export default function Teaching() {
    return (
        <section id="teaching" className="relative py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="07 — Teaching" title="Courses Taught" />

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teaching.map((course, i) => (
                        <motion.div
                            key={course}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group flex items-center gap-4 card-glass rounded-2xl p-5 card-hover"
                        >
                            <span className="w-12 h-12 grid place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-royal/20 text-royal dark:text-gold group-hover:from-royal group-hover:to-navy group-hover:text-paper transition-all">
                                <FaChalkboardTeacher size={20} />
                            </span>
                            <span className="font-medium text-navy dark:text-paper">{course}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
