"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Layout, Briefcase, Server, CheckCircle2 } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Terminal className="w-6 h-6 text-brand-accent" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and fully typed code is my priority.",
        },
        {
            icon: <Layout className="w-6 h-6 text-brand-purple" />,
            title: "UI/UX Focus",
            description: "Translating complex designs into pixel-perfect responsive layouts.",
        },
        {
            icon: <Server className="w-6 h-6 text-emerald-400" />,
            title: "API Integration",
            description: "Seamlessly connecting frontends with complex backend architectures.",
        },
        {
            icon: <Briefcase className="w-6 h-6 text-amber-400" />,
            title: "Fintech Expert",
            description: "Deep experience building secure mutual fund platforms and admin portals.",
        },
    ];

    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        About <span className="text-gradient">Me</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-1 w-20 bg-brand-purple rounded-full"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I am a <strong className="text-white font-semibold">React & Next.js Developer</strong> with over 2 years of professional experience. Currently, I work as an Associate Software Engineer at Evoqins Pvt Ltd, where I build robust, scalable applications.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            My previous role at Asian Media Group helped me hone my skills in designing clean, maintainable architecture. I specialize in the <strong className="text-brand-accent font-semibold">financial technology sector</strong>, consistently delivering complex mutual fund platforms and comprehensive admin dashboards.
                        </p>

                        <div className="pt-4 grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-slate-200">
                                <CheckCircle2 className="text-brand-purple w-5 h-5 flex-shrink-0" />
                                <span>2+ Years Experience</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-200">
                                <CheckCircle2 className="text-brand-purple w-5 h-5 flex-shrink-0" />
                                <span>Performance Focused</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-200">
                                <CheckCircle2 className="text-brand-purple w-5 h-5 flex-shrink-0" />
                                <span>Responsive Design</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-200">
                                <CheckCircle2 className="text-brand-purple w-5 h-5 flex-shrink-0" />
                                <span>BCA Graduate (7.6 GPA)</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl flex flex-col gap-3"
                            >
                                <div className="p-3 glass rounded-xl inline-flex w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
