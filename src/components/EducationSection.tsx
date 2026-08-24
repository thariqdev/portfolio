"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function EducationSection() {
    return (
        <section id="education" className="pb-28 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease }}
                    className="font-display text-3xl md:text-4xl text-ink uppercase mb-12"
                >
                    Education
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {education.map((item, i) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                            className="panel-card p-6"
                        >
                            <GraduationCap size={22} className="text-accent-blue mb-4" />
                            <h3 className="font-display text-lg text-ink uppercase mb-1">
                                {item.degree}
                            </h3>
                            <p className="text-sm text-muted mb-3">{item.institution}</p>
                            <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-hairline text-accent-blue">
                                {item.note}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
