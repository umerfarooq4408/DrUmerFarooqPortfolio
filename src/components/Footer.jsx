import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedinIn, FaOrcid, FaReact } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { personal } from '../data/cvData'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="relative border-t border-navy/10 dark:border-dark-border/60 bg-paper dark:bg-dark">
            <div className="section-divider" />
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <div className="font-display font-bold text-navy dark:text-paper">{personal.name}</div>
                    <p className="text-xs text-navy/55 dark:text-gray-400 mt-1">
                        © {year} All rights reserved · {personal.honorific}
                    </p>
                </div>

                <div className="flex items-center gap-3">
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
                            className="w-9 h-9 grid place-items-center rounded-lg bg-paper dark:bg-dark-card border border-navy/10 dark:border-dark-border text-navy/70 dark:text-gray-300 hover:text-gold hover:border-gold transition-colors"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-navy/55 dark:text-gray-400">
                    Built with <FaReact className="text-royal animate-spin-slow" /> React
                </div>
            </div>
        </footer>
    )
}
