"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 60%"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-28 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease }}
                    className="font-display text-3xl md:text-4xl text-ink uppercase mb-16"
                >
                    Experience
                </motion.h2>

                <div ref={containerRef} className="relative pl-10">
                    <div className="absolute left-[3px] top-0 bottom-0 w-px bg-hairline" />
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[3px] top-0 w-px timeline-line"
                    />

                    <div className="flex flex-col gap-16">
                        {experience.map((item) => (
                            <motion.div
                                key={item.company}
                                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-15%" }}
                                transition={{ duration: 0.6, ease }}
                                className="relative"
                            >
                                <span
                                    className={`absolute -left-10 top-1.5 w-2 h-2 rounded-full ${
                                        item.current ? "bg-accent-blue shadow-[0_0_10px_rgba(56,189,248,0.6)]" : "bg-muted"
                                    }`}
                                />
                                <div className="text-xs uppercase tracking-widest text-muted mb-2">
                                    {item.duration}
                                </div>
                                <h3 className="font-display text-xl text-ink uppercase mb-1">
                                    {item.company}
                                </h3>
                                <div className="text-sm text-accent-blue mb-3">{item.role}</div>
                                <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-hairline text-ink/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
