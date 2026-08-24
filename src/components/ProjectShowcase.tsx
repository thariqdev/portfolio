"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import StackedProjects from "@/components/StackedProjects";
import StaticProjectList from "@/components/StaticProjectList";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectShowcase() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const useStackedInteraction = !prefersReducedMotion;

    return (
        <section id="projects" className="relative">
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease }}
                    className="font-display text-3xl md:text-4xl text-ink uppercase mb-4"
                >
                    Selected Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.5, ease, delay: 0.1 }}
                    className="text-sm text-muted"
                >
                    Real fintech and product work, frontend and backend.
                </motion.p>
            </div>

            {useStackedInteraction ? (
                <StackedProjects projects={projects} />
            ) : (
                <div className="max-w-5xl mx-auto px-6 md:px-12 pb-28">
                    <StaticProjectList projects={projects} />
                </div>
            )}
        </section>
    );
}
