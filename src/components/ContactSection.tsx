"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { identity } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const channels = [
    { label: "Email", value: identity.email, href: `mailto:${identity.email}`, icon: Mail, external: false },
    { label: "LinkedIn", value: "mohammed-thariq", href: identity.linkedin, icon: Linkedin, external: true },
];

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease }}
                    className="font-display text-4xl md:text-6xl text-ink uppercase leading-tight mb-6"
                >
                    Let&apos;s build
                    <br />
                    something great.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: 0.1 }}
                    className="text-sm md:text-base text-muted mb-12 max-w-md mx-auto"
                >
                    I&apos;m open to interesting projects, full-time opportunities and collaborations.
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                    {channels.map((channel) => (
                        <a
                            key={channel.label}
                            href={channel.href}
                            target={channel.external ? "_blank" : undefined}
                            rel={channel.external ? "noopener noreferrer" : undefined}
                            data-cursor=""
                            className="social-row rounded-xl px-5 py-4 flex items-center gap-3 w-full sm:w-auto"
                        >
                            <channel.icon size={18} className="text-accent-blue shrink-0" />
                            <div className="text-left">
                                <div className="text-[10px] uppercase tracking-widest text-muted">
                                    {channel.label}
                                </div>
                                <div className="text-sm text-ink">{channel.value}</div>
                            </div>
                        </a>
                    ))}
                </div>

                <motion.a
                    href={`mailto:${identity.email}`}
                    data-cursor=""
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: 0.2 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-bg font-display uppercase text-sm transition-transform duration-300 hover:scale-105"
                >
                    Let&apos;s talk
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
            </div>
        </section>
    );
}
