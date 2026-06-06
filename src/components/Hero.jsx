import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedinIn, FaOrcid } from 'react-icons/fa'
import { FiMail, FiPhone, FiDownload, FiBookOpen, FiMapPin } from 'react-icons/fi'
import { personal, stats } from '../data/cvData'

function CountUp({ value, suffix }) {
    const [n, setN] = useState(0)
    useEffect(() => {
        const target = Number(value)
        if (Number.isNaN(target)) return
        let raf
        const start = performance.now()
        const dur = 1400
        const tick = t => {
            const p = Math.min((t - start) / dur, 1)
            setN(Math.floor(target * (1 - Math.pow(1 - p, 3))))
            if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [value])
    return (
        <span>
            {n}
            {suffix}
        </span>
    )
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden scholar-mesh grain"
        >
            {/* decorative blobs */}
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-royal/15 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 order-2 lg:order-1"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-semibold tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        {personal.honorific}
                    </span>

                    <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-navy dark:text-paper">
                        {personal.name}
                    </h1>

                    <p className="mt-5 text-base sm:text-lg font-medium gradient-text">
                        {personal.title}
                    </p>

                    <p className="mt-5 max-w-2xl text-navy/70 dark:text-gray-300 leading-relaxed">
                        {personal.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-navy/70 dark:text-gray-400">
                        <span className="inline-flex items-center gap-2">
                            <FiMapPin className="text-gold" /> {personal.shortLocation}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <FiMail className="text-gold" />
                            <a href={`mailto:${personal.email}`} className="hover:text-royal dark:hover:text-gold">
                                {personal.email}
                            </a>
                        </span>
                        <span className="inline-flex items-center gap-2">
                            <FiPhone className="text-gold" />
                            <a href={`tel:${personal.phoneRaw}`} className="hover:text-royal dark:hover:text-gold">
                                {personal.phone}
                            </a>
                        </span>
                    </div>

                    {/* Socials */}
                    <div className="mt-7 flex items-center gap-3">
                        {[
                            { Icon: SiGooglescholar, href: personal.scholar, label: 'Google Scholar' },
                            { Icon: FaLinkedinIn, href: personal.linkedin, label: 'LinkedIn' },
                            { Icon: FaOrcid, href: personal.orcid, label: 'ORCID' },
                            { Icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-11 h-11 grid place-items-center rounded-xl bg-white dark:bg-dark-card border border-navy/10 dark:border-dark-border text-navy dark:text-gold hover:text-paper hover:bg-gradient-to-br hover:from-royal hover:to-navy hover:border-transparent transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-royal/30"
                            >
                                <Icon size={17} />
                            </a>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#publications"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-navy to-royal text-paper font-semibold text-sm shadow-lg shadow-royal/30 hover:shadow-xl hover:shadow-royal/45 transition-all hover:-translate-y-0.5"
                        >
                            <FiBookOpen /> View Publications
                        </a>
                        {/* Place CV PDF at: public/Dr_Umer_Farooq_CV.pdf */}
                        <a
                            href={`${import.meta.env.BASE_URL}${personal.cvFile}`}
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-paper dark:bg-dark-card border-2 border-gold text-gold dark:text-gold font-semibold text-sm hover:bg-gold hover:text-navy transition-all hover:-translate-y-0.5"
                        >
                            <FiDownload /> Download CV
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="card-glass rounded-xl p-4 text-center"
                            >
                                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text-gold">
                                    {s.isText ? s.value : <CountUp value={s.value} suffix={s.suffix} />}
                                </div>
                                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wider text-navy/60 dark:text-gray-400 font-semibold">
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative animate-float">
                        {/* Outer ornament */}
                        <div className="absolute -inset-6 rounded-full border border-dashed border-gold/40 animate-pulse-ring" />
                        <div className="absolute -inset-12 rounded-full border border-royal/20" />

                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gold-ring bg-gradient-to-br from-navy to-royal grid place-items-center">
                            <img
                                src={`${import.meta.env.BASE_URL}profile.png`}
                                alt={personal.name}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none'
                                    e.currentTarget.nextElementSibling.style.display = 'flex'
                                }}
                                className="w-full h-full object-cover"
                            />
                            <div
                                style={{ display: 'none' }}
                                className="absolute inset-0 grid place-items-center font-display text-7xl text-paper bg-gradient-to-br from-navy to-royal"
                            >
                                UF
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-2 -left-6 px-4 py-2 rounded-xl bg-paper dark:bg-dark-card shadow-xl shadow-navy/15 border border-gold/40"
                        >
                            <div className="text-[10px] uppercase tracking-wider text-navy/50 dark:text-gray-400 font-bold">
                                Chairperson
                            </div>
                            <div className="text-sm font-display font-bold text-navy dark:text-paper">
                                Dept. of Computing
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity }}
                            className="absolute -bottom-2 -right-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold to-gold-light text-navy shadow-xl shadow-gold/30"
                        >
                            <div className="text-[10px] uppercase tracking-wider font-bold opacity-80">
                                Hamdard University
                            </div>
                            <div className="text-sm font-display font-bold">Karachi, Pakistan</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
