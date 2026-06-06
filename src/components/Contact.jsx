import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'
import { FaLinkedinIn, FaOrcid } from 'react-icons/fa'
import { personal } from '../data/cvData'
import { SectionHeading } from './About'

export default function Contact() {
    const [status, setStatus] = useState('idle')

    const handleSubmit = e => {
        e.preventDefault()
        // ── Formspree integration ────────────────────────────────────
        // Replace https://formspree.io/f/YOUR_FORM_ID with your endpoint
        setStatus('sent')
        setTimeout(() => setStatus('idle'), 3500)
        e.currentTarget.reset()
    }

    return (
        <section id="contact" className="relative py-24 sm:py-28">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <SectionHeading kicker="09 — Contact" title="Get In Touch" />

                <div className="mt-14 grid lg:grid-cols-5 gap-8">
                    {/* Info card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 relative rounded-3xl p-8 bg-gradient-to-br from-navy via-royal to-navy text-paper overflow-hidden shadow-2xl shadow-navy/30"
                    >
                        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/15 blur-3xl" />
                        <div className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-gold/10 blur-3xl" />

                        <div className="relative">
                            <h3 className="font-display font-bold text-2xl">Let's Collaborate</h3>
                            <p className="mt-3 text-sm text-paper/80 leading-relaxed">
                                Open to research collaborations, thesis supervision, speaking invitations, and academic
                                partnerships in AI, ML, and Cloud Computing.
                            </p>

                            <div className="mt-7 space-y-4">
                                <ContactItem Icon={FiMail} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
                                <ContactItem Icon={FiPhone} label="Phone" value={personal.phone} href={`tel:${personal.phoneRaw}`} />
                                <ContactItem Icon={FiMapPin} label="Location" value={personal.location} />
                            </div>

                            <div className="mt-8 pt-6 border-t border-paper/20">
                                <div className="text-[11px] uppercase tracking-wider font-bold text-gold mb-3">
                                    Academic Profiles
                                </div>
                                <div className="flex gap-3">
                                    {[
                                        { Icon: SiGooglescholar, href: personal.scholar, label: 'Scholar' },
                                        { Icon: FaLinkedinIn, href: personal.linkedin, label: 'LinkedIn' },
                                        { Icon: FaOrcid, href: personal.orcid, label: 'ORCID' },
                                    ].map(({ Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="w-11 h-11 grid place-items-center rounded-xl bg-paper/10 border border-paper/20 hover:bg-gold hover:border-gold hover:text-navy transition-all hover:-translate-y-1"
                                        >
                                            <Icon size={17} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        // action="https://formspree.io/f/YOUR_FORM_ID"  ← uncomment & set
                        // method="POST"
                        className="lg:col-span-3 card-glass rounded-3xl p-8 shadow-xl shadow-navy/5 space-y-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-5">
                            <Field label="Your Name" name="name" required />
                            <Field label="Email" name="email" type="email" required />
                        </div>
                        <Field label="Subject" name="subject" required />
                        <Field label="Message" name="message" textarea required />

                        <button
                            type="submit"
                            disabled={status === 'sent'}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-navy font-bold text-sm shadow-lg shadow-gold/30 hover:shadow-xl hover:shadow-gold/45 transition-all hover:-translate-y-0.5 disabled:opacity-70"
                        >
                            <FiSend />
                            {status === 'sent' ? 'Message Sent!' : 'Send Message'}
                        </button>

                        {status === 'sent' && (
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                                Thank you! Your message has been received.
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

function ContactItem({ Icon, label, value, href }) {
    const Wrap = href ? 'a' : 'div'
    return (
        <Wrap
            {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
            className="flex items-start gap-3 group"
        >
            <span className="w-10 h-10 grid place-items-center rounded-lg bg-paper/10 border border-paper/20 text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                <Icon size={16} />
            </span>
            <div>
                <div className="text-[11px] uppercase tracking-wider font-bold text-gold/90">{label}</div>
                <div className="text-sm font-medium text-paper">{value}</div>
            </div>
        </Wrap>
    )
}

function Field({ label, name, type = 'text', textarea = false, required }) {
    return (
        <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 dark:text-gray-300 mb-2">
                {label}
            </label>
            {textarea ? (
                <textarea
                    name={name}
                    required={required}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-paper dark:bg-dark border border-navy/10 dark:border-dark-border text-sm text-navy dark:text-paper placeholder-navy/30 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition resize-none"
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    required={required}
                    className="w-full px-4 py-3 rounded-xl bg-paper dark:bg-dark border border-navy/10 dark:border-dark-border text-sm text-navy dark:text-paper placeholder-navy/30 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition"
                />
            )}
        </div>
    )
}
