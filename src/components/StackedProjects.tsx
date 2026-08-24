"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectCardBody from "@/components/ProjectCardBody";
import StackedProjectLayer from "@/components/StackedProjectLayer";

export default function StackedProjects({ projects }: { projects: Project[] }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const total = projects.length;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    // Raw scrollYProgress snaps 1:1 with every wheel/trackpad tick, which reads as
    // choppy on discrete-delta input devices. Springing it adds a touch of inertia
    // so the card motion glides between scroll events instead of jumping.
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
        mass: 0.5,
        restDelta: 0.001,
    });

    useMotionValueEvent(smoothProgress, "change", (v) => {
        const idx = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
        setActive((prev) => (prev === idx ? prev : idx));
    });

    return (
        <div ref={sectionRef} style={{ height: `${total * 100}vh` }} className="relative">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
                {projects.map((project, index) => (
                    <StackedProjectLayer
                        key={project.name}
                        index={index}
                        total={total}
                        isActive={index === active}
                        scrollYProgress={smoothProgress}
                    >
                        <ProjectCardBody project={project} index={index} />
                    </StackedProjectLayer>
                ))}

                <div className="absolute bottom-8 left-6 md:left-12 z-40 flex items-center gap-4 pointer-events-none">
                    <div className="font-display text-xl flex items-baseline gap-1">
                        <motion.span
                            key={active}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-accent-blue"
                        >
                            {String(active + 1).padStart(2, "0")}
                        </motion.span>
                        <span className="text-muted text-sm">/ {String(total).padStart(2, "0")}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        {projects.map((project, i) => (
                            <span
                                key={project.name}
                                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                                    i === active ? "bg-accent-blue" : "bg-hairline-bright"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
