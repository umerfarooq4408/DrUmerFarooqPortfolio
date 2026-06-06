import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { navLinks, personal } from '../data/cvData'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30)
            const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean)
            const y = window.scrollY + 120
            for (const s of sections) {
                if (s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
                    setActive(s.id)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const initials = 'UF'

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-paper/85 dark:bg-dark/85 backdrop-blur-xl shadow-lg shadow-navy/5 border-b border-navy/10 dark:border-dark-border/60'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 group">
                    <span className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-navy to-royal text-paper font-display font-bold text-lg shadow-lg shadow-royal/30 ring-2 ring-gold/60">
                        {initials}
                        <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-gold ring-2 ring-paper dark:ring-dark" />
                    </span>
                    <span className="hidden sm:flex flex-col leading-tight">
                        <span className="font-display font-bold text-navy dark:text-paper text-sm">Dr. Umer Farooq</span>
                        <span className="text-[11px] text-royal dark:text-gold tracking-wide">PhD · CS</span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${active === link.id
                                    ? 'text-royal dark:text-gold'
                                    : 'text-navy/70 dark:text-gray-300 hover:text-royal dark:hover:text-gold'
                                }`}
                        >
                            {link.label}
                            {active === link.id && (
                                <motion.span
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-royal/10 dark:bg-gold/15 rounded-lg -z-10"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="w-10 h-10 grid place-items-center rounded-lg border border-navy/15 dark:border-dark-border text-navy dark:text-gold hover:bg-royal/10 dark:hover:bg-gold/10 transition-colors"
                    >
                        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                    </button>
                    <a
                        href={personal.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-royal to-navy text-paper hover:shadow-lg hover:shadow-royal/30 transition-shadow"
                    >
                        Scholar Profile
                    </a>
                    <button
                        onClick={() => setOpen(o => !o)}
                        aria-label="Menu"
                        className="lg:hidden w-10 h-10 grid place-items-center rounded-lg border border-navy/15 dark:border-dark-border text-navy dark:text-gold"
                    >
                        {open ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-paper/95 dark:bg-dark/95 backdrop-blur-xl border-t border-navy/10 dark:border-dark-border/60 overflow-hidden"
                    >
                        <div className="px-5 py-4 flex flex-col gap-1">
                            {navLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium ${active === link.id
                                            ? 'bg-royal/10 dark:bg-gold/15 text-royal dark:text-gold'
                                            : 'text-navy/80 dark:text-gray-200'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
