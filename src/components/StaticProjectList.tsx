"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";
import ProjectCardBody from "@/components/ProjectCardBody";

const ease = [0.16, 1, 0.3, 1] as const;

export default function StaticProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease }}
                    className="min-h-[520px] md:min-h-[600px]"
                >
                    <ProjectCardBody project={project} index={index} />
                </motion.div>
            ))}
        </div>
    );
}
