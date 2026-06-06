import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiExternalLink, FiBookOpen, FiUsers } from 'react-icons/fi'
import { journalPublications, conferencePublications } from '../data/cvData'
import { SectionHeading } from './About'

const YEAR_FILTERS = ['All', '2024', '2023', '2022', '2021', '2019', '2018']

function CategoryBadge({ category }) {
    const map = {
        W: 'badge-w',
        X: 'badge-x',
        Y: 'badge-y',
    }
    return (
        <span
            className={`px-2.5 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wider ${map[category] || 'badge-y'}`}
        >
            Cat {category}
        </span>
    )
}

function highlightUF(authors) {
    const parts = authors.split(/(U\.\s?Farooq)/g)
    return parts.map((p, i) =>
        /U\.\s?Farooq/.test(p) ? (
            <strong key={i} className="text-royal dark:text-gold">
                {p}
            </strong>
        ) : (
            <span key={i}>{p}</span>
        )
    )
}

export default function Publications() {
    const [tab, setTab] = useState('journal')
    const [year, setYear] = useState('All')
    const [q, setQ] = useState('')

    const journals = useMemo(() => {
        return journalPublications.filter(p => {
            const matchYear = year === 'All' || String(p.year) === year
            const matchQ =
                !q.trim() ||
                p.title.toLowerCase().includes(q.toLowerCase()) ||
                p.journal.toLowerCase().includes(q.toLowerCase())
            return matchYear && matchQ
        })
    }, [year, q])

    const conferences = useMemo(() => {
        return conferencePublications.filter(p => {
            const matchYear = year === 'All' || String(p.year) === year
            const matchQ =
                !q.trim() ||
                p.title.toLowerCase().includes(q.toLowerCase()) ||
                p.venue.toLowerCase().includes(q.toLowerCase()) ||
                p.authors.toLowerCase().includes(q.toLowerCase())
            return matchYear && matchQ
        })
    }, [year, q])

    return (
        <section id="publications" className="relative py-24 sm:py-28 bg-gradient-to-b from-paper via-cream/40 to-paper dark:from-dark dark:via-dark-card/30 dark:to-dark">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="06 — Publications" title="Research Output" />

                {/* Tabs */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex p-1.5 rounded-2xl bg-paper dark:bg-dark-card border border-navy/10 dark:border-dark-border shadow-lg shadow-navy/5">
                        {[
                            { id: 'journal', label: `Journal Articles (${journalPublications.length})`, Icon: FiBookOpen },
                            { id: 'conf', label: `Conference Papers (${conferencePublications.length})`, Icon: FiUsers },
                        ].map(t => (
                            <button
                                key={t.id}
                                onClick={() => setTab(t.id)}
                                className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${tab === t.id
                                        ? 'text-paper'
                                        : 'text-navy/70 dark:text-gray-300 hover:text-royal dark:hover:text-gold'
                                    }`}
                            >
                                {tab === t.id && (
                                    <motion.span
                                        layoutId="pub-tab"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-navy to-royal -z-10"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <t.Icon size={16} />
                                <span className="hidden sm:inline">{t.label}</span>
                                <span className="sm:hidden">
                                    {t.id === 'journal' ? `Journals (${journalPublications.length})` : `Conf. (${conferencePublications.length})`}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full sm:w-72">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40 dark:text-gray-400" />
                        <input
                            value={q}
                            onChange={e => setQ(e.target.value)}
                            placeholder="Search publications..."
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-paper dark:bg-dark-card border border-navy/10 dark:border-dark-border text-sm text-navy dark:text-paper placeholder-navy/40 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
                        />
                    </div>
                </div>

                {/* Year filters */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {YEAR_FILTERS.map(y => (
                        <button
                            key={y}
                            onClick={() => setYear(y)}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded-full border transition-all ${year === y
                                    ? 'bg-gold border-gold text-navy shadow-md shadow-gold/30'
                                    : 'bg-paper dark:bg-dark-card border-navy/10 dark:border-dark-border text-navy/70 dark:text-gray-300 hover:border-gold hover:text-gold'
                                }`}
                        >
                            {y}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="mt-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab + year + q}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {tab === 'journal' &&
                                journals.map((p, i) => (
                                    <PubRow key={p.id} index={i + 1}>
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <CategoryBadge category={p.category} />
                                                <span className="text-[11px] font-semibold uppercase tracking-wider text-navy/50 dark:text-gray-400">
                                                    {p.date}
                                                </span>
                                            </div>
                                            <a
                                                href={p.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-royal dark:text-gold hover:underline"
                                            >
                                                Read Paper <FiExternalLink size={12} />
                                            </a>
                                        </div>
                                        <h3 className="font-display font-bold text-base sm:text-lg text-navy dark:text-paper leading-snug">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-sm italic text-royal/90 dark:text-gold/90">
                                            {p.journal}
                                        </p>
                                        <p className="mt-1 text-xs text-navy/55 dark:text-gray-400">
                                            Author position: <strong>#{p.authorPos}</strong>
                                        </p>
                                    </PubRow>
                                ))}

                            {tab === 'conf' &&
                                conferences.map((p, i) => (
                                    <PubRow key={p.id} index={i + 1}>
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                                            <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wider bg-royal/15 text-royal dark:text-royal-light border border-royal/30">
                                                Conference · {p.year}
                                            </span>
                                            <a
                                                href={p.doi}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-royal dark:text-gold hover:underline"
                                            >
                                                DOI <FiExternalLink size={12} />
                                            </a>
                                        </div>
                                        <h3 className="font-display font-bold text-base sm:text-lg text-navy dark:text-paper leading-snug">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-xs text-navy/65 dark:text-gray-300 leading-relaxed">
                                            {highlightUF(p.authors)}
                                        </p>
                                        <p className="mt-2 text-sm italic text-royal/90 dark:text-gold/90">
                                            {p.venue}
                                        </p>
                                    </PubRow>
                                ))}

                            {tab === 'journal' && journals.length === 0 && <Empty />}
                            {tab === 'conf' && conferences.length === 0 && <Empty />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

function PubRow({ index, children }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="group relative card-glass rounded-2xl p-5 sm:p-6 card-hover"
        >
            <span className="absolute top-5 right-5 font-display text-2xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                {String(index).padStart(2, '0')}
            </span>
            {children}
        </motion.article>
    )
}

function Empty() {
    return (
        <div className="card-glass rounded-2xl p-10 text-center text-navy/60 dark:text-gray-400">
            No publications match your filters.
        </div>
    )
}
