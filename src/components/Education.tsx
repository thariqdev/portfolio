"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Education & <span className="text-gradient">Certifications</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group"
                    >
                        {/* Background glow effect */}
                        <div className="absolute top-0 right-0 p-12 bg-brand-purple/5 rounded-bl-[100px] transition-colors group-hover:bg-brand-purple/10" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="p-4 glass bg-brand-blue/80 rounded-2xl flex-shrink-0">
                                <GraduationCap className="w-10 h-10 text-brand-accent" />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Bachelor of Computer Applications (BCA)
                                </h3>
                                <p className="text-lg text-brand-purple font-medium mb-4">
                                    Chinmaya College of Arts, Science & Commerce
                                </p>

                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Comprehensive study of computer science principles, database management systems, and software engineering. Developed a strong foundation in modern programming paradigms and data structures.
                                </p>

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-accent/30 text-brand-accent">
                                    <Award size={18} />
                                    <span className="font-semibold text-sm">Graduated with 7.6 GPA</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
