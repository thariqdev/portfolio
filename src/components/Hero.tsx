"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { identity } from "@/lib/data";
import HeroPortrait from "@/components/HeroPortrait";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [tagIndex, setTagIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTagIndex((i) => (i + 1) % identity.roleTags.length);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const exitOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
    const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

    return (
        <section id="hero" ref={sectionRef} className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-menu-glow" />
            <div className="absolute inset-0 bg-grid opacity-30" />

            <motion.div
                style={{ opacity: exitOpacity, y: exitY }}
                className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16"
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-16 items-center w-full"
                >
                    <div>
                        <motion.p
                            variants={fadeUp}
                            className="uppercase text-sm tracking-widest text-muted mb-4"
                        >
                            Hello, I am
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="font-display text-5xl md:text-7xl text-ink uppercase leading-[0.95] mb-6"
                        >
                            Mohammed
                            <br />
                            Thariq
                        </motion.h1>

                        <motion.div variants={fadeUp} className="text-xl md:text-2xl text-ink mb-3">
                            {identity.role}
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="h-6 overflow-hidden text-sm uppercase tracking-widest text-accent-blue mb-8"
                        >
                            <motion.span
                                key={identity.roleTags[tagIndex]}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease }}
                                className="block"
                            >
                                {identity.roleTags[tagIndex]}
                            </motion.span>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="text-base text-muted leading-relaxed max-w-md"
                        >
                            Building backend services and frontends for fintech products — mutual
                            fund platforms, admin dashboards, and the APIs that run them.
                        </motion.p>
                    </div>

                    <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
                        <HeroPortrait />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="max-w-6xl mx-auto w-full flex justify-center mt-16"
                >
                    <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
                        <span>Scroll to explore</span>
                        <span className="text-accent-blue">↓</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
