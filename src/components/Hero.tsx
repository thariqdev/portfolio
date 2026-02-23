"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6 inline-block">
                        <span className="px-4 py-2 rounded-full glass border-brand-purple/30 text-brand-accent text-sm font-medium tracking-wide">
                            Hey there, I am
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white"
                    >
                        Mohammed <span className="text-gradient">Thariq</span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-xl md:text-3xl font-medium text-slate-300 mb-8"
                    >
                        React & Next.js Developer | Fintech Specialist
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Passionate React Developer with 2+ years of experience building scalable mutual fund platforms, admin dashboards, and financial technology applications.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-blue font-semibold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                        >
                            View Projects
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-full glass border-brand-purple hover:bg-brand-purple/10 text-white font-semibold flex items-center justify-center gap-2 transition-all"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
